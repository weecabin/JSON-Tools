const fs=require("fs")

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
   