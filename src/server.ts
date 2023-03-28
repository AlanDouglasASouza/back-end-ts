import { config } from "dotenv";
config();
import App from "./app";

new App().server.listen(process.env.PORT, () => console.log("Server ON"));
