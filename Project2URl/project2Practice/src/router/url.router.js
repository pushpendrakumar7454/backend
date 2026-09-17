import {Router} from 'express'
import { createUrlControllers,findAllUrlConterollers,deleteControllers } from '../controllers/url.controllers.js'

const router=Router()

router.post("/url",createUrlControllers)
router.get("/find",findAllUrlConterollers)
router.delete("/delete/:id",deleteControllers)
export default router