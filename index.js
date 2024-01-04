const inputbox= document.querySelector('.input-box');
const tasklist= document.querySelector('.task-list')

function addTask(){
    if(inputbox.value === ''){
        alert('Input box can not be empty');
    }
    else{
        let li=document.createElement('li');
        li.innerHTML= inputbox.value;
        tasklist.appendChild(li);

        let span= document.createElement('span');
        span.innerHTML= '\u00d7'
        li.appendChild(span)
    }
    inputbox.value='';

    data();
}

tasklist.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        data()
    }
    else if( e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        data()
    }
}, false);


function data(){
    localStorage.setItem('data', tasklist.innerHTML);
}

function show(){
    tasklist.innerHTML =localStorage.getItem('data');
}


show();





