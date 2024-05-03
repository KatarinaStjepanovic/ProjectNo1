const happy=document.getElementById('button1');

happy.addEventListener("click",fhappy);

function fhappy(){
   const slika=document.getElementById('image');
    slika.src="./materials/happy.png";
    slika.alt='ne radi';
   const pitanje=document.getElementById("question");
    pitanje. innerHTML="I'm happy for you!";
    pitanje.style.fontWeight=900;
    pitanje.style.fontSize="large";
    pitanje.style.margin="20px";
    document.body.style.backgroundColor='#fcd34d';
    document.getElementById("button1").style.backgroundColor="#78350f";
    document.getElementById("button3").style.backgroundColor="#78350f";
    document.getElementById("button5").style.backgroundColor="#78350f";
    document.getElementById("question").style.color="#78350f";
    document.getElementById("menu").style.backgroundColor="#78350f";
    
    const buttons = document.querySelectorAll(".btn button");

    for(let i=0;i<buttons.length;i++){
        if(i%2==0){
       buttons[i].addEventListener("mouseover",bx1);
        } 
        else{
            buttons[i].addEventListener("mouseover",bx3);
        }
    }

    for(let i=0;i<buttons.length;i++){
        
       buttons[i].addEventListener("mouseout",bx2); 
        
    }
   buttons.forEach(color);

    const text=document.getElementById("hello");
   text. innerHTML="Happy 🌟";
   var links=document.getElementById("content").getElementsByTagName("a");
   for(let i=0;i<links.length;i++){
    links[i].style.color="#78350f";
   }
}

function bx1(){
    this.style.boxShadow="7px 10px 5px white";
    
}
function bx3(){
    this.style.boxShadow="7px 10px 5px #78350f";
}
function bx2(){
    this.style.boxShadow="none";
}
function color(button,index){
  if((index+1)%2===0){ 
    button.style.color="#78350f";
  }
}







  
  









  
  




