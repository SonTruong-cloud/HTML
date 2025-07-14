function Doimau(){ 
    var divs=document.getElementsByTagName("div"); 
    var i=0; 
    while(i<divs.length){ 
        if((i+1)%2==1){ 
    divs[i].style.background  #FFFFCC; 
    } 
    else{ 
    divs[i].style.background #00CC99; 
    } 
    i++; 
    } 
 }