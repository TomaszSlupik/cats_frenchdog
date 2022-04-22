const buttonOne = document.querySelector(".buttonOne");
const buttonTwo = document.querySelector(".buttonTwo");
const cat = document.querySelector(".cat");
const fa_solid = document.querySelector(".fa-solid");
const pet = document.querySelector(".pet");
const div = document.querySelector(".dog");
const middle = document.querySelector(".middle");
const focus = document.querySelector(".focus-in-contract-bck");
const middleTwo = document.querySelector(".middleTwo");

const addClass = () => {
	const div = document.createElement("div");
	div.classList.add("dog");
	pet.append(div);
	div.style.height = "450px";
	cat.style.height = "0px";
};

const change = () => {
	cat.style.height = "450px";
};

const textApp = () => {
	focus.style.fontSize = "80px";
};

const textAppTwo = () => {
	focus.style.fontSize = "40px";
};
buttonOne.addEventListener("click", addClass);
buttonTwo.addEventListener("click", change);
middle.addEventListener("click", textApp);
middleTwo.addEventListener("click", textAppTwo);
