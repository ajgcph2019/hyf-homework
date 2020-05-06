/*{
  "networks": [
    {
        "company": "JCDecaux", 
        "href": "/v2/networks/velib", <--- network API endpoint
        "location": {
          "latitude": 48.856612, 
          "city": "Paris", 
          "longitude": 2.352233, 
          "country": "FRA"
        }, 
        "name": "Vélib'", 
        "id": "velib"
    },
    {...}
  ]
}
Gets an object named network*/

 fetch('http://api.citybik.es/v2/networks')
   .then(response => response.json())

    .then(data => {
        console.log(data)

    });