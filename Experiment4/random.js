let n;
let grade;
let result;
let total=0;
let average;
document.getElementById("myBut").onclick=function(){
    n=Number(document.getElementById("in").value);
    for(let i=1;i<=n;i++){
       total=total+parseFloat(prompt("Enter marks for Subject :"+i));
    }
    average=total/n;
    result=average>33?"PASS":"FAIL";
    if(average>50){
       grade="A";
    }
    else{
       grade="-A";
    }
    document.getElementById("text").innerHTML="Grade="+grade+"<br>"+"Result="+result;
}