var trainee = setInterval(projectDone, 10);
var courses = setInterval(coursesDone, 10);
var trainers = setInterval(trainersDone, 500);
var awards = setInterval(awardsDone, 100);
var count1 = 1;
var count2 = 1;
var count3 = 1;
var count4 = 1;
var slideIndex = 0;
showSlides(); // call the slideShow method




function projectDone(){
    count1++;
    document.querySelector("#trainee").innerHTML =  count1;
    //stop at a given interval
    if(count1 == 684){
       clearInterval(trainee); 
    }
}
function coursesDone(){
    count2++;
    document.querySelector("#courses").innerHTML = count2;
    if(count2 == 522){
        clearInterval(courses);
    }
}
function trainersDone(){
    count3++;
    document.querySelector("#trainers").innerHTML = count3;
    if(count3 == 13){
        clearInterval(trainers);
    }
}
function awardsDone(){
    count4++;
    document.querySelector("#awards").innerHTML = count4;
    if(count4 == 45){
        clearInterval(awards);
    }
}

//slideshow
function currentSlide(n){
    slides[n].style.display = "block";
    dots[n].className += " active";
}

 function showSlides(){
     var i;
     //get the slides
     var slides = document.getElementsByClassName('slide-1');
     //get the dots array
     var dots = document.getElementsByClassName('dot');

     for(i=0;i<slides.length;i++){
         //set the display property to none to hide all the slides
         slides[i].style.display = "none";
     }

     //increase slideIndex by 1
     slideIndex++;

     //check for boundary
     if(slideIndex > slides.length){
         slideIndex = 1;
     }
    
     //remove the active class from all the dots
     for(i=0;i<dots.length;i++){
         dots[i].className = dots[i].className.replace(" active", "");
     }

     slides[slideIndex - 1].style.display = "block";
     dots[slideIndex-1].className += " active";

     setTimeout(showSlides, 2000);
     
 }

 //toggle menu
 var hamburger = document.getElementById('hamburger').addEventListener('click', dropdownMenu);
 var cross = document.getElementById('cross').addEventListener('click', closeMenu);

 function dropdownMenu(){
    var dropmenu = document.querySelector('.responsive');
    dropmenu.style.display = "block";
 }
 function closeMenu(){
     var hidemenu = document.querySelector('.responsive');
     hidemenu.style.display = "none";
 }