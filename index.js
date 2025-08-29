import express, { json } from "express";

const app = express();
app.use(json());

const FULL_NAME = "akshansh_singh".toLowerCase();
const DOB = "14042004";
const EMAIL = "akshanshsingh00@gmail.com";
const ROLL_NUM = "22BEE1266";

function isInteger(str) {
  return /^[+-]?\d+$/.test(str);
}

function isAlphabet(str) {
  return /^[A-Za-z]+$/.test(str);
}

app.post("/bfhl", (req, res) => {
  try {
    const body = req.body;
    if (!body || !Array.isArray(body.data)) {
      return res.status(400).json({
        is_success: false,
        error: "Invalid request",
      });
    }

    const data = body.data;

    const evenNum = [];
    const oddNum = [];
    const alphabets = [];
    const specialChars = [];
    let numericSum = 0;
    const alphaChars = [];

    for (const item of data) {
      const token = String(item);

      // alphabets
      for (const ch of token) {
        if (/[A-Za-z]/.test(ch)) alphaChars.push(ch);
      }

      // nums
      if (isInteger(token)) {
        const num = parseInt(token, 10);
        if (num % 2 === 0) {
          evenNum.push(String(token));
        } else {
          oddNum.push(String(token));
        }

        numericSum += num;
      } else if (isAlphabet(token)) {
        alphabets.push(token.toUpperCase());
      } else {
        specialChars.push(token);
      }
    }

    // reverse alphabets
    const reversed = alphaChars.reverse();
    let concat_string = "";
    for (let i = 0; i < reversed.length; i++) {
      const ch = reversed[i];
      concat_string += i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase();
    }

    const response = {
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      ROLL_NUM: ROLL_NUM,
      oddNum,
      evenNum,
      alphabets,
      specialChars,
      sum: String(numericSum),
      concat_string,
    };

    return res.status(200).json(response);
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({
      is_success: false,
      error: "Server error",
    });
  }
});

app.get("/", (res) => res.send("bfhl-api is running"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`bfhl-api listening on port ${PORT}`);
});
