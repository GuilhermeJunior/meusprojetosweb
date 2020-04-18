//Variables

const tbody = document.querySelector('.tbody');
const btn = document.querySelector('#button');

var nome = document.querySelector('#nome');
var lastName = document.querySelector('#lastName');
var language = document.querySelector('#language');
var country = document.querySelector('#country');


//events

btn.addEventListener('click', createRow);


//functions

function createRow(){

   
   //create new elements
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');  



   var td1x = document.createTextNode(nome.value);
   var td2x = document.createTextNode(lastName.value);
   var td3x = document.createTextNode(language.value);
   var td4x = document.createTextNode(country.value);

   td1.appendChild(td1x);
   td2.appendChild(td2x);
   td3.appendChild(td3x);
   td4.appendChild(td4x);

   tr.appendChild(td1);
   tr.appendChild(td2);
   tr.appendChild(td3);
   tr.appendChild(td4);

   tbody.appendChild(tr);

    
    


}