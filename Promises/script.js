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

let output = () => {
    getItemsReturnPromise("./fruits.json")
    .then(data => {
        data.forEach(item => {
            console.log(item.name);
        });
        return getItemsReturnPromise("./vegetables.json");
    })
    .then(data => {
        data.forEach(item => {
            console.log(item.name);
        });
    })
    .catch(err => {
        console.log(err);
    });
}
// output();

let outputDOM = () => {
    getItemsReturnPromise("./fruits.json")
    .then(data => {
        let h3 = document.createElement('h3');
        h3.textContent = "Fruits";
        document.body.appendChild(h3);
        let listFruits = document.createElement('ul');
        data.forEach(item => {
            let li = document.createElement('li');
            li.textContent = item.name;
            listFruits.appendChild(li);
        });
        document.body.appendChild(listFruits);
        return getItemsReturnPromise("./vegetables.json");
    })
    .then(data => {
        let h3 = document.createElement('h3');
        h3.textContent = "Vegetables";
        document.body.appendChild(h3);
        let listVegetables = document.createElement('ul');
        data.forEach(item => {
            let li = document.createElement('li');
            li.textContent = item.name;
            listVegetables.appendChild(li);
        });
        document.body.appendChild(listVegetables);
    })
    .catch(err => {
        console.log(err);
    });
}
// outputDOM();

async function outputAsync() {
    let data1 = await getItemsReturnPromise("./fruits.json");
    let h3 = document.createElement('h3');
    h3.textContent = "Fruits";
    document.body.appendChild(h3);
    let listFruits = document.createElement('ul');
    let massFruits = 0;
    data1.forEach(item => {
        massFruits += item.number;
        let li = document.createElement('li');
        li.textContent = item.name;
        listFruits.appendChild(li);
    });
    let pFruits = document.createElement('p');
    pFruits.textContent = `Fruit mass: ${massFruits}`;
    document.body.appendChild(listFruits);
    document.body.appendChild(pFruits);

    let data2 = await getItemsReturnPromise("./vegetables.json");
    h3 = document.createElement('h3');
    h3.textContent = "Vegetables";
    document.body.appendChild(h3);
    let listVegetables = document.createElement('ul');
    let massVegetables = 0;
    data2.forEach(item => {
        massVegetables += item.number;
        let li = document.createElement('li');
        li.textContent = item.name;
        listVegetables.appendChild(li);
    });
    let pVegetables = document.createElement('p');
    pVegetables.textContent = `Vegetable mass: ${massVegetables}`;
    document.body.appendChild(listVegetables);
    document.body.appendChild(pVegetables);

    return massFruits + massVegetables;
}

outputAsync()
.then(mass => {
    let pMass = document.createElement('p');
    pMass.textContent = `Sum mass: ${mass}`;
    document.body.appendChild(pMass); 
    console.log("Success");
})
.catch(err => {
    console.log(err);
});