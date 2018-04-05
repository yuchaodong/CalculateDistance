const sampleData = 
[
    {
    "code": "ABE",
    "lat": "40.6514",
    "lon": "-75.4342",
    "name": "Lehigh Valley International Airport",
    "city": "Allentown",
    "state": "Pennsylvania",
    "country": "United States",
    "woeid": "12518581",
    "tz": "America\/New_York",
    "phone": "610-266-6000",
    "type": "Airports",
    "email": "",
    "url": "http:\/\/www.lvia.org\/",
    "runway_length": null,
    "elev": null,
    "icao": "KABE",
    "direct_flights": "14",
    "carriers": "11"
    },
    {   
    "code": "ABI",
    "lat": "32.4164",
    "lon": "-99.6803",
    "name": "Abilene Regional Airport",
    "city": "Abilene",
    "state": "Texas",
    "country": "United States",
    "woeid": "12518518",
    "tz": "America\/Chicago",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": "7199",
    "elev": "1790",
    "icao": "KABI",
    "direct_flights": "2",
    "carriers": "4"
    }
]

// input: two pairs of latitude and latitude points => (1,2),(3,4)
// input: two airport locations (which include 2 pairs of lat/lon points)
// output: distance between the two points in nautical miles

// Earth's radius in nautical miles
// set eligibility (some values aren't valid lat/lon points)

// to find distance, lat2-lat1, lon2-lon1 => result is decimal degrees
// convert decimal degrees to radians
// convert radius to nautical miles (find radius in nautical miles)
// haversine formula
    // Math.sin
    // Math.cos
    // Math.atan2
    // Math.sqrt
    //.toRadians()

// Haversine formula(copied from site): 
    // R = 3440 (Earth's radius in nautical miles)
    // a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
    // c = 2 ⋅ atan2( √a, √(1−a) )
    // d = R ⋅ c
        // where	φ is latitude, λ is longitude, R is earth’s radius (mean radius = 6,371km);
        // note that angles need to be in radians to pass to trig functions!
// convert Formula to JS
    // R = 3440
    // const latInRadians = toRadians(lat2 - lat1);
    // const lonInRadians = toRadians(lon2 - lon1);
    // a = Math.sin(latInRadians/2) * Math.sin(latInRadians/2) + Math.cos(latInRadians(lat1)) 
    // * Math.cos(latInRadians(2)) * Math.sin(lonInRadians/2) * Math.sin(lonInRadians/2);
    // c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    // d = R * c
    // Δφ =>degree decimal (need to convert to radians)
        // function toRadians(degree) {
            // return degree * (Math.PI / 180);
        // }

function calculateDistanceBetweenAirports(lat1, lon1, lat2, lon2) {
  const radius = 3440;
  const latInRadians = toRadians(lat2-lat1);
  const lonInRadians = toRadians(lon2-lon1);
  const latSin = Math.sin(latInRadians/2) * Math.sin(latInRadians/2);
  const latCos =  Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2));
  const lonSin = Math.sin(lonInRadians/2) * Math.sin(lonInRadians/2);
  const halfLengthSquared = latSin + latCos * lonSin;
  const distanceInRadians = Math.atan2(Math.sqrt(halfLengthSquared), Math.sqrt(1 - halfLengthSquared));
  const angDistanceInRadians = 2 * distanceInRadians;
  const distanceInNauticalMiles = radius * angDistanceInRadians;
  return distanceInNauticalMiles;
}


function toRadians(degree) {
    return degree * (Math.PI / 180);
}