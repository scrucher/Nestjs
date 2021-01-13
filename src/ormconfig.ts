import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";
//import * as config from "../config";

//const dbConfig = config.get('db')


export const OrmConfig : TypeOrmModuleOptions = {
    "type": "postgres",  //dbCOnfig.type,
    "host": "localhost", //process.env.RDS_HOSTNAME || dbConfig.host,
    "port": 5432, //process.env.RDS_PORT || dbConfig.port,
    "username": "postgres", // process.env.RDS_USERNAME || dbConfig.username,
    "password": "darksoul", // process.env.RDS_PASSWORD || dbConfig.password,
    "database": "postgres", // process.env.RDS_NAME || dbConfig.database,
    "entities": [join(__dirname, '**', '*entity{.ts,.js}')],
    "synchronize": true, //process.env.RDS_SYNC || dbConfig.synchronize,


}