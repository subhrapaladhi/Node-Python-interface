import * as childProcess from "child_process";
import { Request, Response } from "express";

export const compute = (req: Request, res: Response) => {
    let data: number[] = req.body.data;
    
    let py =  childProcess.spawn('python3',['./pyScripts/compute.py']);
    let datastring = '';

     py.stdin.write(JSON.stringify(data));

     py.stdin.end();

     py.stdout.on("data", (data) => {
        datastring += data.toString();
    });

     py.stdout.on("end", () => {
        return res.json({
            success: 1,
            data: datastring.slice(0,-1)
        });
    });

    py.stdout.on('error', (err) => {
        py.kill();
        return res.json({
            success: 0,
            message: err.message
        });
    });
}