export class User{
    user_id: number;
    username: String;
    isadmin: boolean;
    adress: string;
    house_id: number;

    constructor(
        user_id: number,
        username: string,
        isadmin: boolean,
        adress: string,
        house_id: number
    ){
       this.user_id = user_id;
       this.username = username;
       this.isadmin = isadmin;
       this.adress  =adress;
       this.house_id = house_id;
    }

}