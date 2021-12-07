var stage = 0;
var timer =0;
var mapX=0;
var mapY=0;
var numdead=0;
var numdeadindia =0;
var numdeadbrazil =0;
var numdeaduk =0;
var numdeaditaly =0;
var textdisplay=false;
var indiaRecovered = 0;
var brazilRecovered = 0;
var ukRecovered =0;
var italyRecovered = 0;

//
///
var displaynum, displaynum2, displaynum3;
var displaynumindia,displaynumindia2,displaynumindia3;
var displaynumbrazil,displaynumbrazil2,displaynumbrazil3;
var displaynumuk,displaynumuk2,displaynumuk3;
var displaynumitaly,displaynumitaly2,displaynumitaly3;
///
//


var arraylength;

let circlearray = [];

let hourarray = [];

let shieldarray =[];
//booleans for displaying images
let place =true;
let stop = false;
let display = false;
let shieldDisplay = false;

//
let step =3;
/////////////
/// json area
var data;
var twoyearsinsec = 63072000;
let us;
///
///////////////


////
/// images
////
let mapimg;
let animationimg;
let casesimg;
let deathimg;
let recovimg;
let displayimg;
//
let indiaImg;
let ukImg;
let usImg;
let brazilImg;
let italyImg;
let homeImg;
let homeStartbutton;
//button images
let brazilButton;
let ukButton;
let usButton;
let italyButton;
let indiaButton;

let deathButton;
let recoveredButton;
let casesButton;
let backButton;

//////

function preload() {
  // Get the most recent earthquake in the database
  us = loadJSON('https://pkgstore.datahub.io/core/covid-19/key-countries-pivoted_json/data/7e24dad296d14d3e10caebe57a84f57d/key-countries-pivoted_json.json');
  data = loadJSON('https://pkgstore.datahub.io/core/covid-19/countries-aggregated_json/data/05aae8819a87b2c303eb42767cca9795/countries-aggregated_json.json');

  mapScreenimg = loadImage('mapScreen.png');
  mapImg = loadImage('map.png')
  animationimg= loadImage('animatedscreen.png')
  casesimg = loadImage('cases.png');
  deathimg = loadImage('death.png');
  recovimg = loadImage('recoveredshield.png');
  displayimg = loadImage('displaycard.png');

  indiaImg = loadImage('indiaScreen.png');
  brazilImg = loadImage('brazilScreen.png');
  italyImg = loadImage('italyScreen.png');
  homeImg = loadImage('homeScreen.png');
  ukImg = loadImage('ukScreen.png');
  usImg = loadImage('usScreen.png');


  //buttons
  usButton = loadImage('usButton.png');
  ukButton = loadImage('ukButton.png');
  brazilButton = loadImage('brazilButton.png');
  italyButton = loadImage('italyButton.png');
  indiaButton = loadImage('indiaButton.png');

  deathButton = loadImage('deathButton.png');
  recoveredButton = loadImage('recoveredButton.png');
  casesButton = loadImage('casesButton.png');

  homeStartbutton = loadImage('homeStartbutton.png');
  backButton = loadImage('backButton.png');
}



