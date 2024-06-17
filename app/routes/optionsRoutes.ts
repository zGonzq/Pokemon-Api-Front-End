import { Router } from "express";

import { optionsController } from "../controller/optionsController";

const router = Router();
const controller = new optionsController();

router.get('/view/:id', controller.view);
router.get('/edit/:id', controller.edit);
router.get('/delete/:id', controller.delete);
router.get('/create', controller.create);

export default router;