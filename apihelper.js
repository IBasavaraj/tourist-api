
// http://restapi.adequateshop.com/api/Tourist

function popUpApi() {
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
        console.log("Entered for")
        document.getElementById("tourist").innerHTML += 
        `<div id=${"tourist-"+r.id} class="tourist__container">
            <img class="image" src=${r.tourist_profilepicture} alt="Tourist Image">
            <div class="details__container">
                <p id="name">${r.tourist_name}</p>
                <p id="e-mail">${r.tourist_email}</p>
                <p id="location">${r.tourist_location}</p>
                <button id="update__button">UPDATE</button>
            <button id="delete__button">DELETE</button>
            </div>   
        </div>`
    }   
    console.log("for loop ended");
    for (let r of data.data) {
        document.getElementById(`${"tourist-"+r.id}`).onclick = eve => {
            details(r);
        console.log(document.getElementById(`${"tourist-"+r.id}`));
     }   
  }
}

function details(tourist){
    console.log("CALLED ", tourist);
    document.getElementById("tourist").style.display = "none";
    console.log(document.getElementById("tourist"));
    // details = document.getElementById("details");
    document.getElementById("tourist").innerHTML = `
    <div class="tourist__container">
          <img class="image" src=${tourist.tourist_profilepicture} alt="Tourist Image">
                <div class="details__container">            
                    <p id="name">${tourist.tourist_name}</p>
                    <p id="e-mail">${tourist.tourist_email}</p>
                    <p id="location">${tourist.tourist_location}</p>
                    
                </div>   
                <span class="close">&times;</span>
            </div>
    `
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        document.getElementById("tourist").style.display = "block";
        
      }

}
export {popUpApi}