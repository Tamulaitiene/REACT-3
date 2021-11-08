const express = require('express')
const app = express()
const port = 3003
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({
extended: true
}))
app.use(express.json());

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jewelry",
    password: ""
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  app.get('/', (req, res) => {
    res.send('labas!')
  })
  
  app.get('/labas/:id', (req, res) => {
    res.send(`labas tau ${req.params.id} `)
  })
  
  app.get('/test', (req, res) => {
    res.send(JSON.stringify({ test: 'OK' }))
  })
  

 // Visi
    app.get('/gems', (req,res) => {
        const sql = `
        SELECT *
        FROM gems
    `;
    con.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

// Prideti 
// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);
    app.post('/gems', (req, res) => {
        const sql = `
            INSERT INTO gems
            (product, quantity, price, in_stock, last_order)
            VALUES (?, ?, ?, ?, ?)
        `;
    con.query(sql, [
        req.body.product,
        req.body.quantity,
        req.body.price,
        req.body.in_stock,
        req.body.last_order
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

// Redaguoja 
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
app.put('/gems/:id', (req, res) => {
    const sql = `
        UPDATE gems
        SET product = ?, quantity = ?, price = ?, in_stock = ?, last_order = ?
        WHERE id = ?
    `;
    con.query(sql, [
        req.body.product,
        req.body.quantity,
        req.body.price,
        req.body.in_stock,
        req.body.last_order,
        req.params.id
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

// Trina 
// DELETE FROM table_name
// WHERE some_column = some_value
app.delete('/gems/:id', (req, res) => {
    const sql = `
        DELETE FROM gems
        WHERE id = ?
        `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})

// Randa visus skirtingus tipus
// SELECT DISTINCT column1, column2, ...
// FROM table_name;
app.get('/gems-types', (req,res) => {
    const sql = `
        SELECT DISTINCT type
        FROM gems
    `;
    con.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

app.get('/gems-filter/:t', (req, res) => {
    const sql = `
        SELECT *
        FROM gems
        WHERE product = ?
    `;
    con.query(sql, [req.params.t], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})



  app.listen(port, () => {
    // console.log(`Example app listening at http://localhost:${port}`)
    })
    