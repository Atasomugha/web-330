/*
================================================
* Title: calorie-converter.js
    Author: Professor Krasso
    Date: 29 January 2023
    Modified By: Anachebe Asomugha
    Description: Static properties for WEB 330 Assignment 4.2
================================================    
 */
import { FoodModel } from "./food-model.js"; // Importing FoodModel Class module

export class CalorieConverter extends FoodModel { // Exporting CalorieConverter class
    static data = [ // Static Variable "data"

        // FoodModel objects to populate table
        new FoodModel (1007, "Egg", 78),
        new FoodModel (1008, "Apple",95 ),
        new FoodModel (1009, "Hamburger", 354),
        new FoodModel (1010, "Fries", 400),
        new FoodModel (1011, "Banana", 105),
        new FoodModel (1012, "Soda", 150)
    ]

    static find(name) { //Static function named "find"

        // Returns array with data matching parameter string
        return CalorieConverter.data.filter(input => input.name.toLowerCase().includes(name.toLowerCase()));
    }
    }
