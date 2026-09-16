import {Router} from 'express'
import { findAllUrl, urlControllers,deleteUrlControllers } from '../controllers/url.Controlers.js'

const router=Router()

router.post("/create",urlControllers)
router.get("/find",findAllUrl)
router.delete("/:id",deleteUrlControllers)

export default router;