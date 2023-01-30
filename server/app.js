const express = require('express');
const app = express();

app.get('/location/:cid', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.send({ "msg": req.params.cid })
})
app.listen(8080, () => {
    console.log('listening on port 8080');
})
