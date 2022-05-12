import { popUpApi } from "./apihelper.js"
//import { deleteApi } from "./delete.js";
import { postApi } from "./postApi.js";

const container = document.getElementById("container");
const tourist = document.getElementById("tourist");
const popUpForm = document.querySelector(".popUp");
const touristList = document.querySelectorAll(".tourist__container")
const update = document.getElementById("update__button");
const delete_btn = document.getElementById("delete__button");
popUpForm.style.display = "none";
popUpApi();

// delete_btn.onclick = function() {


// }
// function deleteApi() {
//     fetch("http://restapi.adequateshop.com/api/Tourist/118905", {
//         method: "DELETE"
//     })
//     .then(res => res.json())
//     .then((data) => console.log(data))
//     console.log("delete finished")
// }
// deleteApi();
// function updateApi() {

// }


