var i = 0;
var text = 'I am always learning and growing, and I hope to continue to develop my skills for years to come.'

function typeWriter(){
    if(i<text.length){
        document.getElementById('typed-text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter,50);
    }
    } 

typeWriter();

var menu2 = document.querySelector('#menu2')
var xmarkbtn = document.querySelector('.btn-xmark')
var barbtn = document.querySelector('.btn-bars')

function clicked(){
    menu2.style.visibility = 'visible'
    barbtn.style.visibility = 'hidden'
}
function unclicked(){
    barbtn.style.visibility = "visible"
    menu2.style.visibility = 'hidden'
}