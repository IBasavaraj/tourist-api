import { popUpApi } from "./apihelper.js"
import { updateApi } from "./update.js";
import { postApi } from "./postApi.js";

const container = document.getElementById("container");
const tourist = document.getElementById("tourist");
const popUpForm = document.querySelector(".popUp");
const touristList = document.querySelectorAll(".tourist__container")
const update = document.getElementById("update__button");
// const delete__btn = document.getElementById("delete__button");
popUpForm.style.display = "none";
getApi();
function getApi() {
    fetch("http://restapi.adequateshop.com/api/Tourist", {
        method: "GET",
        headers: {
            "content-type" : "application/json"
        }
    })
    .then(res => {
        if(res.ok) {
            console.log("HTTP request successful");
        }else {
            console.log("HTTP request unsuccessful"); 
        }  
        return res;
    })
    .then(res => res.json()) 
    .then(data => show(data))
    .catch(error => console.error(error));     
}

function show(data) {
    console.log(data);
    for (let r of data.data) {
        document.getElementById("tourist").innerHTML += 
        `<div id=${"tourist-"+r.id} class="tourist__container">
            <img class="image" src=${r.tourist_profilepicture} alt="Tourist Image">
            <div class="details__container">
                <p id="name">${r.tourist_name}</p>
                <p id="e-mail">${r.tourist_email}</p>
                <p id="location">${r.tourist_location}</p>
                
            </div>   
        </div>
        <button id="update__button">UPDATE</button>
        <button id="delete__button">DELETE</button>
        `
        console.log("getApi is done")
    }   
}

document.getElementsByClassName("tourist__container").addEventListener("click", () => {
    console.log("popUpApi");
    popUpApi();
});

update.addEventListener("click", () => {
    updateApi();
    console.log("update api");

});