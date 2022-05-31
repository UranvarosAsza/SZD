export class News {
    title: String;
    description: String;
    label: String;
    house_id: Number;
    news_id?: Number;
    timestamp?: Date;

    constructor(title: String,
        description: String,
        label: String,
        house_id: number,
        timestamp?: Date,
        news_id?: Number
        ) {

        this.title = title;
        this.description = description;
        this.label = label;
        this.news_id = news_id;
        this.timestamp = timestamp;
        this.house_id = house_id;
    }
}
