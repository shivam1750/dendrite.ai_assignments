document.getElementById('btn').addEventListener('click',
function(){
    let input= document.getElementById('input').value;

    let elem=document.createElement('li');
    let btn1=document.createElement('button');
    let btn2=document.createElement('button');
    btn1.innerText="Done";
    btn2.innerText="Delete";
    elem.innerText=input;
    let ul=document.querySelector('ul');


    //appending the created element to html
    ul.appendChild(elem);
    elem.appendChild(btn1);
    elem.appendChild(btn2);
    //Adding styles to list
    btn1.style.border="none";
    btn1.style.marginLeft="3%";
    btn1.style.borderRadius="8px";
    btn1.style.backgroundColor="#b4b3d8"

    btn2.style.border="none";
    btn2.style.marginLeft="3%";
    btn2.style.borderRadius="8px";
    btn2.style.backgroundColor="#b4b3d8"

    //adding functinality to button
    btn1.addEventListener('click',
    function(){
        elem.style.textDecoration="line-through";
    });
    btn2.addEventListener('click',
    function(){
        elem.remove();
    });

    document.getElementById('input').value="";
});