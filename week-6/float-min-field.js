/*
================================================
* Title: float-min-field.js
    Author: Professor Krasso
    Date: 12 February 2023
    Modified By: Anachebe Asomugha
    Description: Creates FloatMinField class for WEB 330 Assignment 6.2
================================================    
 */
"use-strict";

export class FloatMinField {     // Create and export FloatMinField class
    constructor(name, field, min) {
        this.name = name;
        this.field = field;
        this.min = min;
    }
    validate() {   // Checks to see if the field value is greater than the min value
        let input = parseFloat(this.field);
        if (input > this.min) {
            return true;
        }
    }

    getMessage() {  // Sends an error message if the field value is less than the min value
        return `${this.name} must be more than ${this.min}. You entered ${this.field}`;
    }

}