import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const response = await fetch('https://formspree.io/f/xzzpeogj', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (response.ok) {
      res.status(200).send('Email sent successfully.');
    } else {
      res.status(500).send('Failed to send message.');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    if (error instanceof Error) {
      res.status(500).send('Failed to send message. Error: ' + error.message);
    } else {
      res.status(500).send('Failed to send message. Unknown error occurred.');
    }
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
