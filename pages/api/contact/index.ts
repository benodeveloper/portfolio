import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const data = req.body.data;
    
    console.log(data);
    

    res.json('verified');
}   