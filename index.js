// FETCH API - simple function that enables us to make requests for
// create a dynamic function that will be used to purely create element
// and add content to the elements
let createElementFunc = (element, content) => {
    console.log("Adding an element and its content")
let appendElementFunc = (element) => {
    console.log("add the element to the desired location")
}
}


let baseURL = "https://jsonplaceholder.typicode.com";
let postsEndpoint = "/posts";

// post url [baseurl + endpoint]
let url = `${baseURL}${postsEndpoint}`;
console.log(url);

fetch(url)
  .then((posts) => posts.json())
  .then((response) => {
    let posts = response

    for (post of posts){
        console.log(post.title);
    }
}
    // add a list of this posts to the html page
    // DOM MANIPULATION
const titleList = document.getElementById("parentlist");
function addTitles(posts){
    let listElement=document.getElementById("li")
    listElement.innerText=posts.title
    titleList.appendChild(listElement)
}
addTitles(posts)
