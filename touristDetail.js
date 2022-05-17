function getParameters() {
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);
    tourist_id =  params.get("user_id");
    let tourist_name =  params.get("tourist_name");
    let tourist_email = params.get("tourist_email");
    let tourist_location = params.get("tourist_location");
    const date = new Date(params.get("createdat"));
        let created_at = date.getDate() +"/"+date.getMonth() +"/"+date.getFullYear();
    document.getElementById("tourist_name").innerHTML = "Name: "+ tourist_name;
    document.getElementById("tourist_email").innerHTML = "E-mail: "+ tourist_email;
    document.getElementById("tourist_location").innerHTML = "Location: "+ tourist_location;
    document.getElementById("created_at").innerHTML = "Created At: "+ created_at;
}
document.getElementById("tourist__close").onclick = () => window.location.assign("home.html");
