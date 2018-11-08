const tables = require('./../data/tables.js');

module.exports = (app) => {
    // Displays all characters
    app.get("/api/tables", function(req, res) {
        return res.json(tables);
    });
    
    // Displays a single character, or returns false
    app.get("/api/tables/:table", (req, res) => {
        const chosen = req.params.table;
    
        console.log(chosen);
    
        for (let i = 0; i < tables.length; i++) {
        if (chosen === tables[i].routeName) {
            return res.json(tables[i]);
        }
        }
    
        return res.json(false);
    });
    
    // Create Tables - takes in JSON input
    app.post("/api/tables",(req, res) => {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
       const newTable = req.body;
    
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
    
        console.log(newTable);
    
        characters.push(newTable);
    
        res.json(newTable);
    });
};