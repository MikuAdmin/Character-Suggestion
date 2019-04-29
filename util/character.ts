'use strict'

type sex = "M" | "F";
type type = "Anime Character" | "Ship" | "Plane" | "Tank" | "Other";

/**
 * @classdesc -  Creates a new character with the attributes you specified an adds it to my [database](https://sololearn-example.firebaseio.com/) were I'll see him or her and I'm gonna try to draw the character. @see my [instagram](https://www.instagram.com/adm1nmiku/) or provide your email for the result. This may take a while.
 */

export default class Character {

    name:string;
    type:type;
    gender:sex;
    cv:string;
    vehicleName:string;
    submitter:string;

    /**
     * @param name - The name the character should be given.
     * @param type - The type the character is, can be "Anime Character", "Ship", "Plane", "Tank" or "Other". If you choose "Other" you will be prompted to add the type yourself.
     * @param gender - Is it a he or a she, you decide, but if you choose ship or tank it must and even if you choose "M", it'll still be "F".
     * @param cv - [Optional] Add if you want, buf if character is a ship, tank or plane, this is a required parameter.
     */

    constructor(name:string, type:type, gender:sex, submitter:string, vehicleName:string=null, cv:string=null) {
        
        this.name = name;
        this.submitter = submitter;
        this.gender = gender;
        this.type = type;
        this.vehicleName = vehicleName;
        this.cv = cv;

        if (type == "Other") {
            let otherType = prompt("You selectected \"Other\" as the type, please specify in the following field:");
            this.type = null;
            this.vehicleName = null;
            this.cv = null || cv;
        }
    }
}