function setup() {


  createCanvas(1912, 1002);
//cases (viruses)
  for (let i = 0; i < 400; i++) {
    circlearray[i] = {
      x: random(531,1399),
      y: random(50,850),
      speed: 5,
      display: function(){
        image(casesimg,this.x,this.y,25,25);

      },

      move: function(){

        circlearray[i].x = circlearray[i].x +=circlearray[i].speed;

        if(circlearray[i].x > 1850 || circlearray[i].x < 530){
          circlearray[i].speed=circlearray[i].speed*-1;
        }

        // this.y = this.y +=step;

      },
    }

  }
  ///deaths (skulls)
  for (let i = 0; i < 400; i++) {
    hourarray[i] = {
      x: random(531,1399),
      y: random(50,850),
      speed: 5,
      display: function(){
        // fill(100,150,9);
        image(deathimg, this.x,this.y,50,50);

      },

      move: function(){

        hourarray[i].x = hourarray[i].x +=hourarray[i].speed;

        if(hourarray[i].x > 1850 || hourarray[i].x < 530){
          hourarray[i].speed=hourarray[i].speed*-1;
        }

        // this.y = this.y +=step;

      },
    }

  }

  ///recovered (shields)
  for (let i = 0; i < 400; i++) {
    shieldarray[i] = {
      x: random(531,1399),
      y: random(50,850),
      speed: 4,
      display: function(){
        // fill(100,150,9);
        image(recovimg, this.x,this.y,50,50);

      },

      move: function(){

        shieldarray[i].x = shieldarray[i].x +=shieldarray[i].speed;

        if(shieldarray[i].x > 1850 || shieldarray[i].x < 530){
          shieldarray[i].speed=shieldarray[i].speed*-1;
        }

        // this.y = this.y +=step;

      },
    }

  }
}

function reset(){
  stage=1;
  redraw();
}

