let promise = document.getElementById("get");
promise.addEventListener("click",usePromise);
function usePromise(){
    console.log("use promise");
}
function usePromise(){
    fetch("person.json").then(function(response){
        return response.text();
        
    })
}

var products = [1000,2000,2500,800];
var sizes = [0,2500,5000];
var extras = [500, 1000, 1500];

var bags = 1000;
var plate = 2000;
var mug = 2500;
var soap = 800;

var small = 0;
var medium = 2500;
var large = 5000;

const small = document.getElementById("small");
const medium = document.getElementById("medium");
const large = document.getElementById("large");

const txtbags = document.getElementById("bags");
const txtplates = document.getElementById("plate");
const txtmugs = document.getElementById("mug");
const txtsoap = document.getElementById("soap");

const btnadd = document.getElementById("add");
btnadd.addEventListener(click, add);

const btnaddfav = document.getElementById("addfav");
btnaddfav.addEventListener(click, addfav);

const btnaddfav = document.getElementById("displayfav");
btndisplayfav.addEventListener(click, displayfav);

const txtOutput = document.getElementById("output");




let directory = [];

//ordering
var price = 0 ;
function add(){
if (document.getElementById("sizes").value = "small"){
    if (txtbags.checked == true){
        price = price+1000;
    }
    if (txtplates.checked == true){
        price = price+2500;
    }
    if(txtsoap.checked==true){
        price = price+800;
    }
    if (txtmugs.checked == true){
        price = price+2500;
    }
    txtOutput.innerText = `price`;
    
}
if (document.getElementById("sizes").value = "medium"){
    if (txtbags.checked == true){
        price = price+1000+2500;
    }
    if (txtplates.checked == true){
        price = price+2500+2500;
    }
    if(txtsoap.checked==true){
        price = price+800+2500;
    }
    if (txtmugs.checked == true){
        price = price+2500+2500;
    }
    txtOutput.innerText = `price`;
}
if (document.getElementById("sizes").value = "large"){
    if (txtbags.checked == true){
        price = price+1000+5000;
    }
    if (txtplates.checked == true){
        price = price+2500+5000;
    }
    if(txtsoap.checked==true){
        price = price+800+5000;
    }
    if (txtmugs.checked == true){
        price = price+2500+5000;
    }
    txtOutput.innerText = `price`;
}
}
//add to favorites
function addfav(){
    const entry = {
        "bags" :txtbags.value,
        "mug":txtmugs.value,
        "plate":txtplates.value,
        "soap":txtsoap.value

    };
    directory.push(entry);
    local.Storage.setItem('directory',JSON,stringify(directory));
    showEntries();

}
function showEntries(){
    txtOutput.value = "";
    for(let i=0; i<directory.length; 1++){
        txtOutput.value += directory[i].sizes + "/t" + directory[i].products + "/n";
    }
}