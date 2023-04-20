// import { Router } from "express";
const { Router } = require("express");
// import { getTodos } from "../controllers/user";
const { getUser, getAllUsers } = require("../controllers/user");

const router = Router();

router.get("/user", getUser);

router.get("/users", getAllUsers);

module.exports = router;
