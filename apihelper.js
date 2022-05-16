import { doGETCall, doPUTCall, doDELETECall } from "./utility.js"
const tourist = document.getElementById("tourist");
const tourist_popup = document.getElementById("tourist_popup");
const headers = { "content-type": "application/json" };
function popUpApi() {
    const getUrl = "http://restapi.adequateshop.com/api/Tourist";
    const getData = (data) => { show(data) }
    doGETCall(getUrl, headers, getData);
}
function show(data) {
    console.log(data);
    for (let touristItem of data.data) {
        const date = Date.parse(touristItem.createdat);
        console.log(date);

        tourist.innerHTML +=`         
            <div id=tourist-${touristItem.id} class="tourist__container">
            <div class="delete__container">
            <span class="delete__close close" id=delete-${touristItem.id}>X</span>
            </div>
            <div class="tourist__flex">
                <div class="details__container">
                    <p>Name: ${touristItem.tourist_name}</p>
                    <p>E-mail: ${touristItem.tourist_email}</p>
                    <p>Location: ${touristItem.tourist_location}</p>
                </div>                
                <p>${touristItem.createdat}</p>               
            </div>
            <div class="tourist__btn">
            <button id=update-${touristItem.id} class="update__button">UPDATE</button>
            </div>                   
            </div>                
        `
    }  
    for (let touristItem of data.data) {
        document.getElementById(`tourist-${touristItem.id}`).onclick = () => {
            document.location.assign("touristDetail.html");
        //     console.log("popup");
        //     tourist_popup.innerHTML = `           
        // <div class="tourist__popup model-content">
        // <span class="delete__span" id="close">X</span>
        //     <div>
        //         <img class="image" src=${touristItem.tourist_profilepicture} alt="Tourist Image">         
        //     </div>             
        //     <div class="details__container">            
        //         <p>${touristItem.tourist_name}</p>
        //         <p>${touristItem.tourist_email}</p>
        //         <p>${touristItem.tourist_location}</p>
        //     </div>                                      
        // </div>
        // `
        //     tourist_popup.style.display = "flex";
        //     document.getElementById("close").onclick = () => tourist_popup.style.display = "none";
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
            // const updateTourist = {
            //     "id": `${touristItem.id}`,
            //     "tourist_name": "Update",
            //     "tourist_email": "mike123@gmail.com",
            //     "tourist_location": "Paris"
            // }
            // const putUrl = `http://restapi.adequateshop.com/api/Tourist/${touristItem.id}`;
            // const body = JSON.stringify(updateTourist);
            // const putData = (data) => {
            //     console.log(data);
            //     document.location.reload();
            // }
            // doPUTCall(putUrl, headers, body, putData);
        }
    }
    
}
export { popUpApi }

