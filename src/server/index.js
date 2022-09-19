import express from 'express';

const PORT = 5000;

const app = express();

app.use('/assets', express.static('./assets'))

app.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}/`)
})