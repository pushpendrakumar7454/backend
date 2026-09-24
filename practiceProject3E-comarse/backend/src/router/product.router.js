import {json, Router} from 'express'
import { authenticate } from '../middleware/user.middleware.js';
import { createProductControler } from '../controllers/product.controller.js';
import { createProductValidator } from '../validator/product.validator.js';


const router=Router()






export default router;