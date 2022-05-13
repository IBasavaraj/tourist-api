
// doGETCall("url", headers, data)

// doPOSTCall(postUrl, headers, body, data)
function doGETCall(getUrl, headers, getData) {     
        fetch(getUrl, {
            method: "GET",
            headers: headers
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
            .then(data => getData)
            .catch(error => console.error(error));   
}
export { doGETCall }