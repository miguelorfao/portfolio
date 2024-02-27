import express from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(
  cors({
    origin: ["https://miguel-three.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,
});

app.get("/CompanyDirectory", (req, res) => {
  const q = "SELECT * FROM employee";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/CompanyDirectory", (req, res) => {
  const q =
    "INSERT INTO employee (`FirstName`, `LastName`, `Email`, `Department`, `Location`) VALUES (?)";
  const values = [
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.department,
    req.body.location,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json({ Error: err });
    return res.json({ Status: "Success" });
  });
});

app.get("/CompanyDirectory/:id", (req, res) => {
  const q = "SELECT * FROM employee WHERE id = ?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.put("/CompanyDirectory/:id", (req, res) => {
  console.log(req.body.ID);
  const q =
    "UPDATE employee SET FirstName = ?, LastName = ?, Email = ?, Department = ?, Location = ? WHERE ID = ?";

  db.query(
    q,
    [
      req.body.FirstName,
      req.body.LastName,
      req.body.Email,
      req.body.Department,
      req.body.Location,
      req.body.ID,
    ],
    (err, data) => {
      if (err) return res.json({ Error: err });
      return res.json({ Status: "Success" });
    }
  );
});
app.delete("/CompanyDirectory/:id", (req, res) => {
  console.log(req.params.id);
  const q = "DELETE FROM employee WHERE ID = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.json({ Error: err });
    return res.json({ Status: "Success" });
  });
});
const port = process.env.MYSQL_ADDON_PORT || 3001;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
