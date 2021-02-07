require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();


app.use(express.json());
app.use(cors());

app.post('/getProfile', (req, res) => {
    let playerTag = req.body.playerTag;

    playerTag = playerTag.replace('#', '%23');
    
    fetch(`https://api.clashofclans.com/v1/players/${playerTag}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
            Accept: "application/json"
        }
    }).then(response => response.json())
      .then(data => {
            
      })
    
})

app.listen(process.env.PORT, () => {
    console.log(`Basic starter app listening at http://localhost:${process.env.PORT}`)
});
