/*
================================================
* Title: float-field.js
    Author: Professor Krasso
    Date: 12 February 2023
    Modified By: Anachebe Asomugha
    Description: Creates FloatField class for WEB 330 Assignment 6.2
================================================    
 */
"use-strict";

export class FloatField {  // Create and export FloatField class
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }
    validate() {
        return !isNaN(parseFloat(this.field));
    }
    getMessage() { // Create function to return error message
        return `${this.name} must be a float value. You entered ${this.field}`
    }   
};