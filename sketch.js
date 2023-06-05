//motor da fisica
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var bola;
var chao;
//tenta criar uma pedra :D

function setup() {

  createCanvas(windowWidth,windowHeight);
  
  engine = Engine.create();
  world = engine.world;


  //caracteristicas
  var bola_options =
  {
    //elasticidade: o quão pulante ela é
    restitution: 0.6,
    //atrito com o ar: pesada ou leve?
    frictionAir: 0.01
  }
/*
Para criar um corpo:
nome do corpo = Bodies.formato do seu corpo(x,y,largura,altura, caracteristicas)
*/ 
  
 //quando criar um circulo, ele só vai pedir o valor do raio (tamanho) uma vez, que é o 100 que coloquei
  bola = Bodies.circle(width*0.5, height*0.2, 100,bola_options);
  World.add(world, bola);


  var chao_options =
  {
    isStatic: true
  }

  chao = Bodies.rectangle(width*0.5,height*0.97,width,20, chao_options);
  World.add(world, chao);
     

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background(100,100,100);

 push();
 fill("green");
 rect(chao.position.x, chao.position.y,width,20);
 pop();
 
 //x,y,"larguar e altura" (raio 2 vezes)
 ellipse(bola.position.x,bola.position.y,100,100);
 


 Engine.update(engine);
  
}

