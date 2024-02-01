let img = document.getElementById("slideshow");


let images = ['assets/2.jpg','assets/1.jpg','assets/2.jpg','assets/2.jpg',];
let i = 0;


function slideshow(){
    img.setAttribute('src', images[i]);
    
    if (i == images.length -1 ){
        i= 0;
    }else{
        i++;
    }
    
    setTimeout(() => {
        slideshow();
    }, 2000);
}

slideshow()
