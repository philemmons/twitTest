// this is how we import the twit package
var Twit = require('twit'); 

//this is we import the config file which is a js file which contains the keys ans tokens
var config = require('./config');

//this is the object of twit which  will help us to call functions inside it
var T = new Twit(config); 

// this is the param variable which will have key and value,
//the key is the keyword which we are interested in searching 
//and count  is the count of it
var params = {
    q: 'akshay',
    count: 100
} 
//get is the function to search the tweet which three 
//paramaters 'search/tweets',params and a callback function.
T.get('search/tweets', params,searchedData);

// searchedData function is a callback function which returns 
//the data when we make a search
function searchedData(err, data, response) {
console.log(data);
} 