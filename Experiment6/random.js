let size=16;
function changeHead(){
    if(document.getElementById("name").value!="")
    document.getElementById("head").textContent=document.getElementById("name").value;
    document.getElementById("name").value="";
}
function randomBackgroundColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = randomColor;
}
document.getElementById("colorBtn").addEventListener("click", randomBackgroundColor);
function decreFont(){
    size-=2;
    document.getElementById("output").style.fontSize=size +"px";
}
function increFont(){
    size+=2;
    document.getElementById("output").style.fontSize=size +"px";
}
function change(){
    const text = document.getElementById("output");
    const btn = document.getElementById("show");
    if(text.style.display === "none"){
        text.style.display = "block";
        btn.textContent = "Hide Paragraph";
    }
    else{
        text.style.display = "none";
        btn.textContent = "Show Paragraph";
    }
}
function res(){
    size = 16;
    document.body.style.backgroundColor = "";
    document.getElementById("output").style.fontSize = "16px";
    document.getElementById("head").textContent = "Welcome to Javascript";
    document.getElementById("output").style.display="none";
}