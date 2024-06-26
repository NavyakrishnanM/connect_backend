const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointments');
const Worker = require('../models/worker');
const Feedback=require('../models/feedback.js');
const Grievance=require('../models/grievance.js');




router.post('/feedback', async (req, res) => {
    try {
      const { appointmentId, description, rating } = req.body;
  
      // Create a new feedback document
      const feedback = new Feedback({
        appointment: appointmentId,
        description,
        rating
        // Add other feedback fields as needed
      });
  
      // Save the feedback document to the database
      await feedback.save();
  
      res.status(201).json({ message: 'Feedback saved successfully' });
    } catch (error) {
      console.error('Error saving feedback:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  
  router.post('/grievance', async (req, res) => {
    try {
      const { appointmentId, description } = req.body;
  
      // Create a new feedback document
      const grievance = new Grievance({
        appointment: appointmentId,
        description,
  
        // Add other feedback fields as needed
      });
  
      // Save the feedback document to the database
      await grievance.save();
  
      res.status(201).json({ message: 'grievance saved successfully' });
    } catch (error) {
      console.error('Error saving feedback:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  




module.exports = router;