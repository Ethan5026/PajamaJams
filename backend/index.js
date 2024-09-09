/**
 *  Author: Isaac Denning
 *  ISU Netid : idenning@iastate.edu
 *  Date :  April 29th, 2024
 */

const express = require("express");
const db = require("./db.js");
const cors = require("cors");
const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());
//app.use(express.static("public"));
//app.use("/images", express.static("images"));
app.listen(PORT);

const basicGames = ["charades", "never-have-i-ever", "paranoia", "pictionary", "smash-or-pass", "kiss-marry-kill", "storytime", "would-you-rather"];
let basicRequests = [
  {
    path: "truth-or-dare/truth",
    table: "truths"
  },
  {
    path: "truth-or-dare/dare",
    table: "dares"
  }
];

basicGames.forEach(gameName => {
  basicRequests.push({
    path: gameName,
    table: gameName.replaceAll('-','_')
  });
});

basicRequests.forEach(request => {
  app.get("/" + request.path, async (req, res) => {
    try {
      const [result] = await db.query(`SELECT * FROM \`${request.table}\``);
      res.status(200).send(result);
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });

  app.get("/" + request.path + "/:id", async (req, res) => {
    try {
      const [result] = await db.query(`SELECT * FROM \`${request.table}\` WHERE id = ${req.params.id}`);
      res.status(200).send(result);
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });

  app.post("/" + request.path, async (req, res) => {
    try {
      await db.query(`INSERT INTO \`${request.table}\` (${Object.keys(req.body).join(',')}) VALUES (${Object.values(req.body).map((val) => `'${val}'`).join(',')});`);
      res.status(200).send();
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });

  app.delete("/" + request.path + "/:id", async (req, res) => {
    try {
      await db.query(`DELETE FROM \`${request.table}\` WHERE id = ${req.params.id}`);
      res.status(200).send();
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });

  app.put("/" + request.path + "/:id", async (req, res) => {
    try {
      await db.query(`UPDATE \`${request.table}\` SET ${Object.entries(req.body).map(([key, val]) => `${key} = '${val}'`).join(', ')} WHERE id = ${req.params.id}`);
      res.status(200).send();
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });
});

app.get("/truth-or-dare", async (req, res) => {
  try {
    const [truths] = await db.query("SELECT * FROM truths");
    const [dares] = await db.query("SELECT * FROM dares");
    res.status(200).send({ truths: truths, dares: dares });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});