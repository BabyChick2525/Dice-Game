
  var random1 = Math.random();
  random1 = Math.floor(random1*20+1);
  console.log(random1);

  var random2 = Math.random();
  random2 = Math.floor(random2*20+1);
  console.log(random2);


  document.querySelector(".dice1").setAttribute("src", "images/dice"+random1+".png");
  document.querySelector(".dice2").setAttribute("src", "images/dice"+random2+".png");

  if (random1 > random2) document.querySelector("h1").innerText = "Player 1 Win!";
  else if (random1 === random2) document.querySelector("h1").innerText = "Draw!";
  else document.querySelector("h1").innerText = "Player 2 Win!";
