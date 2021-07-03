/*
 * Title: Routes
 * Description: Application Routes
 * Author:MD.Atiqul HAque
 * Date: 03-07-2021
 *
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;
