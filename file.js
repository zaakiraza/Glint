let a = document.getElementById('item');
let b=document.querySelector('.nav_items');
function fun() {
    a.style.display ='none' ;
    b.style.display='flex';
}
function fun1() {
    a.style.display = 'block';
    b.style.display='none';    
}


let i=25;
let j=1400;
let k=7;
let m=0;
let fst1 = document.getElementById('fst_timer');
let fst2 = document.getElementById('sec_timer');
let fst3 = document.getElementById('thd_timer');
let fst4 = document.getElementById('fth_timer');

setTimeout(() => {
    let timer1 = setInterval(function () {
        i+=1;
        if(i != 128){
            fst1.innerHTML=i
        }
        else{
            clearInterval(timer1);
        }
    }, 20);
}, 2000);

setTimeout(() => {
    let timer2=setInterval(function(){
        j+=1;
        if(j != 1506){;
            fst2.innerHTML=j;
        }
        else{
            clearInterval(timer2);
        }
    }, 20);
}, 2000);

setTimeout(() => {
    let timer3=setInterval(function(){
        k+=1;
        if(k != 110){
            fst3.innerHTML=k
        }
        else{
            clearInterval(timer3);
        }
    },20);    
}, 2000);

setTimeout(() => {
    let timer4=setInterval(function(){
        m+=1;
        if(m != 103){
            fst4.innerHTML=m;
        }
        else{
            clearInterval(timer4);
        }
    },20);    
}, 2000);

let sld1=document.getElementById('sld1');
let sld2=document.getElementById('sld2');
let sld3=document.getElementById('sld3');
setInterval(function(){
    let i=3000;
    setTimeout(() => {
        sld1.style.display="none"
        sld2.style.display="block"
        sld3.style.display="none"
    }, i);
    
    setTimeout(() => {
        sld1.style.display="none"
        sld2.style.display="none"
        sld3.style.display="block"
    }, i*2);
    setTimeout(() => {
        sld1.style.display="block"
        sld2.style.display="none"
        sld3.style.display="none"
    }, i*3);
},6000)