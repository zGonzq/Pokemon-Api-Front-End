import { Request, Response} from "express";
import axios from "axios";
import { API_URL } from "../config";

export class optionsController{

    async view(req: Request, res: Response): Promise<void> {
        try {     
            const id = req.params.id;
            const response = await axios.get(`${API_URL}/api/pokemon/find/${id}`);
            let data = response.data;
            if (!Array.isArray(data)) {
                data = [data];
            }
            res.render('Actions/view', { data });
        }
        catch (error) {
            res.redirect('/');
        }
    }

    async edit(req: Request, res: Response): Promise<void> {
        try{
            const id = req.params.id;
            const response = await axios.get(`${API_URL}/api/pokemon/find/${id}`);
            let data = response.data;
            if (!Array.isArray(data)) {
                data = [data];
            }
            res.render('Actions/edit', { data });
        } catch (error) {
            res.redirect('/');
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;
            const response = await axios.get(`${API_URL}/api/pokemon/find/${id}`);
            let data = response.data;
            if (!Array.isArray(data)) {
                data = [data];
            }
            res.render('Actions/delete', { data });
        } catch (error) {

        }

    }

    async create(req: Request, res: Response): Promise<void> {
        res.render('Actions/Create');
    }
}