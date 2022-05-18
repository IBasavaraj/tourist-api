function getDate(fullUrl) {
    let url = new URL(fullUrl);
    let params = new URLSearchParams(url.search);
    const date = new Date(params.get("createdat"));
    return  date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
}
export { getDate }
