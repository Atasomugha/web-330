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

export class FloatMaxField {
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    }
    validate() {
        let input = parseFloat(this.field);
        if (input < this.max) {
            return true;
        }
        
    }
    getMessage() {
        return `${this.name} must be less than ${this.max}. You entered ${this.field}`;
    }
}