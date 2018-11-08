const tables = require('./../data/tables.js');
const waitingList = require('./../data/waitingList.js');

module.exports = (app) => {
    // Displays all characters
    app.get("/api/tables", (req, res) => {
        return res.json(tables);
    });
    
    app.get("/api/waitingList", (req, res) => {
        return res.json(waitingList);
    });
    // // Displays a single character, or returns false
    // app.get("/api/tables/:table", (req, res) => {
    //     const chosen = req.params.table;
    
    //     console.log(chosen);
    
    //     for (let i = 0; i < tables.length; i++) {
    //     if (chosen === tables[i].routeName) {
    //         return res.json(tables[i]);
    //     }
    //     }
    
    //     return res.json(false);
    // });
    
    // Create Tables - takes in JSON input
    app.post("/api/tables",(req, res) => {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
       const newTable = req.body;
    
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
    
        console.log(newTable);
        if (tables.length < 5) {
            tables.push(newTable);
            alert("Table Added!");
        } else if (tables.length >=5) {
            waitingList.push(newTable);
            alert("Sorry, you were put on the wait list!");
        }
    
        res.json(newTable);
    });
};