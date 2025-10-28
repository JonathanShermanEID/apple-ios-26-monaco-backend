/**
 * Express Server
 * Apple iOS 26 Monaco Edition Backend
 * 
 * Author: Jonathan Sherman
 * Copyright: © 2025 Jonathan Sherman. All Rights Reserved.
 * Version: 5.0.0
 */

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Import API handlers
const syncHandler = require('./api/sync');
const healthHandler = require('./api/health');

// API Routes
app.get('/api/sync', (req, res) => {
    syncHandler.default(req, res);
});

app.get('/api/health', (req, res) => {
    healthHandler.default(req, res);
});

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        name: 'Apple iOS 26 Monaco Edition Backend',
        version: '5.0.0',
        author: 'Jonathan Sherman',
        copyright: '© 2025 Jonathan Sherman. All Rights Reserved.',
        endpoints: {
            sync: '/api/sync',
            health: '/api/health'
        }
    });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log('═══════════════════════════════════════════════════════════════');
    console.log('  Apple iOS 26 Monaco Edition Backend');
    console.log('  Author: Jonathan Sherman');
    console.log('  Copyright: © 2025 Jonathan Sherman. All Rights Reserved.');
    console.log('═══════════════════════════════════════════════════════════════');
    console.log(`  Server running on port ${PORT}`);
    console.log(`  Endpoints:`);
    console.log(`    - http://localhost:${PORT}/api/sync`);
    console.log(`    - http://localhost:${PORT}/api/health`);
    console.log('═══════════════════════════════════════════════════════════════');
});
