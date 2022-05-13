// http://restapi.adequateshop.com/api/Tourist
function popUpApi() {
    console.log("i am to popUpApi");
    fetch("http://restapi.adequateshop.com/api/Tourist", {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
        .then(res => {
            if (res.ok) {
                console.log("HTTP request successful");
            } else {
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
            `
        <div id=${"btn-" + r.id} class="btn">
            <div id=${"tourist-" + r.id} class="tourist__container">
                <img id=${"image-" + r.id} class="image" src=${r.tourist_profilepicture} alt="Tourist Image">
                <div class="details__container">
                    <p id=${"name-" + r.id}>${r.tourist_name}</p>
                    <p id=${"e-mail-" + r.id}>${r.tourist_email}</p>
                    <p id=${"location-" + r.id}>${r.tourist_location}</p>
                </div>
            </div>
            <button id=${"update-" + r.id} class="update__button">UPDATE</button>
            <button id=${"delete-" + r.id} class="delete__button">DELETE</button>
        </div>
        `

    }
    for (let r of data.data) {
        document.getElementById(`${"tourist-" + r.id}`).onclick = () => {

            document.getElementById("tourist_popup").innerHTML = `
            
        <div class="tourist__popup model-content">
        <span id="close">X</span>
            <div>
                <img class="image" src=${r.tourist_profilepicture} alt="Tourist Image">
                
            </div>             
            <div class="details__container">            
                <p id="name">${r.tourist_name}</p>
                <p id="e-mail">${r.tourist_email}</p>
                <p id="location">${r.tourist_location}</p>
            </div>      
                                
        </div>
        `
            document.getElementById("tourist_popup").style.display = "flex";

            document.getElementById("close").onclick = function () {
                document.getElementById("tourist_popup").style.display = "none";
            }

            console.log(document.getElementById(`${"tourist-" + r.id}`));
        }

    }
    // For Delete
    for (let r of data.data) {
        document.getElementById(`${"delete-" + r.id}`).onclick = () => {
            fetch("http://restapi.adequateshop.com/api/Tourist/" + r.id, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then((data) => {
                    console.log(data);
                    document.getElementById("tourist").innerHTML = ``;
                    document.getElementById("tourist").innerHTML +=
                        `
                    <div id=${"btn-" + r.id} class="btn">
                        <div id=${"tourist-" + r.id} class="tourist__container">
                            <img class="image" src=${r.tourist_profilepicture} alt="Tourist Image">
                            <div class="details__container">
                                <p id="name">${r.tourist_name}</p>
                                <p id="e-mail">${r.tourist_email}</p>
                                <p id="location">${r.tourist_location}</p>
                            </div>
                        </div>
                        <button class="update__button">DELETED</button>
                        <button id=${"close-" + r.id} class="delete__button">CLOSE</button>
                    </div>
                    `
                    document.getElementById(`${"close-" + r.id}`).onclick = eve => {
                        document.getElementById("tourist").innerHTML = ``;
                        popUpApi();

                    }
                })
            console.log("delete finished");
        }
    }
    // for update
    for (let r of data.data) {
        document.getElementById(`${"update-" + r.id}`).onclick = () => {
            document.getElementById("pop_up_form").style.display = "block";
                document.getElementById("pop_up_form").innerHTML=
            `<div class="popUp">
            <form id="updateForm" action="" onsubmit="closeForm(); return false">
                <input id="id" name="id" type="text" value=${r.id}><br>
                <input id="name" name="name" value=${r.tourist_name} ><br>
                <input id="eMail" name="eMail" value=${r.tourist_email}><br>
                <input id="location" name="location" value=${r.tourist_location}><br>
                <button type="submit">submit</button>
            </form>
        </div>`
                const updateTourist = {
                    "id": `${r.id}`,
                    "tourist_name": document.getElementById("name").value,
                    "tourist_email": document.getElementById("eMail").value,
                    "tourist_location": document.getElementById("location").value              
                }
                fetch("http://restapi.adequateshop.com/api/Tourist/" + r.id, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(updateTourist)
            })
                .then(response => response.json())
                .then(data => {console.log(data);
                    document.getElementById("tourist").innerHTML +=
                        `
                    <div id=${"btn-" + r.id} class="btn">
                        <div id=${"tourist-" + r.id} class="tourist__container">
                            <img class="image" src=${r.tourist_profilepicture} alt="Tourist Image">
                            <div class="details__container">
                                <p id="name">${r.tourist_name}</p>
                                <p id="e-mail">${r.tourist_email}</p>
                                <p id="location">${r.tourist_location}</p>
                            </div>
                        </div>
                        <button class="update__button">DELETED</button>
                        <button id=${"close-" + r.id} class="delete__button">CLOSE</button>
                    </div>
                    `     
                })
                .catch(err => console.error(err))

            
        }

    }
}
export { popUpApi }