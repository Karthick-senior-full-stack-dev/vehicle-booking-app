const express = require('express');
const app = express();

app.use(express.json());

// Import routes
const bookingRoutes = require('./routes/bookingRoutes');
app.use('/api', bookingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
