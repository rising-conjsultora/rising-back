const express = require("express");
const multiparty = require("connect-multiparty");
const PostController = require("../controllers/convocatoria");
const md_auth = require("../middlewares/authenticated");

const md_upload = multiparty({ uploadDir: "./uploads/blog" });
const api = express.Router();

api.post("/convocatoria", [md_auth.asureAuth, md_upload], PostController.createConvocatoria);
api.get("/convocatoria", PostController.getConvocatorias);
api.patch("/convocatoria/:id",[md_auth.asureAuth, md_upload],PostController.updateConvocatoria);
api.delete("/convocatoria/:id", [md_auth.asureAuth], PostController.deleteConvocatoria);
api.get("/convocatoria/:path", PostController.getConvocatoria);

module.exports = api;
