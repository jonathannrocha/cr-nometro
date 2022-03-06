

let mili = 00;
let sec = 00;
let min = 00;
let hr = 00;
let i = 1;


function rodar() {
   
    if(i  < 2 ) {
        milorodar = setInterval(milise, 1);
        secrodar = setInterval(seg, 1000);
        mirodar = setInterval(mi, 60000);
        hrrodar = setInterval(h, 3600000);
        i++
    }    
}


function parar() {

    clearInterval(milorodar);
    clearInterval(secrodar);
    clearInterval(mirodar);
    clearInterval(hrrodar);
    i= 1;
}

function zerar() {

    parar() 
    
    document.querySelector('.tem .mili ').innerHTML = '00'
    document.querySelector('.tem .sec ').innerHTML = '00,'
    document.querySelector('.tem .min ').innerHTML ='00:'
    document.querySelector('.tem .min ').innerHTML = '00:'

    i= 1;
    mili = 00;
    sec = 00;
    min = 00;
    hr = 00;
}


function milise() {
    
    let vismil = document.querySelector('.tem .mili ');

    mili++
    vismil.innerHTML = mili;

    if (mili > 100) {
        
        vismil.innerHTML = '00';
        mili = 0;

    } else {
        
        if(mili < 10) {

            vismil.innerHTML = '0' + mili;

        } else {

            vismil.innerHTML = mili;
        }
        
    }
}

function seg() {

    let vismil = document.querySelector('.tem .sec ');

    sec++
    vismil.innerHTML = sec;

    if (sec == 60) {
        sec = vismil.innerHTML ='00,';
        sec = 00;
    } else {
        

        if(sec < 10) {

            vismil.innerHTML = '0' + sec + ',';

        } else {

            vismil.innerHTML = sec+ ',';
        }
    }
}

function mi() {
    
    let vismil = document.querySelector('.tem .min ');


    min++
    vismil.innerHTML = min;

    if (min == 60) {
        min = vismil.innerHTML ='00,';
        min = 00;
    } else {
        
        if(sec < 10) {

            vismil.innerHTML = '0' + min + ':';

        } else {

            vismil.innerHTML = min+ ',';
        }
    }
    
}

function h() {

    hr++
    let vismil = document.querySelector('.tem .min ');

    if(hr < 10) {

        vismil.innerHTML = '0' + hr + ':';

    } else {

        vismil.innerHTML = hr + ':';
    }
}

