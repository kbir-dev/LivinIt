import {Router} from "express"
import {registerUser} from "../controllers/register.controller.js"
import {loginUser} from "../controllers/login.controller.js"

const router = Router();

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)

export default router;