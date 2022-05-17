function doGETCall(getUrl, headers, getData) {     
        fetch(getUrl, {
            method: "GET",
            headers: headers
        })
            .then(res => res.json())
            .then(data => getData(data))
            .catch(error => console.error(error));   
}

function doPUTCall(postUrl, headers, body, putData) {
    fetch(postUrl, {
                method: 'PUT',
                headers: headers,
                body: body
            })
                .then(response => response.json())
                .then(data => putData(data))
                .catch(err => console.error(err))
}

function doDELETECall(deleteUrl, deleteData) {
    fetch(deleteUrl, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then((data) => deleteData(data))

}

export { doGETCall, doPUTCall, doDELETECall }