const nameInput = document.getElementById("Name");
const frogsInput = document.getElementById("NumberFrogs");
const eyesInput = document.getElementById("NumberEyes");
const woolsInput = document.getElementById("Numberwools");
const button = document.querySelector("button");

button.addEventListener("click", function() {
    const monsterName = nameInput.value;
    const numberFrogs = frogsInput.value;
    const numberEyes = eyesInput.value;
    const numberWools = woolsInput.value;