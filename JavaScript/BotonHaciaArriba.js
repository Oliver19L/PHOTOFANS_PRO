const btnScrollArriba =  document.querySelector("#btnScrollArriba");

window.addEventListener("scroll", () => {
    if(window.pageYOffset>570){
        btnScrollArriba.classList.add("active");
    }else{
        btnScrollArriba.classList.remove("active");
    }
})


btnScrollArriba.addEventListener("click",function(){
    
    
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"

    });
    });