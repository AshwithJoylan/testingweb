/**
 * Razzle React Native Web Example
 * https://github.com/jaredpalmer/razzle
 *
 * Generated with the Lezzmo Razzle Treact Natigation template
 * https://github.com/lezzmo/razzle-treact-natigation
 * 
 * This file starts the Web server.
 *
 * @format
 */

import express from 'express';

let app = require('./server').default;

if (module.hot) {
  module.hot.accept('./server', function() {
    console.log('🔁  HMR Reloading `./server`...');
    try {
      app = require('./server').default;
    } catch (error) {
      console.error(error);
    }
  });
  console.info('✅  Server-side HMR Enabled!');
}

const port = process.env.PORT || 3000;

export default express()
  .use((req, res) => app.handle(req, res))
  .listen(port, function(err) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`> Started on port ${port}`);
  });