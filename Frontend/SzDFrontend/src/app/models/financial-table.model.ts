export class FinancialTable{

    title: String;
    description: String;
    plan: Number;
    fact: Number;
    nextPlan: Number;
    house_id: Number;
    constructor(
        title: String,
        description: String,
        plan: Number,
        fact: Number,
        nextPlan: Number,
        house_id: Number
    ){
        this.title = title;
        this.description = description;
        this.plan = plan;
        this.fact = fact;
        this.nextPlan = nextPlan;
        this.house_id = house_id;
    }
}