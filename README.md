# moat

To clone the repo, enter command (This is a private repo. For access, please ask for invite.): <br />
`git clone https://github.com/yuchaodong/moat.git`

Before using, make sure you have the following dependencies installed: <br />
axios: `npm install axios`; <br />
body-parser: `npm install body-parser`; <br />
express `npm install express`; <br />
mocha: `npm install mocha`; <br />
nodemon: `npm install nodemon`; <br />
supertest: `npm install supertest`; <br />

To use, enter command: <br />
`nodemon`;

To test, enter command: <br />
`npm test`;


About the app: <br />

This app calculates the distance between any 2 airports in the US (incl. Hawaii and Alaska). 
To use, type in the name or code of a US airport in the input boxes labeled 'Origin Airport' and 'Destination Airport.' For example, for John F Kennedy International Airport, you can enter either its code (JFK) or its name. Once your desired input appears on the list, you can click on the name, and that airport name will then fill the input form. When both inputs are filled, click 'Calculate Distance' to find the nautical miles between the 2 airports. Google Maps also appears at the bottom of the screen after clicking 'Calculate Distance,' with 2 markers that mark the geographic location of the 2 airports with the shortest flight route between them. The airport name appears if you hover your mouse over the marker.


Database choice: <br />

The database is stored locally in a file named allAirports.json. The decision to have it stored in the repo is because this particular file is very small and storing it locally makes queries faster. However, a con of having it stored locally is the inability to update the data on a regular and consistent basis.


When airport name is 'No Name': <br />

There are some airports in the database who's name has a value of empty string (''). For those airports, I have changed their name from '' to 'No Name.' Some examples are 'IRM,''KFP' and 'KNK.'


Calculating distance: <br />

For this app, the Haversine Formula is used in calculating the distance between the airports, though the Google Maps API has that functionality.


Testing: <br />

Supertest is used with Mocha to test endpoints and functions. The tests can be found in test/test.js.


How the app is structured: <br />

The db is stored on the back-end, in server.
The auto-complete functionality is in the front-end, in public (for the sake of speed).


API Key: <br />

Usually, it is bad practice to publicly reveal API Keys in your code. However, according to Google documentation, the Google Maps Browser Key 'must be public on your page' so that's why you still see the key in the public folder.
