// import { doGETCall, doDELETECall } from "./utility.js"
// const tourist = document.getElementById("tourist");
// const headers = { "content-type": "application/json" };
// function popUpApi() {
//     const getUrl = "http://restapi.adequateshop.com/api/Tourist";
//     const getData = (data) => { show(data) }
//     doGETCall(getUrl, headers, getData);
// }
// function show(data) {
//     console.log(data);
//     for (let touristItem of data.data) {
//         tourist.innerHTML +=`         
//             <div id=tourist-${touristItem.id} class="tourist__container" >
//             <div class="delete__container">
//             <span class="delete__close close" id=delete-${touristItem.id} >X</span>
//             </div>
//             <div class="tourist__flex">
//                 <div class="details__container">
//                     <p>Name: ${touristItem.tourist_name}</p>
//                     <p>E-mail: ${touristItem.tourist_email}</p>
//                     <p>Location: ${touristItem.tourist_location}</p>
//                 </div>                
//                 <p>${touristItem.createdat}</p>               
//             </div>
//             <div class="tourist__btn">
//             <button id=update-${touristItem.id} class="update__button">UPDATE</button>
//             </div>                   
//             </div>`
           
//     }  
//     for (let touristItem of data.data) {
//         document.getElementById(`tourist-${touristItem.id}`).onclick = () => {
//             document.location.assign(`touristDetail.html?user_id=${touristItem.id}&tourist_name=${touristItem.tourist_name}&tourist_email=${touristItem.tourist_email}&tourist_location=${touristItem.tourist_location}&createdat=${touristItem.createdat}`);
//         }
//         document.getElementById(`delete-${touristItem.id}`).onclick = (e) => {
//             e.stopPropagation();
//             const deleteUrl = `http://restapi.adequateshop.com/api/Tourist/${touristItem.id}`;
//             const deleteData = (data) => document.location.reload();
//             doDELETECall(deleteUrl, deleteData);
            
//         }
//         document.getElementById(`update-${touristItem.id}`).onclick = (e) => {
//             e.stopPropagation();
//             const url = `update.html?user_id=${touristItem.id}&tourist_name=${touristItem.tourist_name}&tourist_email=${touristItem.tourist_email}&tourist_location=${touristItem.tourist_location}&createdat=${touristItem.createdat}`;
//             window.location.href = url;
//         }
//     }
    
// }
// export { popUpApi }

