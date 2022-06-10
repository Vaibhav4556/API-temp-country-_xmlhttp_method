var request = new XMLHttpRequest();

request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")

request.send();

request.onload = function() {

    var data = JSON.parse(request.response);

    for (i = 0; i < data.length; i++) {

        var name = data[i].name;
        var long = data[i].latlng;
        wd(name, ...long);

    }
}

function wd(name, lat, lon) {

    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=46d01cd9b8369f0b52df4f0950603a17`;

    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.onload = function() {

        var result = JSON.parse(request.response)
        console.log(`${name}:${result.main.temp}`)


    }

}