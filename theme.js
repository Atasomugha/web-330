/*
================================================
* Title: theme.js
    Author: Professor Krasso
    Date: 7 January 2023
    Modified By: Anachebe Asomugha
    Description: JavaScript functions for WEB 330 Landing page
================================================    
 */

/* Light-theme is default setting, unless user's localStorage has differing preference set */
function setDefaultTheme()
{
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}

/**
 * Set the HTML body to the user's selected theme. If one has not been selected, set the theme to light-theme
 */
function setSelectedTheme()
{
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}

