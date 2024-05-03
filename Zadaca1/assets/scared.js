const scared=document.getElementById("button5");

scared.addEventListener("click",fscared);


function fscared(){
    const slika=document.getElementById("image");
    slika.src="./materials/scared.png";
    slika.alt="ne radi";
   const buttons=document.querySelectorAll(".btn button");
   buttons.forEach(color4);
   buttons.forEach(background4);
   for(let i=0;i<buttons.length;i++){
    if(i%2==0){
   buttons[i].addEventListener("mouseover",bx4);
    } 
    else{
        buttons[i].addEventListener("mouseover",bx41);
    }
}

for(let i=0;i<buttons.length;i++){
    
   buttons[i].addEventListener("mouseout",bx42); 
    
  }
  document.body.style.backgroundColor="#6b7280";
  const pitanje=document.getElementById("question");
  pitanje.textContent="Boo!👻";
  pitanje.style.color="#111827";
  pitanje.style.margin="20px";
  pitanje.style.fontSize="large";
  document.getElementById("menu").style.backgroundColor="#111827";
document.getElementById("hello").innerHTML="Scared 😱";
var links=document.getElementById("content").getElementsByTagName("a");
for(let i=0;i<links.length;i++){
 links[i].style.color="##881337";
}
   
}
function bx4(){
    this.style.boxShadow="7px 10px 5px white";
    
}
function bx41(){
    this.style.boxShadow="7px 10px 5px #111827";
}
function bx42(){
    this.style.boxShadow="none";
}

function color4(button,index){
    if((index+1)%2===0){ 
      button.style.color="#111827";
    }
  }




function background4(button,index){
    if(index%2==0){
        button.style.backgroundColor="#111827";
    }

}

