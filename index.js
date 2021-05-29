// Write your code here!
document.querySelector(`main`).remove();

let newHeader = document.createElement(`h1`);

newHeader.id = `victory`;

newHeader.innerHTML = "<h1>Drew is the champion</h1>"

document.body.append(newHeader)