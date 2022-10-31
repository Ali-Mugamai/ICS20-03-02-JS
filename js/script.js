// Copyright (c) 2020 Ali Mugamai All rights reserved
//
// Created by: Ali Mugamai
// Created on: oct 2022
// This file contains the JS functions for index.html

"use strict"

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-03-01-JS/sw.js", {
    scope: "/ICS20-03-01-JS/",
  })
}
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {
  // input
  const height = parseInt(document.getElementById("height").value)
  const base = parseInt(document.getElementById("base").value)
  const top = parseInt(document.getElementById("top").value)
  // process
  const area = ((base + top) / 2) * height
  // output
  document.getElementById("area").innerHTML = "Area is: " + area + " cm²"
}