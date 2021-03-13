var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f0da59f2-118e-407c-9749-75caa2ded391","18e1d94b-00f1-43c6-8ed2-cd3078789c31","adcdabce-d55a-4210-81fe-5b3268b618e0","c924ca15-b1c3-4f42-86a2-f1e862fe8c52","98bbbe5d-49d6-44ec-b265-45ab97c8377a","5d08ebb3-22be-497a-99ba-625114fbd33d","30f1f8a8-1bce-4c7c-babc-1b6b3d41a356","3667638d-3355-492f-b96b-e361772441ed","f912211c-29f8-406d-9530-aae2027195cc","e7bfc9c3-8424-4b08-8c4d-aa79a81ecc3b","e32f3334-ac50-464d-a350-e9967c41104c","def3fc04-fe93-4784-a615-aa00d00f1476"],"propsByKey":{"f0da59f2-118e-407c-9749-75caa2ded391":{"name":"apple","sourceUrl":"assets/api/v1/animation-library/gamelab/R5HU7H.MzPJgfu.WtncglTeef4BzKuzc/category_food/apple_1.png","frameSize":{"x":333,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"R5HU7H.MzPJgfu.WtncglTeef4BzKuzc","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":333,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/R5HU7H.MzPJgfu.WtncglTeef4BzKuzc/category_food/apple_1.png"},"18e1d94b-00f1-43c6-8ed2-cd3078789c31":{"name":"lemon","sourceUrl":"assets/api/v1/animation-library/gamelab/PRVSGS.kZkqRUUdxF_6BmANL5HEl09Qh/category_food/lemon_1.png","frameSize":{"x":399,"y":387},"frameCount":1,"looping":true,"frameDelay":2,"version":"PRVSGS.kZkqRUUdxF_6BmANL5HEl09Qh","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":399,"y":387},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PRVSGS.kZkqRUUdxF_6BmANL5HEl09Qh/category_food/lemon_1.png"},"adcdabce-d55a-4210-81fe-5b3268b618e0":{"name":"orange","sourceUrl":"assets/api/v1/animation-library/gamelab/BAGCo_oPYQWizIBXyXAbxWFRwTlAah81/category_food/orange_1.png","frameSize":{"x":400,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"BAGCo_oPYQWizIBXyXAbxWFRwTlAah81","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BAGCo_oPYQWizIBXyXAbxWFRwTlAah81/category_food/orange_1.png"},"c924ca15-b1c3-4f42-86a2-f1e862fe8c52":{"name":"pineapple","sourceUrl":"assets/api/v1/animation-library/gamelab/D2kj5Ii7Po9JlhTzBb4snzQt72c_giFr/category_food/pineapple.png","frameSize":{"x":309,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"D2kj5Ii7Po9JlhTzBb4snzQt72c_giFr","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":309,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/D2kj5Ii7Po9JlhTzBb4snzQt72c_giFr/category_food/pineapple.png"},"98bbbe5d-49d6-44ec-b265-45ab97c8377a":{"name":"strawberry","sourceUrl":"assets/api/v1/animation-library/gamelab/OWEzOjQSJur1ARaC3r8BLdqVP.yAkpmT/category_food/strawberry.png","frameSize":{"x":333,"y":395},"frameCount":1,"looping":true,"frameDelay":2,"version":"OWEzOjQSJur1ARaC3r8BLdqVP.yAkpmT","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":333,"y":395},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OWEzOjQSJur1ARaC3r8BLdqVP.yAkpmT/category_food/strawberry.png"},"5d08ebb3-22be-497a-99ba-625114fbd33d":{"name":"grapes","sourceUrl":"assets/api/v1/animation-library/gamelab/0ueAniL.9kcku0.my8bzMRDc52cBuY8D/category_food/grapes_1.png","frameSize":{"x":388,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"0ueAniL.9kcku0.my8bzMRDc52cBuY8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0ueAniL.9kcku0.my8bzMRDc52cBuY8D/category_food/grapes_1.png"},"30f1f8a8-1bce-4c7c-babc-1b6b3d41a356":{"name":"bg","sourceUrl":"assets/v3/animations/jDzlM6dciFW2A6YrjUorG9BvdsDLczBUZ1Bn7mTau88/30f1f8a8-1bce-4c7c-babc-1b6b3d41a356.png","frameSize":{"x":1200,"y":750},"frameCount":1,"looping":true,"frameDelay":4,"version":"K5y.mPzWelLWh_3cEGrrkBym6rCVyw.C","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":750},"rootRelativePath":"assets/v3/animations/jDzlM6dciFW2A6YrjUorG9BvdsDLczBUZ1Bn7mTau88/30f1f8a8-1bce-4c7c-babc-1b6b3d41a356.png"},"3667638d-3355-492f-b96b-e361772441ed":{"name":"bow","sourceUrl":"assets/v3/animations/jDzlM6dciFW2A6YrjUorG9BvdsDLczBUZ1Bn7mTau88/3667638d-3355-492f-b96b-e361772441ed.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"yGk_vADaSbf.Fb.mVDrGIVNCkjcjGUqP","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/v3/animations/jDzlM6dciFW2A6YrjUorG9BvdsDLczBUZ1Bn7mTau88/3667638d-3355-492f-b96b-e361772441ed.png"},"f912211c-29f8-406d-9530-aae2027195cc":{"name":"arrow","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"bECEeuj073HAmoCncEDim20WipHA.gmh","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/f912211c-29f8-406d-9530-aae2027195cc.png"},"e7bfc9c3-8424-4b08-8c4d-aa79a81ecc3b":{"name":"corona","sourceUrl":null,"frameSize":{"x":390,"y":390},"frameCount":2,"looping":true,"frameDelay":5,"version":"fyDKn1wapjJb8M9ff3v2RcTQwlbef4vP","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":780},"rootRelativePath":"assets/e7bfc9c3-8424-4b08-8c4d-aa79a81ecc3b.png"},"e32f3334-ac50-464d-a350-e9967c41104c":{"name":"GameOver","sourceUrl":"assets/api/v1/animation-library/gamelab/LBlP81tVFOe5pivbH48aq_4zoApgk97p/category_game_blocks/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"LBlP81tVFOe5pivbH48aq_4zoApgk97p","categories":["game_blocks"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LBlP81tVFOe5pivbH48aq_4zoApgk97p/category_game_blocks/textGameOver.png"},"def3fc04-fe93-4784-a615-aa00d00f1476":{"name":"restart","sourceUrl":null,"frameSize":{"x":108,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"R_po07MCLqAPnWhwY86wltkjb_CkVcKE","categories":["game_blocks"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":48},"rootRelativePath":"assets/def3fc04-fe93-4784-a615-aa00d00f1476.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// HOW TO PLAY:-
// This game is to cut the fruits and don't touch the corona
// You can get an arrow by pressing on the bow
// Your score increases by cutting the fruits
// You have 3 lives
// You can restart the game by pressing restart button
// If the restart is pressed you will lose 1 life
// ENJOY AND PLAY!


//creating the required variables and groups

var scene = createSprite(200,200,400,400);
scene.setAnimation("bg");
scene.scale = 0.55;

var o = createSprite(0,0,800,10);
o.visible = false;

var life = 3;

var bow = createSprite(40,200,10,10);
bow.setAnimation("bow");

var restart = createSprite(200,300,10,10);
restart.setAnimation("restart");
restart.visible = false;

var gameOver = createSprite(200,200,10,10);
gameOver.setAnimation("GameOver");
gameOver.scale = 0.5;
gameOver.visible = false;

var e = createGroup();
var f = createGroup();
var a = createGroup();

var score = 0;

var gameState = "play";

function draw() {
  
  //clear the screen
  background(255,240,120);
  
  //what things are needed when the gameState is play
  if(gameState==="play"){
     bow.y = World.mouseY;
     
     
     
     
     f.bounceOff(o);
     e.bounceOff(o);
  
     if(f.isTouching(o)){
       f.setVelocityYEach(5);
     }
     
     if(e.isTouching(o)){
       e.setVelocityYEach(5);
     }
     
     if(mousePressedOver(bow)){
       var arrow = createSprite(bow.x,bow.y,10,10);
       arrow.setAnimation("arrow");
       arrow.velocityX = 20;
       arrow.lifetime = 20;
       arrow.setCollider("rectangle",0,0,100,10);
       playSound("assets/category_whoosh/animation_whoosh11.mp3");
       a.add(arrow);
     }
    
    if(a.isTouching(f)){
      a.destroyEach();
      f.destroyEach();
      playSound("assets/category_explosion/air_explode_bonus_5.mp3", false);
      score = score+1;
    }
    
    if(a.isTouching(e)){
      a.setLifetimeEach(-1);
      e.setLifetimeEach(-1);
      playSound("assets/category_female_voiceover/game_over_female.mp3", false);
      gameState = "end";
    }
    
    fruit();
    enemies();
  }
  
  //what things are needed when the gameState is end
  if(gameState==="end"){
    gameOver.visible = true;
    restart.visible = true;
    e.setVelocityYEach(0);
    a.setVelocityXEach(0);
    f.setVelocityYEach(0);
    
    if(mousePressedOver(restart)){
      gameState = "play";
      life = life-1;
      e.destroyEach();
      a.destroyEach();
      e.setVelocityYEach(-15);
      a.setVelocityXEach(20);
      f.setVelocityYEach(-15);
      stopSound("assets/category_female_voiceover/game_over_female.mp3");
      gameOver.visible = false;
      restart.visible = false;
    }
    
    if(life===1){
      restart.destroy();
    }
  }
 
  
  
  
  drawSprites();
  
  textSize(20);
  fill("blue");
  text("SCORE:"+ score,300,50);
  
  if (life===3){
    text("💖💖💖",10,30);
  }
  if (life===2){
    text("💖💖",10,30);
  }
  if (life===1){
    text("💖",10,30);
  }
}

function fruit(){
  
  //function which is spawning fruits
  if(World.frameCount%70===0){
    var fruits = createSprite(randomNumber(60,370),400,10,10);
    fruits.setAnimation("apple");
    fruits.scale = 0.15;
    fruits.velocityY = -(15+score/8);
    fruits.lifetime = 100;
   
    var select_fruit = randomNumber(1,6);
    if(select_fruit===1){
      fruits.setAnimation("apple");
    }
    else if(select_fruit===2){
      fruits.setAnimation("lemon");
    }
    else if(select_fruit===3){
      fruits.setAnimation("orange");
    }
    else if(select_fruit===4){
      fruits.setAnimation("pineapple");
    }
    else if(select_fruit===5){
      fruits.setAnimation("strawberry");
    }
    else{
      fruits.setAnimation("grapes");
    }
    f.add(fruits);
  }
  
}

function enemies(){
  
  //function which is spawning enemies
  if(World.frameCount%200===0){
    var enemy = createSprite(randomNumber(50,360),400,10,10);
    enemy.setAnimation("corona");
    enemy.scale = 0.2;
    enemy.velocityY = -(15+score/10);
    enemy.lifetime = 100;
    enemy.setCollider("circle",0,0,120);
    e.add(enemy);
  }
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
