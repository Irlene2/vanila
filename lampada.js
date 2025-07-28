const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );


function islampBroken() {
    return lamp.src.indexof('l2') > -1
}
function lampOn() {
    
    lamp.src = './img/l1.jpg';
}

function lampOff () {
    lamp.src = './img/l3.jpg';
}

function lampBroken () {
    lamp.src = './img/l2.jpg';
}



turnOn.addEventListener ( 'click', lampOn);
turnOff.addEventListener ( 'click', lampOff);
lamp.addEventListener ( 'mouseover', lampOn);
lamp.addEventListener ( 'mouseleave', lampOff);
lamp.addEventListener ( 'dbclick', lampBroken);

