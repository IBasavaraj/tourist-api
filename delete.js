function deleteApi() {
    fetch("http://restapi.adequateshop.com/api/Tourist/117780", {
        method: "DELETE"
    })
    .then(res => res.json())
    .then((data) => console.log(data))
}
export {deleteApi}