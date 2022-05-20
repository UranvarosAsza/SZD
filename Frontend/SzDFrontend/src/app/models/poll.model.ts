


export class Poll {

    title: String;
    description: String;
    label: String;
    votes: number;
    house_id: number;
    constructor(

        title: String,
        description: String,
        label: String,
        votes: number,
        house_id: number
        ) {

        this.title = title;
        this.description = description;
        this.label = label;
        this.votes = votes;
        this.house_id = house_id;

    }

}
