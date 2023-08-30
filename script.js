let nav_slider=document.getElementsByClassName("nav-slider")[0];
let nav_btn=document.getElementsByClassName("nbtn")[0];


//now we are writing the logic of btn action..


nav_btn.onclick=function(){
    if(nav_slider.style.right=="-100%"){
        nav_slider.style.right="0"
    }
    else{
        nav_slider.style.right="-100%"
    }
}
//now we are scroll on function...

  document.onscroll=function(){
    nav_slider.style.right="-100%"
    wraper.style.left="-100%"
}



let container=document.getElementsByClassName("left-container")[0];

 container.onclick=function(){
    nav_slider.style.right="-100%"
    wraper.style.left="-100%"
}
/* let dark=document.getElementById("dark");
dark.onclick=function(){
    if(document.body.style.background=="white"){
        document.body.style.background="rgba(45, 45, 45, 0.633"
    }
    else{
        document.body.style.background="white"
    }
    if(container.style.color=="black"){
        container.style.color="white"
    }
    else{
        container.style.color="black"
    }
}
 */


let wraper=document.getElementsByClassName("wraper")[0];
let wbtn=document.getElementsByClassName("wraper-btn")[0];

wbtn.onclick=function(){
    if(wraper.style.left=="-100%"){
        wraper.style.left="0"
        wbtn.style.move.left="223px"
    }
    else{
        wraper.style.left="-100%"
    }
}