import { fsr } from "./src/modules/fsr.js";

let deck = {
    _metadata: {
        id: 1,
        name: "Default",
        description: "Default deck",
        location: "default",
        lastPlayed: Date.now(),
        created: Date.now(),
        DefaultDifficulty: 5,
        DefaultStability: 50,
        tags: ["Default", "default"],
    },

    cards: [
        {
            _metadata: {
                id: 1,
                combinations: { front: [0], back: [1] },
                fields: ["Hello", "Hola"],
            },
            currentStability: 50,
            newDifficulty: 5,
            lastReviewed: Date.now(),
            nextReview: Date.now(),
            cardState: "new",
            dueStatus: "later"
        },
        {
            _metadata: {
                id: 2,
                combinations: { front: [0], back: [1] },
                fields: ["Hello", "ni-hao"],
            },
            currentStability: 50,
            newDifficulty: 5,
            lastReviewed: Date.now(),
            nextReview: Date.now(),
            cardState: "new",
            dueStatus: "later"
        },
        {
            _metadata: {
                id: 3,
                combinations: { front: [0], back: [1] },
                fields: ["Hello", "Bonjour"],
            },
            currentStability: 50,
            newDifficulty: 5,
            lastReviewed: Date.now(),
            nextReview: Date.now(),
            cardState: "new",
            dueStatus: "later"
        }
    ]
}



console.log(fsr(deck.cards[0].currentStability, deck.cards[0].newDifficulty, 1, "hard"));
