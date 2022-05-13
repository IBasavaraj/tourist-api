import { doGETCall } from "./utility.js"
const getUrl = "http://restapi.adequateshop.com/api/Tourist";
const tourist = document.getElementById("tourist");
const tourist_popup = document.getElementById("tourist_popup");

const headers = { "content-type": "application/json" };
function popUpApi() {
    const getData = (e) => {show(data)}
    const doGETcalldata = doGETCall(getUrl, headers, getData);
    console.log(doGETcalldata);
    // fetch("http://restapi.adequateshop.com/api/Tourist", {
    //     method: "GET",
    //     headers: {
    //         "content-type": "application/json"
    //     }
    // })
    //     .then(res => {
    //         if (res.ok) {
    //             console.log("HTTP request successful");
    //         } else {
    //             console.log("HTTP request unsuccessful");
    //         }
    //         return res;
    //     })
    //     .then(res => res.json())
    //     .then(data => {show(data)})
    //     .catch(error => console.error(error));
}
function show(data) {
    console.log("control is in show data");
    for (let r of data.data) {
        tourist.innerHTML +=
            `
        <div id=btn-${r.id} class="btn">
            <div id=tourist-${r.id} class="tourist__container">
                <img  id=image-${r.id} class="image" src=${r.tourist_profilepicture} alt="Tourist Image">
                <div class="details__container">
                    <p>${r.tourist_name}</p>
                    <p>${r.tourist_email}</p>
                    <p>${r.tourist_location}</p>
                </div>
            </div>
            <button id=update-${r.id} class="update__button">UPDATE</button>
            <button id=delete-${r.id} class="delete__button">DELETE</button>
        </div>
        `
    }
    for (let r of data.data) {
        document.getElementById(`tourist-${r.id}`).onclick = () => {
            tourist_popup.innerHTML = `           
        <div class="tourist__popup model-content">
        <span id="close">X</span>
            <div>
                <img class="image" src=${r.tourist_profilepicture} alt="Tourist Image">         
            </div>             
            <div class="details__container">            
                <p>${r.tourist_name}</p>
                <p>${r.tourist_email}</p>
                <p>${r.tourist_location}</p>
            </div>                                      
        </div>
        `
            console.log("control is in popup");
            tourist_popup.style.display = "flex";
            document.getElementById("close").onclick = () => tourist_popup.style.display = "none";
        }

    }
    for (let r of data.data) {
        document.getElementById(`delete-${r.id}`).onclick = () => {
            fetch(`http://restapi.adequateshop.com/api/Tourist/${r.id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then((data) => {
                    tourist.innerHTML =
                        `
                    <div id=btn-${r.id} class="btn">
                        <div id=tourist-${r.id} class="tourist__container">
                            <img class="image" src=${r.tourist_profilepicture} alt="Tourist Image">
                            <div class="details__container">
                                <p>${r.tourist_name}</p>
                                <p>${r.tourist_email}</p>
                                <p>${r.tourist_location}</p>
                            </div>
                        </div>
                        <button class="update__button">DELETED</button>
                        <button id=close-${r.id} class="delete__button">CLOSE</button>
                    </div>
                    `
                    console.log("control is in delete");
                    document.getElementById(`close-${r.id}`).onclick = () => {
                        tourist.innerHTML = ``;
                        document.location.reload();
                    }
                })
            console.log("delete finished");
        }
    }
    // for update
    for (let r of data.data) {
        document.getElementById(`update-${r.id}`).onclick = () => {
            const updateTourist = {
                "id": `${r.id}`,
                "tourist_name": "Update",
                "tourist_email": "mike123@gmail.com",
                "tourist_location": "Paris"
            }
            fetch(`http://restapi.adequateshop.com/api/Tourist/${r.id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(updateTourist)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    document.location.reload();
                })
                .catch(err => console.error(err))
        }
        console.log("console is in update");

    }
}
export { popUpApi }

