

let content = document.querySelector(".content");
var closes = document.querySelector(".close");
var verMases = document.querySelectorAll(".verMasLink");

var where = "book";
if(closes == null){
    where = "index";
}

if(where=="book"){
    closes.addEventListener('click',function(ev){
        console.log=ev;
        ev.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("fadeInUp");
        content.classList.add("animated");
        content.classList.add("fadeOutDown");
        setTimeout(() => {
            location.href=closes.href;
        }, 500);
    });
}else{
    verMases.forEach(function(element){
        element.addEventListener('click',function(ev){
            ev.preventDefault();
            content.classList.remove("animated");
            content.classList.remove("fadeInDown");
            content.classList.add("animated");
            content.classList.add("fadeOutUp");
            setTimeout(() => {
                location.href=element.href;
            }, 500);
    })
})};



let calFlask = document.querySelectorAll(".fa-flask")
calFlask.forEach(function(element){
    element.addEventListener('click',function(){
        element.classList.remove("baseFlask");
        element.classList.add("clickedFlask");
    })
});



