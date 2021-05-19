// let val;
//
// val = document;
// val = document.all;
// val = document.all[2];
// val = document.header;
//
// val = document.body;
//
//
// console.log(val);
//Question 1. Was unable to get just the id with the nested classes. Not sure if what I did was correct.
const pageHeader1 = document.querySelectorAll("div[id]");
console.log(pageHeader1);
console.log(document.querySelector('#page-header'));

//Question 2
const h1 = document.getElementsByTagName('h1');
console.log(h1);
h1[0].textContent = 'New DOM Layout';
// pageHeader.innerText = 'New DOM Layout';
// pageHeader.textContent = 'New DOM Layout';
const pageHeader0 = document.querySelector('#page-header');
console.log(pageHeader0);
pageHeader0.classList.remove('bg-dark');
pageHeader0.classList.add('bg-success');
console.log(pageHeader0);
const div = document.querySelector('.bg-success');
div.style.backgroundColor = 'bg-success';


console.log(pageHeader0);
//Question 3
document.getElementById('para1').textContent = 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.';
document.getElementById('para2').textContent = 'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, stle, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.';

//Question 4
button = document.querySelector('#btn').addEventListener('click', buttonClick);

function buttonClick() {
    document.querySelector('#para4').textContent = 'The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.';
}


//Question 5

//red box
const firstBox = document.querySelector('#red');
console.log(firstBox);
firstBox.classList.remove('bg-white');
firstBox.classList.add('bg-danger');
console.log(firstBox);
// const redCard = document.querySelector('.bg-danger');
// redCard.style.backgroundColor = 'bg-danger';
// console.log(redCard);

//blue box
const secondBox = document.querySelector('#blue');
console.log(secondBox);
secondBox.classList.remove('bg-white');
secondBox.classList.add('bg-primary');
console.log('secondBox');


//yellow box
const thirdBox = document.querySelector('#yellow');
console.log(thirdBox);
thirdBox.classList.remove('bg-white');
thirdBox.classList.add('bg-warning');
console.log(thirdBox);

//green box
const fourthBox = document.querySelector('#green')
console.log(fourthBox);
fourthBox.classList.remove('bg-white');
fourthBox.classList.add('bg-success');
console.log(fourthBox)

//black box
const fifthBox = document.querySelector('#black');
console.log(fifthBox);
fifthBox.classList.remove('bg-white');
fifthBox.classList.add('bg-dark');
console.log(fifthBox);

//added white text to be extra.
const darkText = document.querySelector('.text-dark');
console.log(darkText);
darkText.classList.remove('text-dark');
darkText.classList.add('text-light');
console.log(darkText);