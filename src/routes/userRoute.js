import express from "express";
import * as userController from "../controllers/userController.js"
const router = express.Router();

router.get("/api/users/new", userController.getUser);
router.get("/api/companies/new", userController.getCompanies);
router.get("/api/user/company", userController.getCompanyUsernew);

export {router};