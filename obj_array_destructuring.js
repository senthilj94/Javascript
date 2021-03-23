const user = {
    name: 'senthil',
    age: 26
};
const {name, age} = user; //object destructuring
console.log(name);
console.log(age);

const user1 = ['senthil', 26];
const [name1, age1] = user1; //array destructuring
console.log(name1);
console.log(age1);

function fetchRepos(language, minStars, maxStars) {}
fetchRepos('JS', 10, null);
fetchRepos({language:'JS', maxStars:null, minStars:10}); //order not matter

function fetchRepos({language, minStars, maxStars=100}) {}
fetchRepos({language:'JS', minStars:10}); //order not matter

//Before Array destructing
function getUserData(player) {
    return Promise.all([
        getProfile(player),
        getRepos(player)
    ]).then(function(data) {
        var profile = data[0];
        var repos = date[1];
        return{
            profile: profile,
            repos: repos
        }
    })
}

//Possibility 1
function getUserData(player) {
    return Promise.all([
        getProfile(player),
        getRepos(player)
    ]).then(function(data) {
        var [profile, repos] = data;
        return{
            profile: profile,
            repos: repos
        }
    })
}

//Possibility 2
function getUserData(player) {
    return Promise.all([
        getProfile(player),
        getRepos(player)
    ]).then(function([profile, repos]) {
        return{
            profile: profile,
            repos: repos
        }
    })
}

//Possibility 3
function getUserData(player) {
    return Promise.all([
        getProfile(player),
        getRepos(player)
    ]).then(([profile, repos]) => ({profile, repos}));
}
