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
    let tourist = ``; 
    for (let r of data) {
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
