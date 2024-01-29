let input = document.querySelector('input');
let ul = document.createElement('ul');
let list = document.createElement('li');
let btn = document.createElement('button');

btn.addEventListener('click', function(e) { 
    list.innerText = input.value;

    let delbtn = document.createElement('button');
    delbtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    delbtn.classList.add("delete");


    list.appendChild(debtn);
    ul.appendChild(list);
    input.value = "";
});


let de


