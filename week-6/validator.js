/*
================================================
* Title: validator.js
    Author: Professor Krasso
    Date: 12 February 2023
    Modified By: Anachebe Asomugha
    Description: JavaScript Validator module for WEB 330 Assignment 6.2
================================================    
 */
"use-strict";

// Import Statements
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

// Creates and exports the validator class and empty arrays for its properties
export class Validator {
    validators = [];
    messages = [];
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }
    
    // These 4 functions validate user input against the 4 imported classes
    addRequiredField() {
        this.validators.push(new RequiredField(this.name, this.field));
    }

    addRequiredFloatField() {
        this.validators.push(new FloatField(this.name, this.field));
    }

    addFloatMinField(min) {
        this.validators.push(new FloatMinField(this.name, this.field, this.min));
    }

    addFloatMaxField(max) {
        this.validators.push(new FloatMaxField(this.name, this.field, this.max));
    }

    validate() {
        for(let v of this.validators) {
            if (v.validate() === false) {
                this.messages.push(v.getMessage());
                return false;
            }
        }
        return true;
    }
}