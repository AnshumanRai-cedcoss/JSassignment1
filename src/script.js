
 function arandper(){
    var x=document.getElementById('l').value;
    var y=document.getElementById('b').value;
      ar = x*y;
      per = 2*(x + y);
       document.getElementById("area").innerHTML= "Area is "+ar+" sq. mtr.";
       document.getElementById("perimeter").innerHTML= "Perimeter is "+per+" sq. mtr.";
 }