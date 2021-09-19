//Randomly generate a fake allTables JSON file 
//process allTables json file into Mongo Table objects 

const fs = require("fs");

const numTables = Math.floor(Math.random() * 10) + 10 //10-20 random data 
let fakeTables = []
for (i = 1; i < numTables; i++) {
    const capacity = Math.floor(Math.random() * 6) + 2
    const name = `Table ${i}`
    fakeTables.push(
        {
            name: name,
            capacity: capacity,
            isAvailable: true
        }
    )
}

let data = JSON.stringify({
    tables: fakeTables
})

fs.writeFileSync(__dirname + "/allTables.json", data);