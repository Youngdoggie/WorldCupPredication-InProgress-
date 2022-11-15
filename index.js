const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const teams = [
    {rank: 1, name: "Qatar"},
    {rank: 2, name: "Ecuador"},
    {rank: 3, name: "Senegal"},
    {rank: 4, name: "Netherlands"},
];

app.get("/teams", (req, res) =>{
    res.json(teams);
});

app.get("/teams/:rank", (req,res)=>{
    const team = teams.find(c => c.rank === parseInt(req.params.rank));
    res.send(team);
});

app.post('/teams',(req, res)=>{
    const team = {
        rank: teams.length + 1,
        name: req.body.name
    };
    teams.push(team);
    res.send(team);
});

app.put('/teams/:rank',(req, res)=>{
    const team = teams.find(c => c.rank === parseInt(req.params.rank));
    team.name = req.body.name;
    res.send(team);
});

app.delete('/teams/:rank', (req, res)=>{
    const team = teams.find(c => c.rank === parseInt(req.params.rank));
    const index = teams.indexOf(team);
    teams.splice(index,1);

    res.send(course);
})
app.listen(3000, () => console.log("API server is running..."));