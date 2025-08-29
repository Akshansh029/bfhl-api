import express, { json } from "express";

const app = express();
app.use(json());

const FULL_NAME = "akshansh_singh".toLowerCase(); // must be lowercased in user_id
const DOB = "14042004";
const EMAIL = "akshanshsingh00@gmail.com";
const ROLL_NUM = "22BEE1266";

function isIntegerString(s) {
  return /^[+-]?\d+$/.test(s);
}
function isAlphaString(s) {
  return /^[A-Za-z]+$/.test(s);
}

app.get("/", (res) => res.send("bfhl-api is running"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`bfhl-api listening on port ${PORT}`);
});
