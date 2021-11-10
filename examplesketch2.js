var stage =0
var timer =0;
var mapX=0;
var mapY=0;
var numdead=0;
var numdeadindia =0;
var numdeadbrazil =0;
var numdeaduk =0;
var numdeaditaly =0;

var arraylength;
let circlearray = [];

let hourarray = [];

let place =true;
let stop = false;
let display = false;
let step =3;
/////////////
/// json area
var data;
var twoyearsinsec = 63072000;
let us;
///
////////////


///
/// images
///
let mapimg;
let animationimg;
let casesimg;
let deathimg;
let displayimg;
////

function preload() {
  // Get the most recent earthquake in the database
  us = loadJSON('https://pkgstore.datahub.io/core/covid-19/key-countries-pivoted_json/data/7e24dad296d14d3e10caebe57a84f57d/key-countries-pivoted_json.json');

  data = loadJSON('https://pkgstore.datahub.io/core/covid-19/countries-aggregated_json/data/05aae8819a87b2c303eb42767cca9795/countries-aggregated_json.json');

  mapimg = loadImage('map.png');
  animationimg= loadImage('animatedscreen.png')
  casesimg = loadImage('cases.png');
  deathimg = loadImage('death.png');
  displayimg = loadImage('displaycard.png');
}



function setup() {


  createCanvas(1912, 1002);

  for (let i = 0; i < 400; i++) {
    circlearray[i] = {
      x: random(480,1399),
      y: random(50,850),
      speed: 5,
      display: function(){
        image(casesimg,this.x,this.y,25,25);

      },

      move: function(){

        circlearray[i].x = circlearray[i].x +=circlearray[i].speed;

        if(circlearray[i].x > 1900 || circlearray[i].x < 475){
          circlearray[i].speed=circlearray[i].speed*-1;
        }

        // this.y = this.y +=step;

      },
    }

  }
  for (let i = 0; i < 400; i++) {
    hourarray[i] = {
      x: random(480,1399),
      y: random(50,850),
      speed: 5,
      display: function(){
        // fill(100,150,9);
        image(deathimg, this.x,this.y,50,50);

      },

      move: function(){

        hourarray[i].x = hourarray[i].x +=hourarray[i].speed;

        if(hourarray[i].x > 1850 || hourarray[i].x < 475){
          hourarray[i].speed=hourarray[i].speed*-1;
        }

        // this.y = this.y +=step;

      },
    }

  }

}


