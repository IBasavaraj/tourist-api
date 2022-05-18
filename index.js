import { doGETCall, doDELETECall } from "./utility.js"
// import { getDate } from "./apihelper.js"
const tourist = document.getElementById("tourist");
const headers = { "content-type": "application/json" };
const getUrl = "http://restapi.adequateshop.com/api/Tourist";
const getData = (data) => { show(data) }
doGETCall(getUrl, headers, getData);
function show(data) {
    console.log(data);
    for (let touristItem of data.data) {
        tourist.innerHTML += `         
            <div id=tourist-${touristItem.id} class="tourist__container" >
            <div class="delete__container">
            <span class="delete__close close" id=delete-${touristItem.id} >X</span>
            </div>
            <div class="tourist__flex">
                <div class="details__container">
                    <p>Name: ${touristItem.tourist_name}</p>
                    <p>E-mail: ${touristItem.tourist_email}</p>
                    <p>Location: ${touristItem.tourist_location}</p>
                </div>                
                <p>${getDate(touristItem.createdat)}</p>               
            </div>
            <div class="tourist__btn">
            <button id=update-${touristItem.id} class="update__button">UPDATE</button>
            </div>                   
            </div>`;
    }
    for (let touristItem of data.data) {
        document.getElementById(`tourist-${touristItem.id}`).onclick = () => {
            document.location.assign(`touristDetail.html?user_id=${touristItem.id}&tourist_name=${touristItem.tourist_name}&tourist_email=${touristItem.tourist_email}&tourist_location=${touristItem.tourist_location}&createdat=${touristItem.createdat}`);
        }
        document.getElementById(`delete-${touristItem.id}`).onclick = (e) => {
            e.stopPropagation();
            const deleteUrl = `http://restapi.adequateshop.com/api/Tourist/${touristItem.id}`;
            const deleteData = (data) => document.location.reload();
            doDELETECall(deleteUrl, deleteData);
        }
        document.getElementById(`update-${touristItem.id}`).onclick = (e) => {
            e.stopPropagation();
            const url = `update.html?user_id=${touristItem.id}&tourist_name=${touristItem.tourist_name}&tourist_email=${touristItem.tourist_email}&tourist_location=${touristItem.tourist_location}&createdat=${touristItem.createdat}`;
            window.location.href = url;
        }
    }

}
// function getParameters() {
//     let url = new URL(window.location.href);
//     let params = new URLSearchParams(url.search);
//     let tourist_id = params.get("user_id");
//     let tourist_name = params.get("tourist_name");
//     let tourist_email = params.get("tourist_email");
//     let tourist_location = params.get("tourist_location");
//     console.log(tourist_id);
//     document.getElementById("tourist_name").value = tourist_name;
//     document.getElementById("tourist_email").value = tourist_email;
//     document.getElementById("tourist_location").value = tourist_location;
//     document.getElementById("tourist_submit").onclick = () => {
//         console.log("i entered update");
//         const updateTourist = {
//             "tourist_name": document.getElementById("tourist_name").value,
//             "tourist_email": document.getElementById("tourist_email").value,
//             "tourist_location": document.getElementById("tourist_location").value
//         }
//         console.log(JSON.stringify(updateTourist));
//         console.log(tourist_id);
//         const putUrl = `http://restapi.adequateshop.com/api/Tourist/${tourist_id}`;
//         const body = JSON.stringify(updateTourist);
//         const putData = (data) => {
//             console.log(data);
//             // document.location.assign("home.html");
//         }
//         console.log("function call started");
//         doPUTCall(postUrl, headers, body, putData);
//         console.log("function call finished");

//         // function doPUTCall(postUrl, headers, body, putData) {
//         // fetch(`http://restapi.adequateshop.com/api/Tourist/${tourist_id}`, {
//         //     method: 'PUT',
//         //     headers: { "content-type": "application/json" },
//         //     body: JSON.stringify(updateTourist)
//         // })
//         //     .then(response => response.json())
//         //     .then(data => {
//         //         console.log(data);
//         //     // document.location.assign("home.html");
//         //     })
//         //     .catch(err => console.error(err))
//         // }

//     }
// }