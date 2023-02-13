/*
================================================
* Title: finance-calculator.js
    Author: Professor Krasso
    Date: 12 February 2023
    Modified By: Anachebe Asomugha
    Description: Creates FinanceCalculator class for WEB 330 Assignment 6.2
================================================    
 */
"use-strict";

export class FinanceCalculator { // Create FinanceCalculator class
    static MONTHS_IN_YEAR = 12;

    /*Create a static function named calculateFutureValue with three parameters 
    to return Future Value to nearest cent*/
    static calculateFutureValue(monthlyPayment, rate, years) {
        let months = years * this.MONTHS_IN_YEAR;
        let interestRate = 1 + rate/100;
        let presentValue = monthlyPayment * months;
        let futureValue = presentValue * Math.pow(interestRate, months);

        return futureValue.toFixed(2);
    }

    static convertToCurrency(field){ // Convert calculated value to US dollars
        let currencyFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        });
        return currencyFormatter.format(field);
    }
}