const slider1 = document.getElementById('inp1');
slider1.addEventListener('mousemove', () => {
    let val = slider1.value;
    slider1.style.background = `linear-gradient(90deg, green ${val}%, white ${val}%)`;
})

for(let i = 1; i <= 20; i++){
    let miniBl = document.createElement('div');
    miniBl.id = i;
    miniBl.style.height = '12px';
    miniBl.style.width = '2px';
    
    if(i <= 10)
        miniBl.style.backgroundColor = 'aqua';
    else    
        miniBl.style.backgroundColor = 'gray';
    document.getElementById('miniBl_Bl').appendChild(miniBl);
}
let dv1 = document.getElementById('1');
let dv2 = document.getElementById('2');
let dv3 = document.getElementById('3');
let dv4 = document.getElementById('4');
let dv5 = document.getElementById('5');
let dv6 = document.getElementById('6');
let dv7 = document.getElementById('7');
let dv8 = document.getElementById('8');
let dv9 = document.getElementById('9');
let dv10 = document.getElementById('10');
let dv11 = document.getElementById('11');
let dv12 = document.getElementById('12');
let dv13 = document.getElementById('13');
let dv14 = document.getElementById('14');
let dv15 = document.getElementById('15');
let dv16 = document.getElementById('16');
let dv17 = document.getElementById('17');
let dv18 = document.getElementById('18');
let dv19 = document.getElementById('19');
let dv20 = document.getElementById('20');

const slider2 = document.getElementById('inp2');
slider2.addEventListener('mousemove', () => {
    let val2 = slider2.value;
    slider2.style.background = `linear-gradient(90deg, rgb(80, 149, 240) ${val2}%, white ${val2}%)`
    if(val2 > 0)
        dv1.style.backgroundColor = 'aqua';
    else
        dv1.style.backgroundColor = 'gray';

    if(val2 >= 5)
        dv2.style.backgroundColor = 'aqua';
    else
        dv2.style.backgroundColor = 'gray';

    if(val2 >= 10)
        dv3.style.backgroundColor = 'aqua';
    else
        dv3.style.backgroundColor = 'gray';

    if(val2 >= 15)
        dv4.style.backgroundColor = 'aqua';
    else
        dv4.style.backgroundColor = 'gray';

    if(val2 >= 20)
        dv5.style.backgroundColor = 'aqua';
    else
        dv5.style.backgroundColor = 'gray';

    if(val2 >= 25)
        dv6.style.backgroundColor = 'aqua';
    else
        dv6.style.backgroundColor = 'gray';

    if(val2 >= 31)
        dv7.style.backgroundColor = 'aqua';
    else
        dv7.style.backgroundColor = 'gray';

    if(val2 >= 36)
        dv8.style.backgroundColor = 'aqua';
    else
        dv8.style.backgroundColor = 'gray';

    if(val2 >= 41)
        dv9.style.backgroundColor = 'aqua';
    else
        dv9.style.backgroundColor = 'gray';

    if(val2 >= 46)
        dv10.style.backgroundColor = 'aqua';
    else
        dv10.style.backgroundColor = 'gray';

    if(val2 >= 52)
        dv11.style.backgroundColor = 'aqua';
    else
        dv11.style.backgroundColor = 'gray';

    if(val2 >= 57)
        dv12.style.backgroundColor = 'aqua';
    else
        dv12.style.backgroundColor = 'gray';

    if(val2 >= 63)
        dv13.style.backgroundColor = 'aqua';
    else
        dv13.style.backgroundColor = 'gray';

    if(val2 >= 68)
        dv14.style.backgroundColor = 'aqua';
    else
        dv14.style.backgroundColor = 'gray';

    if(val2 >= 73)
        dv15.style.backgroundColor = 'aqua';
    else
        dv15.style.backgroundColor = 'gray';

    if(val2 >= 79)
        dv16.style.backgroundColor = 'aqua';
    else
        dv16.style.backgroundColor = 'gray';

    if(val2 >= 84)
        dv17.style.backgroundColor = 'aqua';
    else
        dv17.style.backgroundColor = 'gray';

    if(val2 >= 88)
        dv18.style.backgroundColor = 'aqua';
    else
        dv18.style.backgroundColor = 'gray';

    if(val2 > 94)
        dv19.style.backgroundColor = 'aqua';
    else
        dv19.style.backgroundColor = 'gray';

    if(val2 == 100)
        dv20.style.backgroundColor = 'aqua';
    else
        dv20.style.backgroundColor = 'gray';
})

const slider3 = document.getElementById('inp3');
slider3.addEventListener('mousemove', () => {
    let val3 = slider3.value;
    slider3.style.background = `linear-gradient(90deg, rgb(199, 6, 6) ${val3}%, white ${val3}%)`;
})

for(let i = 0; i < 8; i++){
    let div = document.createElement('div');
    div.id = `miniBl${i}`;
    div.style.height = '22px';
    div.style.width = '7px';
    div.style.borderRadius = '2px';
    div.style.boxShadow = '0px 3px 6px rgba(0, 0, 0, 0.3)';
    if(i < 4)
        div.style.backgroundColor = 'blue';
    else
        div.style.backgroundColor = 'white';
    document.getElementById('contein').appendChild(div);
}

let div0 = document.getElementById('miniBl0');
let div1 = document.getElementById('miniBl1');
let div2 = document.getElementById('miniBl2');
let div3 = document.getElementById('miniBl3');
let div4 = document.getElementById('miniBl4');
let div5 = document.getElementById('miniBl5');
let div6 = document.getElementById('miniBl6');
let div7 = document.getElementById('miniBl7');

const slider4 = document.getElementById('inp4');
slider4.addEventListener('mousemove', () => {
    let val4 = slider4.value;
    slider4.style.background = `linear-gradient(90deg, blue ${val4}%, white ${val4}%)`;
    
    if(val4 >= 1)
        div0.style.backgroundColor = 'blue';
    else
        div0.style.backgroundColor = 'white';

    if(val4 >= 15)
        div1.style.backgroundColor = 'blue';
    else
        div1.style.backgroundColor = 'white';

    if(val4 >= 29)
        div2.style.backgroundColor = 'blue';
    else
        div2.style.backgroundColor = 'white';

    if(val4 >= 43)
        div3.style.backgroundColor = 'blue';
    else
        div3.style.backgroundColor = 'white';

    if(val4 >= 57)
        div4.style.backgroundColor = 'blue';
    else
        div4.style.backgroundColor = 'white';

    if(val4 >= 71)
        div5.style.backgroundColor = 'blue';
    else
        div5.style.backgroundColor = 'white';
    
    if(val4 >= 85)
        div6.style.backgroundColor = 'blue';
    else
        div6.style.backgroundColor = 'white';
    
    if(val4 >= 98)
        div7.style.backgroundColor = 'blue';
    else
        div7.style.backgroundColor = 'white';
});
