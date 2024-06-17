import { Request, Response} from "express";
import axios from "axios";
import { API_URL } from "../config";

export class optionsController{

    async view(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const response = await axios.get(`${API_URL}/api/pokemon/find/${id}`);
        let data = response.data;
        if (!Array.isArray(data)) {
            data = [data];
        }
        res.render('Options/view', { data });
    }

    async edit(req: Request, res: Response): Promise<void> {
        res.render('Options/Edit');
    }

    async delete(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        await axios.delete(`${API_URL}/api/pokemon/delete/${id}`);
        res.redirect('/');
    }

    async create(req: Request, res: Response): Promise<void> {
        res.render('Options/Create');
    }


}