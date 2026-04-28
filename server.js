const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tickets = [];
let idCounter = 1;

app.post("/tickets", (req, res) => {
  const ticket = {
    id: idCounter++,
    title: req.body.title,
    description: req.body.description,
    status: "open",
    created_at: new Date()
  };
  tickets.push(ticket);
  res.json(ticket);
});

app.get("/tickets", (req, res) => {
  res.json(tickets);
});

app.put("/tickets/:id", (req, res) => {
  const ticket = tickets.find(t => t.id == req.params.id);
  if (!ticket) return res.status(404).send("Not found");

  const validStatuses = ["open", "in_progress", "closed"];

  if (req.body.status && validStatuses.includes(req.body.status)) {
    ticket.status = req.body.status;
  }

let statusButtons = "";

if (t.status !== "open") {
  statusButtons += `<button onclick="setStatus(${t.id}, 'open')">Open</button>`;
}

if (t.status !== "in_progress") {
  statusButtons += `<button onclick="setStatus(${t.id}, 'in_progress')">In Progress</button>`;
}

if (t.status !== "closed") {
  statusButtons += `<button onclick="setStatus(${t.id}, 'closed')">Close</button>`;
}

  res.json(ticket);
});
  ticket.status = req.body.status;
  res.json(ticket);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});