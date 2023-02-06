/*
================================================
* Title: cart-component.js
    Author: Professor Krasso
    Date: 5 February 2023
    Modified By: Anachebe Asomugha
    Description: JavaScript module for WEB 330 Assignment 5.2
================================================    
 */

"use-strict";
// Creates CartComponent class an makes it usable as an html element
class CartComponent extends HTMLElement {     constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;
    }
}
customElements.define('cart-component', CartComponent);