import { doPUTCall } from './utility.js'
function getParameters() {
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);
    let tourist_id = params.get("user_id");
    let tourist_name = params.get("tourist_name");
    let tourist_email = params.get("tourist_email");
    let tourist_location = params.get("tourist_location");
    console.log(tourist_id);
    document.getElementById("tourist_name").value = tourist_name;
    document.getElementById("tourist_email").value = tourist_email;
    document.getElementById("tourist_location").value = tourist_location;
    document.getElementById("tourist_submit").onclick = () => {
        console.log("i entered update");
        const updateTourist = {
            "tourist_name": document.getElementById("tourist_name").value,
            "tourist_email": document.getElementById("tourist_email").value,
            "tourist_location": document.getElementById("tourist_location").value
        }
        console.log(JSON.stringify(updateTourist));
        console.log(tourist_id);
        const putUrl = `http://restapi.adequateshop.com/api/Tourist/${tourist_id}`;
        const body = JSON.stringify(updateTourist);
        const putData = (data) => {
            console.log(data);
            // document.location.assign("home.html");
        }
        console.log("function call started");
        doPUTCall(postUrl, headers, body, putData);
        console.log("function call finished");

        // function doPUTCall(postUrl, headers, body, putData) {
        // fetch(`http://restapi.adequateshop.com/api/Tourist/${tourist_id}`, {
        //     method: 'PUT',
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify(updateTourist)
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //     // document.location.assign("home.html");
        //     })
        //     .catch(err => console.error(err))
        // }

    }
}