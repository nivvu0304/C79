no_of_students=[];
function submit()
{
    var name_1=document.getElementById("n1").value;
    var name_2=document.getElementById("n2").value;
    var name_3=document.getElementById("n3").value;
    var name_4=document.getElementById("n4").value;
    var name_5=document.getElementById("n5").value;
    no_of_students.push(name_1);
    no_of_students.push(name_2);
    no_of_students.push(name_3);
    no_of_students.push(name_4);
    no_of_students.push(name_5);
    console.log(no_of_students);
    document.getElementById("display").innerHTML=no_of_students;
    document.getElementById("sb").style.display="none";
    document.getElementById("st").style.display="inline-block";
}
function sort()
{
    no_of_students.sort();
    console.log(no_of_students);
    document.getElementById("display").innerHTML=no_of_students;
}