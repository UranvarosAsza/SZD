import { LEADING_TRIVIA_CHARS } from "@angular/compiler/src/render3/view/template";

export class News {
    title: String;
    description: String;
    label: String;
    news_id?: Number;
    timestamp?: Date;

    constructor(title: String,
        description: String,
        label: String,
        timestamp?: Date,
        news_id?: number) {

        this.title = title;
        this.description = description;
        this.label = label;
        this.news_id = news_id;
        this.timestamp = timestamp;
    }
}