function draw() {
print('place' + place);
background(0, 36, 128);
// print(stage);
//json area//

//cases
var coviddata = data;
var indiaCases = round(coviddata[52217].Confirmed/twoyearsinsec);
var brazilCases = round(coviddata[15665].Confirmed/twoyearsinsec*3);
var italyCases = round(coviddata[56133].Confirmed/twoyearsinsec*13);
var ukCases = round(coviddata[122058].Confirmed/twoyearsinsec*7);

//Deaths

 indiaRecovered = round(coviddata[52129].Recovered/1051200);
 brazilRecovered = round(coviddata[15573].Recovered/1051200);
 ukRecovered = 8;
 italyRecovered = round(coviddata[56042].Recovered/1051200);


//us
var usdata = us;
var usCases = round(usdata[651].US/twoyearsinsec);
var usRecovered = 38;
// var usRecovered = round(usdata[651].US/twoyearsinsec);

if(stage==0){
 // homeImg.resize(2065,1012);

 image(homeImg,0,0);
 image(homeStartbutton,200,700);

}

if (stage==1){
textdisplay=false;
mapScreenimg.resize(1912,1012);
image(mapScreenimg,0,0);
mapImg.resize(1200,600);
image(mapImg,550,150);

// rect(720,345,163,75);
// usButton.resize(170,40)
image(usButton,835,390);
// text('United states',50,100,30,30);
// if(mouseX>350 && mouseX<400 && mouseY>200 && mouseY<250){
//
//   text(" United\n States",350,225);
// }
//
// rect(1370,405,80,90);
// indiaButton.resize(170,40)
image(indiaButton,1290,465);
// // text('India',455,100,30,30);
//
// if(mouseX > 1310 && mouseX <1360 && mouseY>325 && mouseY < 375){
//
//   text("India",1312,350);
// }
//
//
// rect(880,520,120,103);
// brazilButton.resize(114,47)
image(brazilButton,950,570);

// // text('Brazil',50,500,30,30);
//
// if(mouseX > 550 && mouseX < 600 && mouseY>500 && mouseY < 550){
//
//   text("Brazil",552,525);
// }
//
//
// rect(1150,350,40,40);
// italyButton.resize(90,40)
image(italyButton,1164,363);
// // text('Italy',50,300,30,30);
//
// if(mouseX > 950 && mouseX < 1000 && mouseY>210 && mouseY < 260){
//
//   text("Italy",952,235);
// }



// rect(1100,300,40,40);
// ukButton.resize(170,40)
image(ukButton,945,325);
// // text('UK',455,100,30,30);
//
// if(mouseX > 855 && mouseX < 905 && mouseY>120 && mouseY < 170){
//
//   text(" United\n Kingdom",854,145);
// }



}
if (stage==2){

timer++;

mapX=9000;
mapY=9000;
// animationimg.resize(1500, 1020);
image(usImg, 0,0);
// image(displayimg, 500, 100,1000,100);

if(display==true){
  for (var i = 0; i < 44; i++) {

    hourarray[i].display();

          }
  fill('#F45786');
  text(displaynum2,300,450);

          for (var i = 0; i < 44; i++) {

            hourarray[i].move();

                  }
}
if(shieldDisplay==true){
  for (var i = 0; i < usRecovered; i++) {

    shieldarray[i].display();

          }
          displaynum3 = usRecovered;
          fill('#08E1F6');
          text(displaynum3,300,600);

          for (var i = 0; i < usRecovered; i++) {

            shieldarray[i].move();

                  }

}
usCases=usCases*30
image(backButton, 85,930);
image(deathButton,819,930);
image(recoveredButton,1003,930);
image(casesButton,1230,930);

if(timer % usCases == 0){
  numdead=numdead+2;
}
textSize(26);



// rect(20,120,60,30);
// text('display',30,140);
////////////////////////////////////////////////////////////displaynumUS

displaynum2 = 44;

// text(displaynum3,300,700);
/////////////////////////////////////////////////////////////

  if(place==true){

  for (var i = 0; i < arraylength; i++) {

    circlearray[i].display();


          }

          if(textdisplay==true){
            fill('#FED04C');
            text(displaynum,300,300);
          }
    for (var i = 0; i < arraylength; i++) {

            circlearray[i].move();

          }

  // place=true;
        }
        else{

          for (var i = 0; i < numdead; i++) {
            circlearray[i].display();

                  }

            for (var i = 0; i < numdead; i++) {
                    circlearray[i].move();

                        }

        }

console.log(numdead);
// console.log(timer);
console.log(place);

}
////////
////////
////////india
////////
////////
///////
if(stage==3){


timer++;
mapX=9000;
mapY=9000;
image(indiaImg, 0,0);
if(display==true){
  for (var i = 0; i < round(coviddata[52217].Deaths/17520); i++) {

    hourarray[i].display();

          }
          fill('#F45786');
          text(displaynum2,300,450);
          for (var i = 0; i < round(coviddata[52217].Deaths/17520); i++) {

            hourarray[i].move();

                  }
}
if(shieldDisplay==true){

  for (var i = 0; i < indiaRecovered; i++) {

    shieldarray[i].display();

          }
          displaynum3 = indiaRecovered;
          fill('#08E1F6');
          text(displaynum3,300,600);

          for (var i = 0; i < indiaRecovered; i++) {

            shieldarray[i].move();

                  }

}
// usCases=usCases*30
image(backButton, 85,930);
image(deathButton,819,930);
image(recoveredButton,1003,930);
image(casesButton,1230,930);


textSize(26);



// rect(20,120,60,30);
// text('display',30,140);
////////////////////////////////////////////////////////////displaynumIndia

displaynum2 = round(coviddata[52217].Deaths/17520);

// text(displaynum3,300,700);
/////////////////////////////////////////////////////////////
// rect(20,120,60,30);
// text('display',30,140);

indiaCases=indiaCases*120;

if(timer % indiaCases == 0){
  numdeadindia++;
}
if(place==true){

for (var i = 0; i < arraylength; i++) {
  circlearray[i].display();

        }
        if(textdisplay==true){
          fill('#FED04C');
          text(displaynum,300,300);
        }

  for (var i = 0; i < arraylength; i++) {
          circlearray[i].move();

        }

// place=true;
      }
      else{

        for (var i = 0; i < numdeadindia; i++) {
          circlearray[i].display();

                }

          for (var i = 0; i < numdeadindia; i++) {
                  circlearray[i].move();

                      }

      }
      console.log(numdeadindia);
      console.log(indiaCases);
      console.log(place);
}

//////
/////
///brazil
//////
/////

if(stage==4){


timer++;
mapX=9000;
mapY=9000;
image(brazilImg, 0,0);
if(display==true){
  for (var i = 0; i < round(coviddata[15665].Deaths/17520); i++) {

    hourarray[i].display();

          }
          fill('#F45786');
          text(displaynum2,300,450);
          for (var i = 0; i < round(coviddata[15665].Deaths/17520); i++) {

            hourarray[i].move();

                  }
}
if(shieldDisplay==true){

  for (var i = 0; i < brazilRecovered; i++) {

    shieldarray[i].display();

          }
          displaynum3 = brazilRecovered;
          fill('#08E1F6');
          text(displaynum3,300,600);

          for (var i = 0; i < brazilRecovered; i++) {

            shieldarray[i].move();

                  }

}

image(backButton, 85,930);
image(deathButton,819,930);
image(recoveredButton,1003,930);
image(casesButton,1230,930);


textSize(26);



// rect(20,120,60,30);
// text('display',30,140);
////////////////////////////////////////////////////////////displaynumBrazil

displaynum2 = round(coviddata[15665].Deaths/17520);

// text(displaynum3,300,700);
/////////////////////////////////////////////////////////////
// rect(20,120,60,30);
// text('display',30,140);
brazilCases=brazilCases*180;

if(timer % brazilCases == 0){

  numdeadbrazil++;

}

if(place==true){

for (var i = 0; i < arraylength; i++) {
  circlearray[i].display();

        }
        if(textdisplay==true){
          fill('#FED04C');
          text(displaynum,300,300);
        }
  for (var i = 0; i < arraylength; i++) {
          circlearray[i].move();

        }

// place=true;
      }
      else{

        for (var i = 0; i < numdeadbrazil; i++) {
          circlearray[i].display();

                }

          for (var i = 0; i < numdeadbrazil; i++) {
                  circlearray[i].move();

                      }

      }

      console.log(numdeadbrazil);
      console.log(brazilCases);
      console.log(place);

}
//////
///// italy
////

if(stage==5){


timer++;
mapX=9000;
mapY=9000;
image(italyImg, 0,0);
// rect(20,120,60,30);
// text('display',30,140);
if(display==true){
  for (var i = 0; i < round(coviddata[56133].Deaths/17520); i++) {

    hourarray[i].display();

          }
          fill('#F45786');
          text(displaynum2,300,450);
          for (var i = 0; i < round(coviddata[56133].Deaths/17520); i++) {

            hourarray[i].move();

                  }
}
if(shieldDisplay==true){

  for (var i = 0; i < italyRecovered; i++) {

    shieldarray[i].display();

          }
          fill('#08E1F6');
          displaynum3 = italyRecovered;
          text(displaynum3,300,600);

          for (var i = 0; i < italyRecovered; i++) {

            shieldarray[i].move();

                  }

}

image(backButton, 85,930);
image(deathButton,819,930);
image(recoveredButton,1003,930);
image(casesButton,1230,930);


textSize(26);



// rect(20,120,60,30);
// text('display',30,140);
////////////////////////////////////////////////////////////displaynumItaly

displaynum2 =  round(coviddata[56133].Deaths/17520);

// text(displaynum3,300,700);
/////////////////////////////////////////////////////////////
italyCases=italyCases*780;

if(timer % italyCases == 0){

  numdeaditaly++;

}

if(place==true){

for (var i = 0; i < arraylength; i++) {
  circlearray[i].display();

        }
        if(textdisplay==true){
          fill('#FED04C');
          text(displaynum,300,300);
        }
  for (var i = 0; i < arraylength; i++) {
          circlearray[i].move();

        }

// place=true;
      }
      else{

        for (var i = 0; i < numdeaditaly; i++) {
          circlearray[i].display();

                }

          for (var i = 0; i < numdeaditaly; i++) {
                  circlearray[i].move();

                      }

      }

      console.log(numdeaditaly);
      console.log(italyCases);
      console.log(place);

}

//////
///// UK
////

if(stage==6){


timer++;
mapX=9000;
mapY=9000;
image(ukImg, 0,0);
// rect(20,120,60,30);
// text('display',30,140);
if(display==true){
  for (var i = 0; i < round(coviddata[122058].Deaths/17520); i++) {

    hourarray[i].display();

          }
          fill('#F45786');
          text(displaynum2,300,450);
          for (var i = 0; i < round(coviddata[122058].Deaths/17520); i++) {

            hourarray[i].move();

                  }
}
if(shieldDisplay==true){
  for (var i = 0; i < ukRecovered; i++) {

    shieldarray[i].display();

          }
          displaynum3 = ukRecovered;
          fill('#08E1F6');
          text(displaynum3,300,600);

          for (var i = 0; i < ukRecovered; i++) {

            shieldarray[i].move();

                  }

}

image(backButton, 85,930);
image(deathButton,819,930);
image(recoveredButton,1003,930);
image(casesButton,1230,930);

textSize(26);


// rect(20,120,60,30);
// text('display',30,140);
////////////////////////////////////////////////////////////displaynumUK

displaynum2 = round(coviddata[122058].Deaths/17520);

// text(displaynum3,300,700);
/////////////////////////////////////////////////////////////
ukCases= ukCases*420;

if(timer % ukCases == 0){

  numdeaduk++;

}

if(place==true ){

for (var i = 0; i < arraylength; i++) {
  circlearray[i].display();

        }
        if(textdisplay==true){
          fill('#FED04C');
          text(displaynum,300,300);
        }
  for (var i = 0; i < arraylength; i++) {
          circlearray[i].move();

        }

// place=true;
      }
      else{

        for (var i = 0; i < numdeaduk; i++) {
          circlearray[i].display();

                }

          for (var i = 0; i < numdeaduk; i++) {
                  circlearray[i].move();

                      }

      }

      console.log(numdeaduk);
      console.log(ukCases);
      console.log(place);

}


///////
//////last bracket
}




