import express from 'express'

//import function from models.js
import { getRangeSpending, getAllSpending } from "./models.js";
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//get all spending data
app.get('/spending', async (req, res) => {
    const spendings = await getAllSpending()
   return res.json(spendings)

})

//get spending data filtered by date range
app.get('/spending/:start/:end', async (req, res) => {
    const start=req.params.start
    const end = req.params.end;
    const spendings = await getRangeSpending(start,end);
    res.json(spendings)

})

//PORT
app.listen(5000, () => {
   console.log('Server is running on port 5000')
})