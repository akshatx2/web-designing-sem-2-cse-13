let employees=[];
function addemp(){
    let name1=document.getElementById("name").value;
    let salary1=document.getElementById("salary").value;
    let empid1=document.getElementById("empid").value;
    let dept1=document.getElementById("dept").value;
    if(name1==""||dept1==""||isNaN(salary1)||dept1==""){
        window.alert("Enter valid details");
        return;
    }
    else{
        let person={
        name:name1,
        salary:Number(salary1),
        empid:empid1,
        dept:dept1
    }
    window.alert("Details added successfully")
    employees.push(person);
    document.getElementById("name").value="";
    document.getElementById("salary").value="";
    document.getElementById("empid").value="";
    document.getElementById("dept").value="";
      
    }
}
function display(){
    let details="";
    for(emp of employees){
        details+="<h3>"+"Name="+emp.name+"||"+"Salary="+emp.salary+"||"+"ID="+emp.empid+"||"+"Department="+emp.dept+"</h3><br>";
    }
    document.getElementById("output").innerHTML=details;
}
function sal50(){
    let highSalary = employees.filter(emp => emp.salary > 50000);
    let details="";
    for(emp of highSalary){
        
            details+="<h3>"+"Name="+emp.name+"||"+"ID="+emp.empid+"||"+"Department="+emp.dept+"</h3><br>";
        
    }
    document.getElementById("output").innerHTML=details;
}
function saltot(){
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    document.getElementById("output").innerHTML="<h2>Total Salary="+total+"</h3>";
} 
function salavg(){
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    document.getElementById("output").innerHTML="<h2>Average Salary="+total/employees.length+"</h3>";

}
function count(){
    document.getElementById("output").innerHTML="<h2>Count="+employees.length+"</h3>";

}
function searchEmp(){
    let id = document.getElementById("empid").value;

    let emp = employees.find(e => e.empid == id);

    if(emp){
        document.getElementById("output").innerHTML =
        "<h3>Name="+emp.name+
        " || Salary="+emp.salary+
        " || ID="+emp.empid+
        " || Department="+emp.dept+"</h3>";
    }
    else{
        document.getElementById("output").innerHTML =
        "<h3>Employee not found</h3>";
    }
}
