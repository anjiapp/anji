//const { promises } = require("dns");

// Configuration
const DECAY = -0.5; // Decay constant for FSRS
const FACTOR = 0.9 ** (1 / DECAY) - 1; // Factor used in the forgetting curve
const maximumInterval = 365; // Example maximum interval in days
const requestRetention = 0.9; // Desired retention rate
const enable_fuzz = false;

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
  //return Math.min(Math.max(Math.round(new_interval), 1), maximumInterval);
  console.log(new_interval)
  return new_interval;
  return Math.max(new_interval, maximumInterval);
}

// Calculate next difficulty based on the rating
function next_difficulty(d, rating) {
  const next_d = d - w[6] * (ratings[rating] - 3);
  return constrain_difficulty(mean_reversion(w[4], next_d));
}

// Apply mean reversion to difficulty
function mean_reversion(init, current) {
  return w[7] * init + (1 - w[7]) * current;
}

// Calculate next stability for recall
function next_recall_stability(d, s, r, rating) {
  const hardPenalty = rating === "hard" ? w[15] : 1;
  const easyBonus = rating === "easy" ? w[16] : 1;
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
  const min_ivl = Math.max(2, Math.round(ivl * 0.95 - 1));
  const max_ivl = Math.round(ivl * 1.05 + 1);
  // ... additional logic for calculating the fuzzed interval ...
  return Math.floor(fuzz_factor * (max_ivl - min_ivl + 1) + min_ivl);
}

export async function fsr(currentStability, currentDifficulty, elapsedDays, userRating) {
    //Calculate new stability and difficulty
    const retrievability = forgetting_curve(elapsedDays, currentStability);
    let newDifficulty = next_difficulty(currentDifficulty, userRating);
    let newStability = userRating === 'again' ? 
                    next_forget_stability(currentDifficulty, currentStability, retrievability) :
                    next_recall_stability(currentDifficulty, currentStability, retrievability, userRating);
   
    //Calulate next review date
    const nextReviewInterval = next_interval(newStability);
    const nextReviewDate = new Date(Date.now() + nextReviewInterval * 24 * 60 * 60 * 1000);
    
    
    //Limit the stability and difficulty to be within the range
    newStability = Math.min(Math.max(newStability, 0), 100);
    newDifficulty = Math.min(Math.max(newDifficulty, 0), 10);

    if (newDifficulty > 10 || newStability > 100 || newDifficulty < 0 || newStability < 0) {
      
      throw new Error(newStability + " " + newDifficulty + "");
    }

    return {
        newStability,
        newDifficulty,
        nextReviewDate
    }
}
