const express = require("express");
const app = express();
const PORT = 3000;

app.get("/add", (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({
        operation: "addition",
        result: a + b
    });
});

app.get("/multiply", (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({
        operation: "multiplication",
        result: a * b
    });
});

app.listen(PORT, () => {
    console.log(`Calculator API running at http://localhost:${PORT}`);
});