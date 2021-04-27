import { createStore } from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const num = document.querySelector("span");

let count = 0;

num.innerText = count;

const updateText = () => {
  num.innerText = count;
};


const handleAdd = () => {
  count++;
  updateText();
};

const handleMinus = () => {
  count--;
  updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);