/*
================================================
* Title: required-field.js
    Author: Professor Krasso
    Date: 12 February 2023
    Modified By: Anachebe Asomugha
    Description: Creates RequiredField class for WEB 330 Assignment 6.2
================================================    
 */
"use-strict";
// Creates class RequiredField
export class RequiredField {
    constructor (name, field) {
        this.name = name;
        this.field = field;
    }
    validate () {   // Returns true if field is a string
        return Boolean(this.field);
    }
    getMessage() {  // Returns error message if name is empty
        return `${this.name} is a required field.`;
    }
}