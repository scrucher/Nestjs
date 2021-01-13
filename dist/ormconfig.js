"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrmConfig = void 0;
const path_1 = require("path");
exports.OrmConfig = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "darksoul",
    "database": "postgres",
    "entities": [path_1.join(__dirname, '**', '*entity{.ts,.js}')],
    "synchronize": true,
};
//# sourceMappingURL=ormconfig.js.map