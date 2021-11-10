// let covid;
var data;
let us;
var twoyearsinsec = 63072000;
function preload() {
  // Get the most recent earthquake in the database
  us = loadJSON('https://pkgstore.datahub.io/core/covid-19/key-countries-pivoted_json/data/7e24dad296d14d3e10caebe57a84f57d/key-countries-pivoted_json.json');

  data = loadJSON('https://pkgstore.datahub.io/core/covid-19/countries-aggregated_json/data/05aae8819a87b2c303eb42767cca9795/countries-aggregated_json.json');
  // us = loadJSON('https://pkgstore.datahub.io/core/covid-19/key-countries-pivoted_json/data/7e24dad296d14d3e10caebe57a84f57d/key-countries-pivoted_json.json');

    }


function setup() {
  // noLoop();
createCanvas(800,800);

var coviddata = data;
var usdata = us;

// for(var i = 0; i< traindata.length; i++){
//
// print(coviddata[651].Confirmed);
// print(coviddata[651].Deaths);
// print(coviddata[651].Country);

// print(coviddata[52217].Confirmed);
// print(round(coviddata[52217].Deaths/17520));
// print(coviddata[52217].Country);

// print(coviddata[15665].Confirmed);
// print(round(coviddata[15665].Deaths/17520));
// print(coviddata[15665].Country);


print(usdata[651].US);
// print(usdata[100].China);
// print(usdata[100].France);
  // }


}







function draw() {
coviddata = data;
background(200);
text(round(coviddata[15665].Confirmed),100,100);

}
