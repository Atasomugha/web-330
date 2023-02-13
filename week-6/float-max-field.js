/*
================================================
* Title: float-max-field.js
    Author: Professor Krasso
    Date: 12 February 2023
    Modified By: Anachebe Asomugha
    Description: Creates FloatMaxField class for WEB 330 Assignment 6.2
================================================    
 */
"use-strict";

export class FloatMaxField { // Create and export FloatMaxField class
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    }
    validate() {  // Checks to see if the field value is less than the max value
        let input = parseFloat(this.field);
        if (input < this.max) {
            return true;
        }
        
    }
    getMessage() {  // Sends an error message if the field value is greater than the max value
        return `${this.name} must be less than ${this.max}. You entered ${this.field}`;
    }
}