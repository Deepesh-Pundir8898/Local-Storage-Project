const textArea =document.querySelector("textarea");

textArea.addEventListener("input",function(){
    var text = textArea.value;
    
    storedData(text);
    getData();
    
});

function storedData(text){
    text = JSON.stringify(text);
    localStorage.setItem("text", text);
}
function getData(){
    var text = localStorage.getItem("text");
    textArea.value=JSON.parse(text);
}
getData();


const darkMode =document.querySelector(".dark-mode-btn")

darkMode.addEventListener("click",()=>{
    
    darkMode.classList.toggle('dark-btn')
    document.body.classList.toggle("dark-mode");
    document.querySelector(".main-container").classList.toggle("dark-main-container")
   
    
    if(darkMode.textContent == "Dark mode"){
        darkMode.textContent="Light mode"
    }else{
        darkMode.textContent="Dark mode"
    }
    
})