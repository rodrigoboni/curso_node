"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * App config, defaults etc
 */
exports.environment = {
    server: { port: process.env.SERVER_PORT || 3000 },
    db: { url: process.env.DB_URL || 'mongodb://localhost/meat-api' } // var ambiente ou default
};
//# sourceMappingURL=environment.js.map