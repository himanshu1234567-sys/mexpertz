const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/sciencefiction', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Define a schema and model for stories
const storySchema = new mongoose.Schema({
  Title: String,
  Image: [String],
  Status: String,
  Storyadvenure: Object,
  Wordexplore: Array,
  Brainquest: Array,
});

const Story = mongoose.model('Story', storySchema);

// API endpoint for fetching stories with pagination
app.get('/api/sciencefiction', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  try {
    const stories = await Story.find().skip(skip).limit(limit);
    res.json(stories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
