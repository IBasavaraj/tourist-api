function postApi() {
    fetch("http://restapi.adequateshop.com/api/Tourist", {
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify({ 
            $id: document.getElementById("serialNumber").addEventListener("change", (e) => e.value),
            id: document.getElementById("id").addEventListener("change", (e) => e.value),
            tourist_name: document.getElementById("serialNumber").addEventListener("change", (e) => e.value),
            tourist_email: document.getElementById("serialNumber").addEventListener("change", (e) => e.value),
            tourist_profilepicture: document.getElementById("serialNumber").addEventListener("change", (e) => e.value),
            tourist_location: document.getElementById("serialNumber").addEventListener("change", (e) => e.value),
         })
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
    let tourist = ``; 
    for (let r of data.data) {
        tourist += 
        `<div class="tourist__container">
            <img class="image" src=${r.tourist_profilepicture} alt="Tourist Image">
            <div class="details__container">
                <p id="name">${r.tourist_name}</p>
                <p id="e-mail">${r.tourist_email}</p>
                <p id="location">${r.tourist_location}</p>
            </div>   
        </div>`     
    }
    document.getElementById("tourist").innerHTML = tourist;

}

export {postApi};