const express = require('express');
const { PrismaClient } = require('@prisma/client');

const cors = require('cors');

const app = express();
const prisma = new PrismaClient();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/finduser', async (req, res) => {
  try {
    const data = await prisma.user.findMany();
    res.json(data); // Send the fetched data in the response
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
