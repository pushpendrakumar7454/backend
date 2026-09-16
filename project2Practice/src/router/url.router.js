import {Router} from 'express'
import { createUrlControllers,findAllUrlConterollers } from '../controllers/url.controllers.js'

const router=Router()

router.post("/url",createUrlControllers)
router.get("/find",findAllUrlConterollers)
export default router