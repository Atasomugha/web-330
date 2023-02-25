/*
    Title: http-client.js
    Author: Professor Krasso
    Date: 26 February 2023
    Modified By: Anachebe Asomugha
    Description: Creates and exports the HTTPClient class and parameters 
                 for WEB 330 Assignment 8.2
*/

// Class creation and export
export class HttpClient {
    async get(url, params = "") {
        url = new URL(url);
        url.search = new URLSearchParams(params);
        const res = await fetch(url.toString(), {
            method: "GET",
        })
        return res.json();
    }
}