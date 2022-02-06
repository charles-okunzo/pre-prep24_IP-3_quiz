function showMydiv()
{
    var showContent= document.getElementById("hiddendiv");
    showContent.style.display="block"
    var hideButton=document.getElementById("show");
    hideButton.style.display="none"
    var myTextScore=document.getElementById("textScore")
    myTextScore.style.display="none";
}
function myResult()
{
    var myScore=0;
    var correctAnswers1=document.form.quiz1.value;
    var correctAnswers2=document.form.quiz2.value;
    var correctAnswers3=document.form.quiz3.value;
    var correctAnswers4=document.form.quiz4.value;
    var correctAnswers5=document.form.quiz5.value;
    var correctAnswers6=document.form.quiz6.value;
    var correctAnswers7=document.form.quiz7.value;
    var correctAnswers8=document.form.quiz8.value;
    var correctAnswers9=document.form.quiz9.value;
    var correctAnswers10=document.form.quiz10.value;
    if (correctAnswers1=="body"){myScore++;}
    if (correctAnswers2=="script"){myScore++;}
    if (correctAnswers3=="src"){myScore++;}
    if (correctAnswers4=="false"){myScore++;}
    if (correctAnswers5=="href"){myScore++;}
    if (correctAnswers6=="myF"){myScore++;}
    if (correctAnswers7=="js"){myScore++;}
    if (correctAnswers8=="then"){myScore++;}
    if (correctAnswers9=="while10"){myScore++;}
    if (correctAnswers10=="while"){myScore++;}
    var showContent= document.getElementById("hiddendiv");
    var textScore=document.getElementById("textScore")
        textScore.style.display= "block";
        textScore.style.color="white";

     showContent.style.display="none";
     var textScore= document.getElementById("textScore");
    
     if (myScore>=8) {
         textScore.innerHTML="<u>TEST COMPLETED!</u> <br>Congratulations!<br> Your score is "+ Math.floor(myScore/10*100) + "%.<br> You passed!";
         textScore.style.background="green";
     } else if(myScore>=5){
        textScore.innerHTML="<u>TEST COMPLETED!</u> <br>Congratulations!<br> Your score is "+ Math.floor(myScore/10*100) + "%.<br> You scored above average. Work harder!";
        textScore.style.background="yellow";
        textScore.style.color="black";
    } else{
        
        textScore.innerHTML="<u>TEST COMPLETED!</u> <br>Your score is "+ Math.floor(myScore/10*100) + "%.<br> You scored below the average mark. Kindly reattempt the test! <br> <input type='button' value='REATTEMPT' id='submit' onclick='showMydiv()'>";
        textScore.style.background="red";
    }
}
