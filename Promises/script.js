function getItemsReturnPromise(resource) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange', function() {
            if (this.readyState == 4 && this.status == 200) {
                let data = JSON.parse(this.responseText);
                resolve(data);
            }
            else if (this.readyState == 4) {
                reject("Could not fetch data!");
            }
        });
        request.open('GET', resource);
        request.send();
    });
}