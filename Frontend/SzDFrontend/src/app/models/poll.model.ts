


export class Poll {

    title: String;
    description: String;
    label: String;
    //label` ENUM('HMaster', 'Residental'),
    house_id: Number;
    constructor(

        title: String,
        description: String,
        label: String,
        house_id: Number) {

        this.title = title;
        this.description = description;
        this.label = label;
        this.house_id = house_id;

    }

}
