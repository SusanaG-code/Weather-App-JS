"use strict";
const searchButton = document.querySelector(".js-btn");
const searchCity = document.querySelector("#city");
let cityData = [];
const loadingText = document.querySelector("#load");
const weatherBox = document.querySelector("#weather");

const weatherCity = weatherBox.firstElementChild;
const weatherDescription = document.querySelector("#weatherDescription");
const weatherTemperature = weatherBox.lastElementChild;
