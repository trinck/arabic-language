'use strict';

/**
 * learned service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::learned.learned');
