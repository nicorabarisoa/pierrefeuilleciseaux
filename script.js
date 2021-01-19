/* reviser js */ 

let joueurs = 0;
let ordis = 0;
let joueurp="";
let ordip=["pierre","papier","ciseaux"];
let j =document.getElementById("js");
let o =document.getElementById("os");
let s =document.getElementById("status");


function play( e){
  let a = ordip[rand=Math.floor(Math.random() * 3)];
  if (e === a){
    console.log("draw");
    s.innerText=a +" vs "+e +" c'est draw";
  }
  else if (e==="pierre" && a==="papier"){
    console.log("ordi win");
    s.innerText="L'ordi a joué "+ a + " c'est lose pour toi";
ordis++;
  
  }
   else if (e==="pierre" && a==="ciseaux"){
    console.log("joueur win");
     s.innerText="L'ordi a joué "+ a + " c'est juste win enfait";
  joueurs++; 
  }
   else if (e==="papier" && a==="ciseaux"){
    console.log("joueur win");
     s.innerText="L'ordi a joué "+ a + " c'est juste win enfait";
  joueurs++; 
  }
   else if (e==="papier" && a==="pierre"){
    console.log("ordi win");
     s.innerText="L'ordi a joué "+ a + " c'est lose pour toi";
ordis++;
  }
   else if (e==="ciseaux" && a==="papier"){
    console.log("joueur win");
     s.innerText="L'ordi a joué "+ a + " c'est juste win enfait";
  joueurs++; 
  }
   else if (e==="ciseaux" && a==="pierre"){
    console.log("ordi win");
     s.innerText="L'ordi a joué "+ a + " c'est lose pour toi";
ordis++;
  }
maj ();
  
};

function maj (){
  o.innerText = "Ordinateur: "+ ordis;
  j.innerText = "Joueur: "+ joueurs;
  if (joueurs >= 5){
    s.innerText="GG la suprématie de l'homme a win";
  }
  else if(ordis>=5){
    s.innerText="Boted";
    
  }
 
}