const express = require('express');
const cors = require('cors');  // add this

const app = express();

app.use(cors({
  origin: 'http://localhost:3001', // allow requests from your React frontend
}));

app.use(express.json());

// Import routes
const bookingRoutes = require('./routes/bookingRoutes');
app.use('/api', bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
