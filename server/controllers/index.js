const router = require('express').Router();

// Import API routes, home routes, and dashboard routes
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

// Use the defined routes for different endpoints
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

// Handle 404 errors by sending response with a 404 status
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;