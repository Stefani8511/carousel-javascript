var i = 0;
var images = ['./images/img1.jpg', './images/img2.jpg', './images/img3.jpg', './images/img4.jpg', './images/img5.jpg'];
var time = 3000;


function changeImg(){

    document.slide.src = images[i];

    if (i< images.length -1){
        i++;
    }else{
        i=0
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg