import { Request, Response } from "express";
import axios from "axios";
import { API_URL } from "../config";

export class indexController{

    async index(req: Request, res: Response): Promise<void> {
        try {
            const response = await axios.get(`${API_URL}/api/pokemon/list`);
            const data = response.data;
            res.render('Home/index', { data });
        } catch (error) {
            console.log(`Error: ${error}`);
        }

    }
}
