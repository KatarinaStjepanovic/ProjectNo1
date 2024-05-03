const sad=document.getElementById('button2');

sad.addEventListener("click",fsad);

function fsad(){
   const slika=document.getElementById('image');
    slika.src="./materials/sad.png.png";
    slika.alt='ne radi';
    document.body.style.backgroundColor='#38bdf8';
    const buttons = document.querySelectorAll(".btn button");
    buttons.forEach(background1);
    document.getElementById("question").style.color="#1d4ed8";
    document.getElementById("menu").style.backgroundColor="#1d4ed8";
    const pitanje=document.getElementById("question");
    pitanje. innerHTML="I'm sorry!";
    pitanje.style.fontWeight=900;
    pitanje.style.fontSize="large";
    pitanje.style.margin="20px";
   

    for(let i=0;i<buttons.length;i++){
        if(i%2==0){
       buttons[i].addEventListener("mouseover",bx11);
        } 
        else{
            buttons[i].addEventListener("mouseover",bx31);
        }
    }

    for(let i=0;i<buttons.length;i++){
        
       buttons[i].addEventListener("mouseout",bx21); 
        
    }
   buttons.forEach(color1);

    const text=document.getElementById("hello");
   text. innerHTML="Sad 😔";
   var links=document.getElementById("content").getElementsByTagName("a");
   for(let i=0;i<links.length;i++){
    links[i].style.color="#1d4ed8";
   }
}

function bx11(){
    this.style.boxShadow="7px 10px 5px white";
    
}
function bx31(){
    this.style.boxShadow="7px 10px 5px #1d4ed8";
}
function bx21(){
    this.style.boxShadow="none";
}
function color1(button,index){
  if((index+1)%2===0){ 
    button.style.color="#1d4ed8";
  }
}

function background1(button,index){
    if(index%2==0){
        button.style.backgroundColor="#1d4ed8";
    }

}

