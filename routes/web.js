var express = require("express");
var homeController = require("../controllers/home.controller");
var webhookController = require("../controllers/webhook.controller");

let router = express.Router();

let initWebRoutes = (app)=> {
    router.get("/", homeController.getHome);
    router.get("/webhook", webhookController.getWebhook);
    router.post("/webhook", webhookController.postWebhook);

    return app.use("/", router);
};

module.exports = initWebRoutes;