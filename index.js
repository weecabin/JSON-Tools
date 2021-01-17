const fs=require("fs")

/*
const apfilename="./MyAirports.json"
const jsonString = fs.readFileSync(apfilename)
var myAirports = JSON.parse(jsonString) 

// sets lat/lon precision to 6 decimal places
function replacer(name,value)
{
  if (name=="latitude" || name=="longitude")
  {
    value=Number(value).toFixed(6);
    return value;
  }
  return value;
}

var jsonAirports = JSON.stringify(myAirports,replacer)
  fs.writeFileSync("./MyAirports2.json", jsonAirports)
   
*/

/*
   "name": "GS",
   "airportICAO": "AYPY",
   "identifier": "IWG",
   "associatedRunwayNumber": "14L",
   "frequency": 110100,
   "elevation": 128,
   "latitude": -9.430886,
   "longitude": 147.213926,
   "bearing": 148.67,
   "glideslope": 3.0214867,
   "receptionRange": 10
 },
 {
 
*/

/*
first shot at this, see IF Airport Database for the final code
*/
let apgs= fs.readFileSync("./Glideslope.json");
let apobj = JSON.parse(apgs);
let apstr=[]
console.log(apobj.length)
for (i=0;i<apobj.length;i++)
{
  let ret =
  {
    icao: apobj[i].airportICAO,
    runway: apobj[i].associatedRunwayNumber,
    lat: apobj[i].latitude.toFixed(6),
    lon: apobj[i].longitude.toFixed(6),
    bearing: apobj[i].bearing
  }
  apstr[i]=(ret)
  //console.log(apobj[i])
  //console.log(apstr[i])
}

//console.log(apstr)

fs.writeFileSync("./SmallGS.json", JSON.stringify(apstr,null,1))

let test2 = JSON.parse(fs.readFileSync("./SmallGS.json"));

let san = test2.filter(tst=>tst.icao=="KSAN"&&tst.runway==9)
console.log(san)