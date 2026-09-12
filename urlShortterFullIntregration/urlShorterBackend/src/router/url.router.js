import {Router} from 'express'
import { findAllUrl, urlControllers } from '../controllers/url.Controlers.js'

const router=Router()

router.post("/create",urlControllers)
router.get("/find",findAllUrl)

export default router;