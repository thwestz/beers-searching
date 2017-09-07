const getBeersAPI = () => fetch('https://api.punkapi.com/v2/beers')
    .then(response => response.json())
    .catch(e => console.err('Fail'))
    .then(response => {
        let beers = response;
        let result = "";
        for (let i = 0; i < beers.length; i++) {
            result += "<b>Name : </b>" + beers[i].name +
                "<br> <b>Tagline : </b>" + beers[i].tagline +
                "<br> <b>PH : </b>" + beers[i].ph +
                "<br> <b>Yeast : </b>" + beers[i].ingredients.yeast +
                "<br> <b>First Brewed : </b>" + beers[i].first_brewed +
                "<br> <b>Description : </b>" + beers[i].description +
                "<br>" + "<image src =" + beers[i].image_url + "/><hr>"
        }
        document.getElementById('result').innerHTML = result
    })

const getBeerAPIByName = (name) => fetch(`https://api.punkapi.com/v2/beers/?beer_name=${name}`)
    .then(response => response.json())
    .catch(e => console.err('Fail'))
    .then(response => {
        let beers = response;
        let result = "";
        for (let i = 0; i < beers.length; i++) {
            result += "<b>Name : </b>" + beers[i].name +
                "<br> <b>Tagline : </b>" + beers[i].tagline +
                "<br> <b>PH : </b>" + beers[i].ph +
                "<br> <b>Yeast : </b>" + beers[i].ingredients.yeast +
                "<br> <b>First Brewed : </b>" + beers[i].first_brewed +
                "<br> <b>Description : </b>" + beers[i].description +
                "<br>" + "<image src =" + beers[i].image_url + "/><hr>"
        }
        document.getElementById('result').innerHTML = result
    })

const getBeerAPIByYeast = (yeast) => fetch(`https://api.punkapi.com/v2/beers/?yeast=${yeast}`)
    .then(response => response.json())
    .catch(e => console.err('Fail'))
    .then(response => {
        let beers = response;
        let result = "";
        for (let i = 0; i < beers.length; i++) {
            result += "<b>Name : </b>" + beers[i].name +
                "<br> <b>Tagline : </b>" + beers[i].tagline +
                "<br> <b>PH : </b>" + beers[i].ph +
                "<br> <b>Yeast : </b>" + beers[i].ingredients.yeast +
                "<br> <b>First Brewed : </b>" + beers[i].first_brewed +
                "<br> <b>Description : </b>" + beers[i].description +
                "<br>" + "<image src =" + beers[i].image_url + "/><hr>"
        }
        document.getElementById('result').innerHTML = result
    })

const getBeerAPIByNameAndYeast = (name,yeast) => fetch(`https://api.punkapi.com/v2/beers/?beer_name=${name}&?yeast=${yeast}`)
    .then(response => response.json())
    .catch(e => console.err('Fail'))
    .then(response => {
        let beers = response;
        let result = "";
        for (let i = 0; i < beers.length; i++) {
            result += "<b>Name : </b>" + beers[i].name +
                "<br> <b>Tagline : </b>" + beers[i].tagline +
                "<br> <b>PH : </b>" + beers[i].ph +
                "<br> <b>Yeast : </b>" + beers[i].ingredients.yeast +
                "<br> <b>First Brewed : </b>" + beers[i].first_brewed +
                "<br> <b>Description : </b>" + beers[i].description +
                "<br>" + "<image src =" + beers[i].image_url + "/><hr>"
        }
        document.getElementById('result').innerHTML = result
    })

getBeersAPI()

const toSearch = (name, yeast) => {
    if (yeast != "" && name != "") {
        getBeerAPIByNameAndYeast(name,yeast)
    } else if (yeast != "") {
        getBeerAPIByYeast(yeast)
    } else if (name != "") {
        getBeerAPIByName(name)
    } else {
        let result = "No result";
        document.getElementById('result').innerHTML = result
    }
}