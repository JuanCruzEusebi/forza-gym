import { google } from "googleapis";

export default async function handler(req, res) {
  // Enable CORS for all routes
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    // Preflight request. Reply successfully:
    res.status(200).end();
    return;
  }

  if (req.method === "POST") {
    const name = req.body.Fullname;
    const id = req.body.Id;
    const phone = req.body.Phone;
    const email = req.body.Email;
    console.log(name, id, phone, email);
    console.log(req.body);

    const private_key = process.env.PRIVATE_KEY;
    if (!private_key) {
      // Handle the situation where PRIVATE_KEY is not defined
      console.error("PRIVATE_KEY is not defined in environment variables.");
      res.status(500).json({ message: "Internal Server Error" });
      return;
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      // Move spreadsheetId and scopes outside of credentials
      spreadsheetId: process.env.SPREADSHEET_ID,
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "A1:D4",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, id, phone, email]],
      },
    });

    res.status(201).json({ message: "It works!", response });
  } else {
    res.status(200).json({ message: "Hey!" });
  }
}
