/*
================================================
* Title: food-model.js
    Author: Professor Krasso
    Date: 29 January 2023
    Modified By: Anachebe Asomugha
    Description: JavaScript class module for WEB 330 Assignment 4.2
================================================    
 */

export class FoodModel { // Creates and exports foodModel class
    constructor(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
};