function draw() {

background(0, 36, 128);
image(mapimg,mapX,mapY);
//json area//
var coviddata = data;
var indiaCases = round(coviddata[52217].Confirmed/twoyearsinsec);
var brazilCases = round(coviddata[15665].Confirmed/twoyearsinsec*3);
var italyCases = round(coviddata[56133].Confirmed/twoyearsinsec*13);
var ukCases = round(coviddata[122058].Confirmed/twoyearsinsec*7);
//us
var usdata = us;
var usCases = round(usdata[651].US/twoyearsinsec);




if (stage==0){
rect(350,200,50,50);
// text('United states',50,100,30,30);
if(mouseX>350 && mouseX<400 && mouseY>200 && mouseY<250){

  text(" United\n States",350,225);
}

rect(1310,325,50,50);
// text('India',455,100,30,30);

if(mouseX > 1310 && mouseX <1360 && mouseY>325 && mouseY < 375){

  text("India",1312,350);
}


rect(550,500,50,50);
// text('Brazil',50,500,30,30);

if(mouseX > 550 && mouseX < 600 && mouseY>500 && mouseY < 550){

  text("Brazil",552,525);
}


rect(950,210,50,50);
// text('Italy',50,300,30,30);

if(mouseX > 950 && mouseX < 1000 && mouseY>210 && mouseY < 260){

  text("Italy",952,235);
}



rect(855,120,50,50);
// text('UK',455,100,30,30);

if(mouseX > 855 && mouseX < 905 && mouseY>120 && mouseY < 170){

  text(" United\n Kingdom",854,145);
}



}
if (stage==1){

timer++;

mapX=9000;
mapY=9000;
// animationimg.resize(1500, 1020);
image(animationimg, 0,0);
// image(displayimg, 500, 100,1000,100);

if(display==true){
  for (var i = 0; i < 44; i++) {

    hourarray[i].display();

          }
          for (var i = 0; i < 44; i++) {

            hourarray[i].move();

                  }
}

usCases=usCases*30


if(timer % usCases == 0){
  numdead=numdead+2;
}
rect(20,120,60,30);
text('display',30,140);

  if(place==true){

  for (var i = 0; i < arraylength; i++) {

    circlearray[i].display();

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
if(stage==2){


timer++;
mapX=9000;
mapY=9000;
image(animationimg, 0,0);
if(display==true){
  for (var i = 0; i < round(coviddata[52217].Deaths/17520); i++) {

    hourarray[i].display();

          }
          for (var i = 0; i < round(coviddata[52217].Deaths/17520); i++) {

            hourarray[i].move();

                  }
}

rect(20,120,60,30);
text('display',30,140);

indiaCases=indiaCases*120;

if(timer % indiaCases == 0){
  numdeadindia++;
}
if(place==true){

for (var i = 0; i < arraylength; i++) {
  circlearray[i].display();

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

if(stage==3){


timer++;
mapX=9000;
mapY=9000;
image(animationimg, 0,0);
if(display==true){
  for (var i = 0; i < round(coviddata[15665].Deaths/17520); i++) {

    hourarray[i].display();

          }
          for (var i = 0; i < round(coviddata[15665].Deaths/17520); i++) {

            hourarray[i].move();

                  }
}

rect(20,120,60,30);
text('display',30,140);
brazilCases=brazilCases*180;

if(timer % brazilCases == 0){

  numdeadbrazil++;

}

if(place==true){

for (var i = 0; i < arraylength; i++) {
  circlearray[i].display();

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

if(stage==4){


timer++;
mapX=9000;
mapY=9000;
image(animationimg, 0,0);
rect(20,120,60,30);
text('display',30,140);
if(display==true){
  for (var i = 0; i < round(coviddata[56133].Deaths/17520); i++) {

    hourarray[i].display();

          }
          for (var i = 0; i < round(coviddata[56133].Deaths/17520); i++) {

            hourarray[i].move();

                  }
}

italyCases=italyCases*780;

if(timer % italyCases == 0){

  numdeaditaly++;

}

if(place==true){

for (var i = 0; i < arraylength; i++) {
  circlearray[i].display();

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

if(stage==5){


timer++;
mapX=9000;
mapY=9000;
image(animationimg, 0,0);
rect(20,120,60,30);
text('display',30,140);
if(display==true){
  for (var i = 0; i < round(coviddata[122058].Deaths/17520); i++) {

    hourarray[i].display();

          }
          for (var i = 0; i < round(coviddata[122058].Deaths/17520); i++) {

            hourarray[i].move();

                  }
}

ukCases= ukCases*420;

if(timer % ukCases == 0){

  numdeaduk++;

}

if(place==true ){

for (var i = 0; i < arraylength; i++) {
  circlearray[i].display();

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
if (stage==0 && mouseX > 350 && mouseX <400 && mouseY>200 && mouseY < 250){
      stage=1;

  }
if (stage==0 && mouseX > 1310 && mouseX <1360 && mouseY>325 && mouseY < 375){
      stage=2;
  }
if (stage==0 && mouseX > 550 && mouseX < 600 && mouseY>500 && mouseY < 550){
      stage=3;
    }
if (stage==0 && mouseX > 950 && mouseX < 1000 && mouseY>210 && mouseY < 260){
          stage=4;
        }
if (stage==0 && mouseX > 855 && mouseX < 905 && mouseY>120 && mouseY < 170){
          stage=5;
        }

///
///stage1
if(stage==1 && mouseX>400){
place=true;

arraylength=numdead;
    }
    if(stage==1 && mouseX > 20 && mouseX < 80 && mouseY>120 && mouseY < 150){
        display=true;
            }

///
///

///
///stage 2
if(stage==2 && mouseX>400){
place=true;

arraylength=numdeadindia;
    }
    if(stage==2 && mouseX > 20 && mouseX < 80 && mouseY>120 && mouseY < 150){
        display=true;
            }


//////
/////
if(stage==3 && mouseX>400){
place=true;

arraylength=numdeadbrazil;
    }
    if(stage==3 && mouseX > 20 && mouseX < 80 && mouseY>120 && mouseY < 150){
        display=true;
            }
/////
//
//
//
if(stage==4 && mouseX>400){
place=true;

arraylength=numdeaditaly;
      }
      if(stage==4 && mouseX > 20 && mouseX < 80 && mouseY>120 && mouseY < 150){
          display=true;
              }
/////
////
/////
if(stage==5 && mouseX>400){
place=true;

arraylength=numdeaduk;
      }
      if(stage==5 && mouseX > 20 && mouseX < 80 && mouseY>120 && mouseY < 150){
          display=true;
              }
///
//////
/////////last bracket

  }





function mouseReleased(){
if(stage>=1 && mouseX>400){
place=false;
  }

}
