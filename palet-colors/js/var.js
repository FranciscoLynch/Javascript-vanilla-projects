const color = document.querySelector("#color");
const outputValue = document.querySelector("#salida");
const list = document.querySelector('#lista');
const colorCounter = document.querySelector('#colorCounter');

const storage = JSON.parse(localStorage.getItem("colorValue")) || "#ffffff";

const colorList = JSON.parse(localStorage.getItem("colorList")) || [];
