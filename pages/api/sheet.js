import { google } from "googleapis";

async function handler(req, res) {
  if (req.method === "POST") {
    const name = req.body.Name;
    const message = req.body.Feedback;
    const surname = req.body.Surname;
    console.log(name, message);
    console.log(req.body);

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
        spreadsheetId: process.env.SPREADSHEET_ID,
      },
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
        values: [[name, surname, message]],
      },
    });

    res.status(201).json({ message: "It works!", response });
  } else {
    res.status(200).json({ message: "Hey!" });
  }
}

export default handler;
