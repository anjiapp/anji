enum dueStatus {
    overdue = 'overdue',
    due = 'due',
    later = 'later',
}

export enum cardState {
    new = 'new', //New card, never seen before
    learning = 'learning', //Learning card, seen before, but not yet stable
    review = 'review', //Review card, stable card
    relearning = 'relearning', //Relearning card, card that was stable, but has been forgotten
    suspended = 'suspended', //Suspended card, card that is not being studied
    buried = 'buried', //Buried card, card that is not being studied, but will be unburied after a certain amount of time
}

type cardMetadata = {
    id: number;
    combinations: { front: number[], back: number[]};
    fields: Array<string>; 
}

const DefaultCardMetadata: cardMetadata = {
    id: 0,
    combinations: { front: [], back: []},
    fields: [],
}

export class Card {
    private _metadata: cardMetadata = DefaultCardMetadata;

    //Used for scheduling
    public currentStability: number = 50; //Between 0 and 100
    public newDifficulty: number = 5; //Between 0 and 10
    public LastReviewed: number = Date.now(); //Unix timestamp
    public nextReview: number = Date.now(); //Unix timestamp

    private cardState: cardState = cardState.new;
    private dueStatus: dueStatus = dueStatus.later;

    static async createCard() {
        let card = new Card();
        card._metadata = DefaultCardMetadata;
        card.currentStability = 50;
        card.newDifficulty = 5;
        card.LastReviewed = 0;
        card.nextReview = 0;
        card.cardState = cardState.new;
        card.dueStatus = dueStatus.later;
        return card;
    }

    static async numberToDate(num: number) {
        let d = new Date(num);
        return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
    }

    //To Calulate the current States
    private calulateDueState() {
        let today = Card.numberToDate(Date.now());
        let nextReview = Card.numberToDate(this.nextReview);
        //If the 

        if (today > nextReview) {
            this.dueStatus = dueStatus.overdue;
        } else if (today == nextReview) {
            this.dueStatus = dueStatus.due;
        } else  {
            this.dueStatus = dueStatus.later;
        }

        return;
    }

    private calulateCardState() {
        
    } 

    public async getDueState() {
        this.calulateDueState();
        return this.cardState;
    }

    public async getCardState() {
        return this.cardState;

    }

}