// Configuration
const DECAY = -0.5; // Decay constant for FSRS
const FACTOR = 0.9 ** (1 / DECAY) - 1; // Factor used in the forgetting curve
let maximumInterval = 36500; // Example maximum interval in days
let requestRetention = 0.9; // Desired retention rate
let enable_fuzz = false;

const w = [0.4, 0.6, 2.4, 5.8, 4.93, 0.94, 0.86, 0.01, 1.49, 0.14, 0.94, 2.18, 0.05, 0.34, 1.26, 0.29, 2.61]
const ratings = {
  "again": 1,
  "hard": 2,
  "good": 3,
  "easy": 4
};

// Forgetting curve calculation
function forgetting_curve(elpased_days, stability) {
  return Math.pow(1 + FACTOR * elpased_days / stability, DECAY);
}

// Calculate next interval
function next_interval(stability) {
  const new_interval = apply_fuzz(stability / FACTOR * (Math.pow(requestRetention, 1 / DECAY) - 1));
  return Math.min(Math.max(Math.round(new_interval), 1), maximumInterval);
}

// Calculate next difficulty based on the rating
function next_difficulty(d, rating) {
  let next_d = d - w[6] * (ratings[rating] - 3);
  return constrain_difficulty(mean_reversion(w[4], next_d));
}

// Apply mean reversion to difficulty
function mean_reversion(init, current) {
  return w[7] * init + (1 - w[7]) * current;
}

// Calculate next stability for recall
function next_recall_stability(d, s, r, rating) {
  let hardPenalty = rating === "hard" ? w[15] : 1;
  let easyBonus = rating === "easy" ? w[16] : 1;
  return +(s * (1 + Math.exp(w[8]) *
    (11 - d) *
    Math.pow(s, -w[9]) *
    (Math.exp((1 - r) * w[10]) - 1) *
    hardPenalty *
    easyBonus)).toFixed(2);
}

// Calculate next stability for forgetting
function next_forget_stability(d, s, r) {
  return +Math.min(w[11] *
    Math.pow(d, -w[12]) *
    (Math.pow(s + 1, w[13]) - 1) *
    Math.exp((1 - r) * w[14]), s).toFixed(2);
}

// Helper Functions

// Constrain difficulty to be within allowable limits
function constrain_difficulty(difficulty) {
  return Math.min(Math.max(+difficulty.toFixed(2), 1), 10);
}

// Apply fuzz to an interval to avoid cards clustering
function apply_fuzz(ivl) {
  if (!enable_fuzz || ivl < 2.5) return ivl;
  ivl = Math.round(ivl);
  let min_ivl = Math.max(2, Math.round(ivl * 0.95 - 1));
  let max_ivl = Math.round(ivl * 1.05 + 1);
  // ... additional logic for calculating the fuzzed interval ...
  return Math.floor(fuzz_factor * (max_ivl - min_ivl + 1) + min_ivl);
}

// Ensure these variables are defined in your context:


let userRating = 'easy'; // This would be dynamic based on user interaction

// Retrieve or calculate the current card's stability and difficulty
let currentStability = 12.15/* Retrieve from card data */;
let currentDifficulty = 7/* Retrieve from card data */;
let elapsedDays = 2/* Calculate or retrieve the number of days since last review */;

console.log('currentStability', currentStability);
console.log('currentDifficulty', currentDifficulty);
console.log('elapsedDays', elapsedDays);


// Calculate retrievability
let retrievability = forgetting_curve(elapsedDays, currentStability);

// Calculate new difficulty
let newDifficulty = next_difficulty(currentDifficulty, userRating);

// Calculate new stability
let newStability = userRating === 'again' ? 
                   next_forget_stability(currentDifficulty, currentStability, retrievability) :
                   next_recall_stability(currentDifficulty, currentStability, retrievability, userRating);

// Calculate the next interval for the card review
let card = {
  stability: 0,
  difficulty: 0,
  nextReviewDate: ''
};


let nextReviewInterval = next_interval(newStability);
let currentDate = new Date();
let nextReviewDate = new Date(currentDate.getTime() + nextReviewInterval * 24 * 60 * 60 * 1000);
newStability = Math.min(Math.max(newStability, 0), 100);
newDifficulty = Math.min(Math.max(newDifficulty, 0), 10);
card.stability = newStability;
card.difficulty = newDifficulty;
let fuzzedInterval = apply_fuzz(nextReviewInterval);
card.nextReviewDate = nextReviewDate.toISOString().split('T')[0]; // Outputs date as 
