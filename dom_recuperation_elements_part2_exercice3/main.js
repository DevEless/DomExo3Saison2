let cont = document.querySelector('#content')
console.log(cont)

const contentDiv = document.querySelectorAll("#content");
console.log(contentDiv);

const importantLi = document.querySelector(".important");
console.log(importantLi);

const importantLiAll = document.querySelectorAll(".important");
console.log(importantLiAll);

const liElements = document.querySelectorAll("li");
liElements.forEach(function(li) {
    const text = li.textContent;
    const lastLetter = text[text.length-1].toUpperCase();
    console.log(text.substring(0, text.length-1) + lastLetter);
});

const contentDiv2 = document.getElementById("content");
const grandParagrapheP = contentDiv.getElementsByClassName("grandParagraphe")[0];
console.log(grandParagrapheP);
