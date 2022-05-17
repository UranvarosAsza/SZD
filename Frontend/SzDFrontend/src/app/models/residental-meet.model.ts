
export class ResidentalMeet{
    title: String;
    description: String;
    financial_table_id: Number;
    house_id : Number;

    constructor(
        title: String,
        description: String,
        financial_table_id: Number,
        house_id: Number,
    ){
        this.title = title;
        this.description = description;
        this.financial_table_id = financial_table_id;
        this.house_id = house_id;

    }

}