function mouseClicked(){

if (stage==0 && mouseX > 200 && mouseX <350 && mouseY>700 && mouseY < 850){
        stage=1;

    }

if (stage==1 && mouseX > 835 && mouseX <1020 && mouseY>390 && mouseY < 435){
      stage=2;

  }
if (stage==1 && mouseX > 1290 && mouseX <1390 && mouseY>465 && mouseY < 505){
      stage=3;
  }
if (stage==1 && mouseX > 950 && mouseX < 1057 && mouseY>570 && mouseY < 615){
      stage=4;
    }
if (stage==1 && mouseX > 1164 && mouseX < 1254 && mouseY>363 && mouseY < 402){
          stage=5;
        }
if (stage==1 && mouseX > 945 && mouseX < 1120 && mouseY>325 && mouseY < 369){
          stage=6;
        }

///
///stage1
if(stage==2 && mouseX>1230 && mouseX<1698 && mouseY>930 && mouseY <990){
place=true;
displaynum =numdead;
arraylength=numdead;
textdisplay =true;
    }
    if(stage==2 && mouseX>85 && mouseX<230 && mouseY>930 && mouseY <990 ){

      stage=1;
      numdeaduk=0;
      numdeadbrazil=0;
      numdeadindia=0;
      numdead=0;
      numdeaditaly=0;
      arraylength=0;
      shieldDisplay=false;
      display=false;

      usRecovered =0;
      indiaRecovered =0;
      brazilRecovered =0;
      ukRecovered = 0;
      italyRecovered =0;
    }
    if(stage==2 && mouseX > 819 && mouseX < 980 && mouseY>930 && mouseY < 990){
        display=true;
            }
    if(stage==2 && mouseX > 1003 && mouseX < 1206 && mouseY>930 && mouseY < 990){
        shieldDisplay=true;
    }
///
///

///
///stage 2
if(stage==3 && mouseX>1230 && mouseX<1698 && mouseY>930 && mouseY <990){
place=true;
displaynum =numdeadindia;
arraylength=numdeadindia;
textdisplay =true;
    }
    if(stage==3 && mouseX>85 && mouseX<230 && mouseY>930 && mouseY <990 ){

      stage=1;
      numdeaduk=0;
      numdeadbrazil=0;
      numdeadindia=0;
      numdead=0;
      numdeaditaly=0;
      arraylength=0;
      indiaRecovered =0;
      brazilRecovered =0;
      ukRecovered = 0;
      italyRecovered =0;
      usRecovered =0;
      shieldDisplay=false;
      display=false;

    }
    if(stage==3 && mouseX > 819 && mouseX < 980 && mouseY>930 && mouseY < 990){
        display=true;
            }
    if(stage==3 && mouseX > 1003 && mouseX < 1206 && mouseY>930 && mouseY < 990){
        shieldDisplay=true;
    }


//////
/////
if(stage==4 && mouseX>1230 && mouseX<1698 && mouseY>930 && mouseY <990){
place=true;
displaynum =numdeadbrazil;
arraylength=numdeadbrazil;
textdisplay =true;
    }
    if(stage==4 && mouseX>85 && mouseX<230 && mouseY>930 && mouseY <990 ){

      stage=1;
      numdeaduk=0;
      numdeadbrazil=0;
      numdeadindia=0;
      numdead=0;
      numdeaditaly=0;
      arraylength=0;
      indiaRecovered =0;
      brazilRecovered =0;
      ukRecovered = 0;
      italyRecovered =0;
      usRecovered =0;
      shieldDisplay=false;
      display=false;

    }
    if(stage==4 && mouseX > 819 && mouseX < 980 && mouseY>930 && mouseY < 990){
        display=true;
            }
    if(stage==4 && mouseX > 1003 && mouseX < 1206 && mouseY>930 && mouseY < 990){
        shieldDisplay=true;
    }
/////
//
//
//
if(stage==5 && mouseX>1230 && mouseX<1698 && mouseY>930 && mouseY <990){
place=true;
displaynum =numdeaditaly;
arraylength=numdeaditaly;
textdisplay =true;
    }
    if(stage==5 && mouseX>85 && mouseX<230 && mouseY>930 && mouseY <990 ){

      stage=1;
      numdeaduk=0;
      numdeadbrazil=0;
      numdeadindia=0;
      numdead=0;
      numdeaditaly=0;
      arraylength=0;
      indiaRecovered =0;
      brazilRecovered =0;
      ukRecovered = 0;
      italyRecovered =0;
      usRecovered =0;
      shieldDisplay=false;
      display=false;

    }
    if(stage==5 && mouseX > 819 && mouseX < 980 && mouseY>930 && mouseY < 990){
        display=true;
            }
    if(stage==5 && mouseX > 1003 && mouseX < 1206 && mouseY>930 && mouseY < 990){
        shieldDisplay=true;
    }
/////
////
/////
if(stage==6 && mouseX>1230 && mouseX<1698 && mouseY>930 && mouseY <990){
place=true;
displaynum =numdeaduk;
arraylength=numdeaduk;
textdisplay =true;
    }
    if(stage==6 && mouseX>85 && mouseX<230 && mouseY>930 && mouseY <990 ){

      stage=1;
      numdeaduk=0;
      numdeadbrazil=0;
      numdeadindia=0;
      numdead=0;
      numdeaditaly=0;
      arraylength=0;
      indiaRecovered =0;
      brazilRecovered =0;
      ukRecovered = 0;
      italyRecovered =0;
      usRecovered =0;
      shieldDisplay=false;
      display=false;

    }
    if(stage==6 && mouseX > 819 && mouseX < 980 && mouseY>930 && mouseY < 990){
        display=true;
            }
    if(stage==6 && mouseX > 1003 && mouseX < 1206 && mouseY>930 && mouseY < 990){
        shieldDisplay=true;
    }
///
//////
/////////last bracket

  }





function mouseReleased(){
if(stage>=2 && mouseX>1230 && mouseX<1698 && mouseY>930 && mouseY <990){
place=false;

  }

}
