const path = require("path");
const DB_PATH = path.join(__dirname, "/../data/db.json");
let db = require(DB_PATH);
const fs = require("fs");

function render(file, res) {
  return res.sendFile(path.join(__dirname + `/../views/${file}.html`));
}

class QuotesController {
  async index(req, res) {
    return render("quotes", res);
  }

  async get(req, res) {
    return res.send(db);
  }
}

module.exports = new QuotesController();
