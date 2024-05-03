const angry=document.getElementById('button4');

angry.addEventListener("click",fang);

function fang(){
   const slika=document.getElementById('image');
    slika.src="./materials/angry.png.png";
    slika.alt='ne radi';
    document.body.style.backgroundColor='#fb923c';
    const buttons = document.querySelectorAll(".btn button");
    buttons.forEach(background3);
    document.getElementById("question").style.color="#b45309";
    document.getElementById("menu").style.backgroundColor="#b45309";
    const pitanje=document.getElementById("question");
    pitanje. innerHTML="Calm down!";
    pitanje.style.fontWeight=900;
    pitanje.style.fontSize="large";
    pitanje.style.margin="20px";
   

    for(let i=0;i<buttons.length;i++){
        if(i%2==0){
       buttons[i].addEventListener("mouseover",bx13);
        } 
        else{
            buttons[i].addEventListener("mouseover",bx33);
        }
    }

    for(let i=0;i<buttons.length;i++){
        
       buttons[i].addEventListener("mouseout",bx23); 
        
    }
   buttons.forEach(color3);

   const text=document.getElementById("hello");
   text. innerHTML="Angry 😡";
   let links=document.getElementById("content").getElementsByTagName("a");
   for(let i=0;i<links.length;i++){
    links[i].style.color="#b45309";
   }
}

function bx13(){
    this.style.boxShadow="7px 10px 5px white";
    
}
function bx33(){
    this.style.boxShadow="7px 10px 5px #b45309";
}
function bx23(){
    this.style.boxShadow="none";
}
function color3(button,index){
  if((index+1)%2===0){ 
    button.style.color="#b45309";
  }
}

function background3(button,index){
    if(index%2==0){
        button.style.backgroundColor="#b45309";
    }

}

