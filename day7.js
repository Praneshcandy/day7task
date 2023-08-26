//Q1
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
   var res = result.filter((ele)=>ele.region==="Asia")
   console.log(res);


}


//Q2.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    var res = result.filter((ele)=>ele.population<200000)
    console.log(res)
   
   
}

//Q3
var res = result.forEach(name =>console.log(name));
var res = result.forEach(captial=>console.log(captial));
var res = result.forEach(flag=>console.log(flag));

//Q4
var res = result.reduce((a,b)=>a+b.population,0)
console.log(res);

//Q5
var res = result.filter((ele)=>ele.dollars==="currency")
console.log(res)