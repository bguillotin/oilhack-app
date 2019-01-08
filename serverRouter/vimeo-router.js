const express = require("express");
const vimeoRouter = express.Router();
const Vimeo = require("vimeo").Vimeo;
const { parse } = require("url");
// Load environment variables from .env
require("dotenv").load();
// VIMEO
const { VIMEO_ID, VIMEO_SECRET, VIMEO_TOKEN } = process.env;
const clientV = new Vimeo(VIMEO_ID, VIMEO_SECRET, VIMEO_TOKEN);
// Vimeo pagination information.
const maxPerPage = 10;
let pageIndex = 1;
const fieldsToRequest =
  "uri,name,description,duration,created_time,modified_time";

// Middleware that is specific to this router
vimeoRouter.use(function timeLog(req, res, next) {
  console.log("Time request Vimeo: ", Date.now());
  next();
});

vimeoRouter.get("/", (req, res) => {
  const parsedUrl = parse(req.url, true);
  const { query } = parsedUrl;
  const queryPageInt = query.page ? parseInt(query.page) : pageIndex;

  const params = {
    path: "/me/videos",
    query: {
      page: queryPageInt,
      per_page: maxPerPage,
      fields: fieldsToRequest
    }
  };

  clientV.request(params, function(error, body) {
    if (error) {
      console.log("error");
      console.log(error);
      
      res.setHeader("content-type", "text/html");
      res.status(500).send(error.stack);
      
      return;
    }

    res.setHeader("content-type", "application/json");
    res.send(JSON.stringify(body));
  });
});

module.exports = vimeoRouter;
