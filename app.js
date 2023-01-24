function image() {
    // document.body.classList.toggle('light_off');
    if (document.body.classList.contains('light_off')) {
        document.querySelector('img').setAttribute('src','../img/light.jpg');
        document.querySelector('button').innerHTML = "Off";
    } else {
        document.querySelector('img').setAttribute('src','../img/light.jpg');
        document.querySelector('button').innerHTML = "On";
    }
}



















