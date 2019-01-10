const express = require("express");
const pinterestRouter = express.Router();
const jsonfile = require("jsonfile");
const path = require("path");
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

// Get my information
pinterestRouter.get("/me", function(req, res) {
  pinterest
    .api("me")
    .then(json => {
      res.setHeader("content-type", "application/json");
      res.send(JSON.stringify(json.data));
    })
    .catch(function(error) {
      res.setStatus(500).send(error.stack);
    });
});

pinterestRouter.get("/update", function(req, res) {
  // Define filePath.
  const boardsPathFile = path.join("serverJSON", "boards.json");
  // Check first if file in ../serverJSON/boards.json exist.
  jsonfile.readFile(boardsPathFile, (err, obj) => {
    if (!err || JSON.parse(obj) === "") {
      const options = {
        qs: {
          fields: "id,image[medium],name"
        }
      };
      // Retrieve DATA from Pinterest.
      pinterest
        .api("me/boards", options)
        .then(function(json) {
          return json;
        })
        .catch(function(error) {
          res.setHeader("content-type", "application/json");
          res.send(JSON.stringify({ message: "KO ::: " + error }));
        })
        .then(result => {
          if (result) {
            // Create the file with boards DATA.
            obj = JSON.stringify(result);
            jsonfile.writeFile(boardsPathFile, obj, err => {
              if (err) {
                res.setHeader("content-type", "application/json");
                res.send(JSON.stringify({ message: "KO ::: " + err }));
              } else {
                res.setHeader("content-type", "application/json");
                res.send(JSON.stringify({ message: "OK" }));
              }
            });
          }
        });
    } else {
      res.setHeader("content-type", "application/json");
      res.send(JSON.stringify({ message: "KO ::: " + err }));
    }
  });
});

// Get all the boards.
pinterestRouter.get("/boards", async function(req, res) {
  // Check first if file in ../serverJSON/boards.json exist.
  const boardsPathFile = path.join("serverJSON", "boards.json");
  // Read File and Get DATA.
  jsonfile.readFile(boardsPathFile, (err, obj) => {
    if (err || obj.length === 0) {
      obj = '{"data":[]}';
    }
    const data = JSON.parse(obj).data;
    res.setHeader("content-type", "application/json");
    res.send(data);
  });
});

// const getJSONFileObj = (fileNamePath) => {
//   jsonfile.readFile(fileNamePath, (err, obj) => {
//     if (err) {
//       return '{"data":[]}';
//     } else {
//       return obj;
//     }
//   });
// }

// Get pins by board.
pinterestRouter.get("/board/:boardId", function(req, res) {
  // var options = {
  //   qs: {
  //     limit: 20
  //   }
  // };
  const boardId = req.params.boardId;
  const fileNamePath = path.join("serverJSON", boardId.concat(".json"));

  jsonfile.readFile(fileNamePath, (err, obj) => {
    if (!err) {
      const data = JSON.parse(obj).data;
      res.setHeader("content-type", "application/json");
      res.send(data);
    } else {
      const boardRoute = "boards/".concat(req.params.boardId + "/pins");
      const PIN_FIELDS = "id,image[medium]";
      const options = {
        qs: {
          fields: PIN_FIELDS,
        }
      };

      pinterest
        .api(boardRoute, options)
        .then(function(json) {
          // Create the file with boards DATA.
          obj = JSON.stringify(json);
          // Create File for the board Id.
          jsonfile.writeFile(fileNamePath, obj, err => {
            if (err || obj.length === 0) {
              obj = '{"data":[]}';
            }
            const data = JSON.parse(obj).data;
            res.setHeader("content-type", "application/json");
            res.send(data);
          });
        })
        .catch(function(error) {
          res.setHeader("content-type", "text/html");
          res.setStatus(500).send(error.stack);
        });
    }
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
