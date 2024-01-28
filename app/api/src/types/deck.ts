import { Card, cardState } from './card.js';
import { User } from './user.js';

type deckMetadata = {
    id: number;
    name: string;
    description: string;
    location: string;
    LastPlayed: number; //Unix timestamp
    DateCreated: number; //Unix timestamp
    
    DefaultDifficulty: number; //Between 0 and 10
    DefaultStability: number; //Between 0 and 100

    Tags: Array<string>;
}

const defaultDeckMetadata: deckMetadata = {
    id: 0,
    name: '',
    description: '',
    location: '',
    LastPlayed: 0,
    DateCreated: 0,
    DefaultDifficulty: 5,
    DefaultStability: 50,
    Tags: []
}

export class Deck {
    public _metadata: deckMetadata = defaultDeckMetadata;

    public cards: Array<Card> = [];

    static async createDeck() {
        let deck = new Deck();
        deck._metadata = {
            id: await User.getNewDeckId(),
            name: 'Deck Name',
            description: '',
            location: '',
            LastPlayed: 0,
            DateCreated: Date.now(),
            DefaultDifficulty: 5,
            DefaultStability: 50,
            Tags: []
        }
        deck.cards = [];
        return deck;
    }

    private getDueDateSummary() {
        let today = Card.numberToDate(Date.now());
        let overdue = Array<Card>();
        let due = Array<Card>();
        let later = Array<Card>();

        this.cards.forEach(async (card: Card) => {
            let nextReview = Card.numberToDate(card.nextReview);
            if (today > nextReview) {
                overdue.push(card);
            } else if (today == nextReview) {
                due.push(card);
            } else  {
                later.push(card);
            }
        });
        return {
            overdue: overdue,
            due: due,
            later: later
        }
    }

    private getCardsStateSummary() {
        let newState = Array<Card>();
        let learningState = Array<Card>();
        let reviewState = Array<Card>();
        let relearningState = Array<Card>();
        let suspendedState = Array<Card>(); 
        let buriedState = Array<Card>();

        this.cards.forEach(async (card: Card) => {
            let state = await card.getCardState(); 
            if(state == cardState.new) {
                newState.push(card);
            } else if(state == cardState.learning) {
                learningState.push(card);
            } else if(state == cardState.review) {
                reviewState.push(card);
            } else if(state == cardState.relearning) {
                relearningState.push(card);
            } else if(state == cardState.suspended) {
                suspendedState.push(card);
            } else if(state == cardState.buried) {
                buriedState.push(card);
            }
        });
        return {
            new: newState,
            learning: learningState,
            review: reviewState,
            relearning: relearningState,
            suspended: suspendedState,
            buried: buriedState
        }
    }

    public async DueDateSummary() {
        let summary = await this.getDueDateSummary();
        return {
            overdue: summary.overdue.length,
            due: summary.due.length,
            later: summary.later.length
        };
    }

    public async CardStateSummary() {
        let summary = await this.getCardsStateSummary();
        return {
            new: summary.new.length,
            learning: summary.learning.length,
            review: summary.review.length,
            relearning: summary.relearning.length,
            suspended: summary.suspended.length,
            buried: summary.buried.length
        };
    }


}