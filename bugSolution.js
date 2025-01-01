const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          reject(new Error('Something went wrong!'));
        }
        resolve();
      }, 1000);
    });
    res.send('Hello World!');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));