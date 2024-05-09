document.getElementById("submit").onclick=function(){
    let a = document.getElementById("travel").value;
    if (a<=5) {
        document.getElementById("result").innerHTML="Your bill is <br>Rs: 15"
        document.getElementById("result").style.color="red"
        
    }
    if (a>5 && a<=10) {
        document.getElementById("result").innerHTML="Rs: 20"
        document.getElementById("result").style.color="red"
    }
    if (a>10 && a<=15) {
        document.getElementById("result").innerHTML="Your bill is <br>Rs: 25"
        document.getElementById("result").style.color="red"
    }
    if (a>15 && a<=20) {
        document.getElementById("result").innerHTML="Your bill is <br>Rs: 30"
        document.getElementById("result").style.color="red"
    }
    if (a>20 && a<=25) {
        document.getElementById("result").innerHTML="Your bill is <br>Rs: 35"
        document.getElementById("result").style.color="red"
    }
    if (a>25 && a<=30) {
        document.getElementById("result").innerHTML="Your bill is <br>Rs: 40"
        document.getElementById("result").style.color="red"
    }
    if (a>30 && a<=35) {
        document.getElementById("result").innerHTML="Your bill is <br>Rs: 45"
        document.getElementById("result").style.color="red"
    }
    if (a>35 && a<=40) {
        document.getElementById("result").innerHTML="Your bill is <br>Rs: 50"
        document.getElementById("result").style.color="red"
    }
    if (a>40) {
        document.getElementById("result").innerHTML="Your bill is <br>Rs: 55"
        document.getElementById("result").style.color="red"
    }
}