// import { doPUTCall } from "./utility.js";
let tourist_id = '';
function getParameters() {
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);
    tourist_id =  params.get("id");
    let tourist_name =  params.get("tourist_name");
    let tourist_email = params.get("tourist_email");
    let tourist_location = params.get("tourist_location");
    let createdat = params.get("createdat");
    document.getElementById("tourist_name").value = tourist_name;
    document.getElementById("tourist_email").value = tourist_email;
    document.getElementById("tourist_location").value = tourist_location;
}
function updateTourist() {

    console.log("i entered update");
    const updateTourist = {
        
        "tourist_name": document.getElementById("tourist_name").value,
        "tourist_email": document.getElementById("tourist_email").value,
        "tourist_location": document.getElementById("tourist_location").value,
        
    }
    const putUrl = `http://restapi.adequateshop.com/api/Tourist/${tourist_id}`;
    const body = JSON.stringify(updateTourist);
    const putData = (data) => {
        console.log(data);
        document.location.assign("home.html");
    }
    console.log("function call started");
    doPUTCall(putUrl, headers, body, putData);
    console.log("completed project");
}