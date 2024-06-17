import { Router } from "express";
import { indexController } from "../controller/indexController";

const router = Router();
const controller = new indexController();

router.get('/', controller.index);

export default router;