'use strict';

var getBeersAPI = function getBeersAPI() {
    return fetch('https://api.punkapi.com/v2/beers').then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Fail');
    }).then(function (response) {
        var beers = response;
        var result = "";
        for (var i = 0; i < beers.length; i++) {

            result += "<b>Name :</b>" + beers[i].name + "<br> <b>Tagline :</b>" + beers[i].tagline + "<br> <b>First Brewed :</b>" + beers[i].first_brewed + "<br> <b>Description :</b>" + beers[i].description + "<br>" + "<image src =" + beers[i].image_url + "/><hr>";
        }
        document.getElementById('result').innerHTML = result;
    });
};

var getBeerAPI = function getBeerAPI(name) {
    return fetch('https://api.punkapi.com/v2/beers/?beer_name=' + name).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Fail');
    }).then(function (response) {
        var beers = response;
        var result = "";
        console.log(beers);
        for (var i = 0; i < beers.length; i++) {

            result += "<b>Name :</b>" + beers[i].name + "<br> <b>Tagline :</b>" + beers[i].tagline + "<br> <b>First Brewed :</b>" + beers[i].first_brewed + "<br> <b>Description :</b>" + beers[i].description + "<br>" + "<image src =" + beers[i].image_url + "/><hr>";
        }
        document.getElementById('result').innerHTML = result;
    });
};

getBeersAPI();

var test = function test(name) {
    getBeerAPI(name);
};
