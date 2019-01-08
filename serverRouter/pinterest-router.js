const express = require("express");
const pinterestRouter = express.Router();
// PINTEREST
const PDK = require("node-pinterest");
// Load environment variables from .env
require("dotenv").load();
// PINTEREST env et setup.
const { PINTEREST_TOKEN } = process.env;
const pinterest = PDK.init(PINTEREST_TOKEN);

// Middleware that is specific to this router
pinterestRouter.use(function timeLog(req, res, next) {
  console.log("Time request pinterest: ", Date.now());
  next();
});

// Test API.
// pinterestRouter.get("/", function(req, res) {
//   res.setHeader("content-type", "application/json");
//   res.send(JSON.stringify({ message: "OK" }));
// });

// Get my information
pinterestRouter.get("/me", function(req, res) {
  pinterest.api("me").then(json => {
    res.setHeader("content-type", "application/json");
    res.send(JSON.stringify(json.data));
  }).catch(function(error) {
    res.setStatus(500).send(error.stack);
  });
});

pinterestRouter.get("/update", function updateData(params) {
  // Update the data for all the users. 
  const options = {
    qs: {
      limit: 20
    },
    fields: "id,creator,image",
  };
  
  pinterest.api("me/boards", options).then(function(json) {
    res.setHeader("content-type", "application/json");
    res.send(json.data);
    
  }).catch(function(error) {
    res.setStatus(500).send(error.stack);
  });
});

// Get all the boards.
pinterestRouter.get("/boards", function(req, res) {   
  var options = {
    qs: {
      limit: 20
    },
    fields: "id,creator,image",
  };
  pinterest.api("me/boards", options).then(function(json) {
    res.setHeader("content-type", "application/json");
    res.send(json.data);
    
  }).catch(function(error) {
    res.setStatus(500).send(error.stack);
  });
});

// Get pins by board.
pinterestRouter.get("/board/:boardId", function(req, res) {
    // var options = {
    //   qs: {
    //     limit: 20
    //   }
    // };

    const boardRoute = "boards/".concat(req.params.boardId + "/pins");
    pinterest.api(boardRoute).then(function(json) {
      res.setHeader("content-type", "application/json");
      res.send(JSON.stringify(json.data));
    }).catch(function(error) {
      res.setHeader("content-type", "text/html");
      res.setStatus(500).send(error.stack);
    });
  });

pinterestRouter.get("/pins", function(req, res) {
  var options = {
    qs: {
      limit: 20
    }
  };
  pinterest.api("me/pins", options).then(function(json) {
    res.setHeader("content-type", "application/json");
    res.send(JSON.stringify(json.data));
  });
});

module.exports = pinterestRouter;
