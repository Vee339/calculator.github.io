//declaring variables

var input = document.querySelector("input");
var number = document.getElementsByClassName("number");
var equalto = document.querySelector(".equalto");
var clear = document.querySelector(".clear");
var cut = document.querySelector(".cut");
var square = document.querySelector(".square");
var sqrt = document.querySelector(".sqrt");
var recip = document.querySelector(".recip");


//applying event

for(a = 0; a<number.length; a++){
    number[a].addEventListener("click",function(){
        input.value += this.innerHTML;
    });
};


equalto.addEventListener("click",function(){
    input.value = eval(input.value);

    

});

clear.addEventListener("click",function(){
    input.value = "";
});

cut.addEventListener("click",function(){
    var newInput = input.value.substring(0,input.value.length - 1);
    input.value = newInput;
});

square.addEventListener("click",function(){
    var sq = Math.pow(input.value,2);
    input.value = sq;
});

sqrt.addEventListener("click",function(){
    var sqr = Math.sqrt(input.value);
    input.value = sqr;
});

recip.addEventListener("click",function(){
    var r = 1/input.value;
    input.value = r;
})

