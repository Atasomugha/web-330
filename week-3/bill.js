/*
================================================
* Title: bill.js
    Author: Professor Krasso
    Date: 22 January 2023
    Modified By: Anachebe Asomugha
    Description: JavaScript module for WEB 330 Assignment 3.2
================================================    
 */

import { Appetizer } from "./appetizer.js"; // Importing appetizer class
import { Beverage } from "./beverage.js"; // Importing beverage class
import { Dessert } from "./dessert.js"; // Importing dessert class
import { MainCourse } from "./main-course.js"; // Importing mainCourse class

export class Bill { // Creating and exporting class
    constructor( _beverages, _appetizers, _mainCourses, _desserts){
        this._beverages = [];
        this._appetizers = [];
        this._mainCourses = [];
        this._desserts = [];
    }


addBeverage(beverage) { // adds value to beverage array
    this._beverages.push(beverage);
}

addAppetizer(appetizer) { // adds value to appetizer array
    this._appetizers.push(appetizer);
}

addMainCourse(mainCourse) { // adds value to mainCourse array
    this._mainCourses.push(mainCourse);
}

addDessert(dessert) { // adds value to dessert array
    this._desserts.push(dessert);
}

getTotal() { //  Function to determine total price
    let total = 0;
    let beverageTotal = this._beverages.forEach(function(beverage) {
        total += parseFloat(beverage.price);
    }) 

    let appetizerTotal = this._appetizers.forEach(function(appetizer) {
        total += parseFloat(appetizer.price);
    })

    let mainCourseTotal = this._mainCourses.forEach(function(mainCourse) {
        total += parseFloat(mainCourse.price);
    })

    let dessertTotal = this._desserts.forEach(function(dessert) {
        total += parseFloat(dessert.price);
    })

    return total.toFixed(2);
}
}