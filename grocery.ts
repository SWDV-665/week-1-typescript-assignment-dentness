class Grocery {
    name: string;
    qty: number;
    price: number;
    cost: number;

    constructor(name: string, qty: number, price: number, cost: number) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.cost = cost;
    }
}

let inventory:  Grocery[] =  [
    new Grocery("Banana", 10, 0.85, 0.25),
    new Grocery("Apple", 5, 0.5, 0.25),
    new Grocery("Bread", 1, 3.99, 2.15)
];

let title = document.createElement("h1");
title.appendChild(document.createTextNode("Store Inventory"));
document.body.appendChild(title);

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
let headRow = document.createElement("tr");
["Name","Qty","Price", "Cost"].forEach(function(col) {
    let th=document.createElement("th");
    th.appendChild(document.createTextNode(col));
    headRow.appendChild(th);
});
thead.appendChild(headRow);
table.appendChild(thead);

inventory.forEach(function(row) {
    let tr = document.createElement("tr");
    for (let fld in row) {
        let td = document.createElement("td");
        td.classList.add(typeof row[fld]);
        td.appendChild(document.createTextNode(row[fld]));
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
});
table.appendChild(tbody);

document.body.appendChild(table);
