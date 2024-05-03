const stressed=document.getElementById('button3');

stressed.addEventListener("click",fstr);

function fstr(){
   const slika=document.getElementById('image');
    slika.src="./materials/stressed.png.png";
    slika.alt='ne radi';
    document.body.style.backgroundColor='#fb7185';
    const buttons = document.querySelectorAll(".btn button");
    buttons.forEach(background2);
    document.getElementById("question").style.color="#881337";
    document.getElementById("menu").style.backgroundColor="#881337";
    const pitanje=document.getElementById("question");
    pitanje. innerHTML="You can do it! ";
    pitanje.style.fontWeight=900;
    pitanje.style.fontSize="large";
    pitanje.style.margin="20px";
   

    for(let i=0;i<buttons.length;i++){
        if(i%2==0){
       buttons[i].addEventListener("mouseover",bx12);
        } 
        else{
            buttons[i].addEventListener("mouseover",bx32);
        }
    }

    for(let i=0;i<buttons.length;i++){
        
       buttons[i].addEventListener("mouseout",bx22); 
        
    }
   buttons.forEach(color2);

    const text=document.getElementById("hello");
   text. innerHTML="Stressed 😖 ";
   var links=document.getElementById("content").getElementsByTagName("a");
   for(let i=0;i<links.length;i++){
    links[i].style.color="##881337";
   }
}

function bx12(){
    this.style.boxShadow="7px 10px 5px white";
    
}
function bx32(){
    this.style.boxShadow="7px 10px 5px #881337";
}
function bx22(){
    this.style.boxShadow="none";
}
function color2(button,index){
  if((index+1)%2===0){ 
    button.style.color="#881337";
  }
}

function background2(button,index){
    if(index%2==0){
        button.style.backgroundColor="#881337";
    }

}

