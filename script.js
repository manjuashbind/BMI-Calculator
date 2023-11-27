function btnClicked(){
    const w=document.getElementById("weight").value;
    const h=document.getElementById("height").value;
    if(w=='' || h==''){
        alert("Enter All Fields")
    }
    else{
    const bmi=(w/(h/100)**2).toFixed(2);
    document.getElementById("result").innerHTML= bmi;
    
    const needle=document.getElementById("needle");
    const msg=document.getElementById("msg")
    const deg=-85;
    if(bmi<18.5){
        msg.style.color="blue"
        msg.innerHTML="Under Weight"
        needle.style.transform='rotate('+-65+'deg)';
    }
    else{
        if(bmi>=18.5 && bmi<=24.9){
            msg.style.color="green"
            msg.innerHTML="Normal"
            needle.style.transform='rotate('+-20+'deg)';
        }
        else if(bmi>=25 && bmi<=29.9){
            msg.style.color="orange"
            msg.innerHTML="Over Weight"
            needle.style.transform='rotate('+25+'deg)';
        }
        else{
            msg.style.color="red"
            msg.innerHTML="Obese"
            needle.style.transform='rotate('+65+'deg)';
        }
    }    
}
}