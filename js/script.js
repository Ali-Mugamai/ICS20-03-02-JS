// Copyright (c) 2020 Ali Mugamai All rights reserved
//
// Created by: Ali Mugamai
// Created on: oct 2022
// This file contains the JS functions for index.html

"use strict"

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-03-02-JS/sw.js", {
    scope: "/ICS20-03-02-JS/",
  })
}
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {
  // input
  const height = parseInt(document.getElementById("height").value)
  const width = parseInt(document.getElementById("width").value)
  const length = parseInt(document.getElementById("length").value)
  // process
  const area = (height * width * length) / 3
  // output
  document.getElementById("area").innerHTML = "Area is: " + area + " cm³"
}
