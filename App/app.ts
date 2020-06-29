import express from "express";
const app: express.Application = express();

app.use(express.json())

import {compute} from "./Services/compute.js";
import * as childProcess from "child_process";
/*
@ Data received example: { data: [1,2,3,4] }
*/
app.post('/', compute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running at port ${PORT}`));