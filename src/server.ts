import app from './app';
import {port} from "./config";
import Logger from "./core/Logger";

app.listen(port,  () => {
    Logger.info(`app running on port: ${port}`)
}).on("error", error => {
    Logger.error('Error in starting', error)
});
