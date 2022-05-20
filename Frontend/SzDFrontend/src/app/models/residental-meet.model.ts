
export class ResidentalMeet{
    title: string;
    description: string;
    financial_table_id: number;
    house_id : number;

    constructor(
        title: string,
        description: string,
        financial_table_id: number,
        house_id: number,
    ){
        this.title = title;
        this.description = description;
        this.financial_table_id = financial_table_id;
        this.house_id = house_id;

    }

}