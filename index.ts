'use strict'

type type = "AR" | "BB" | "BC" | "CA" | "CB" | "CL" | "CV" | "CVA" | "CVAN" | "CVB" | "CVE" | "CVL" | "CVN" | "CVS" | "DD" | "Light Tank" | "Medium Tank" | "Heavy Tank" | "Tank Destroyer" | "Minesweeper" | "Fighter" | "Bomber" | "Torpedo Bomber" | "Spotter" | "Suicide Bomber";

import App from "./main";
import { database } from "firebase-admin";
import Character from "./util/character";

/**
 * @classdesc The character you want so suggest.
 * @constructs Character you want to create.
 * @copyright Miku 2019
 */

export default class CharacterSuggestion {

    character:Character;

    constructor(character:Character, type:type) {
        this.character = character;
        var db:database.Database = App.database();
        var ref = db.ref(`${this.character.type == "Other" ? "others" : "game"}/${this.character.type.toLowerCase()}s`);
        var child = ref.child(`${this.character.name.toLowerCase()}`);
        if (this.character.type != "Other") {
            child.set({
                cv: this.character.cv,
                name: this.character.name,
                submitter: this.character.submitter,
                sex: this.character.gender,
                type: this.character.type,
                vehicleType: type
            });
        }
        else {
            child.set({
                cv: this.character.cv,
                name: this.character.name,
                submitter: this.character.submitter,
                sex: this.character.gender
            });
        }
    }
}