/**
 *  Get configs from .env file and environment variables
 */

export const environment = process.env.ENV;
export const port = process.env.PORT;

export const corsUrl = process.env.CORS_URL;
export const dbName = process.env.DB_NAME
export const logDirectory = process.env.LOG_DIR;

//  Example var
//  const exampleVar = process.env.EX_VAR;