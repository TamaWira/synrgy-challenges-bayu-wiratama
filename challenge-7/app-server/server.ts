import cors from "cors";
import path from "path";
import express, { Express } from "express";
import apiRouter from "./routes/api";

const { PORT = 8000 } = process.env;
const PUBLIC_DIR = path.join(__dirname, "public");

class Server {
  private app: Express;

  constructor() {
    this.app = express();

    this.app.use(express.json());
    this.app.use(express.static(PUBLIC_DIR));
    this.app.use(
      cors({
        origin: "http://localhost:5173",
      })
    );

    this.app.use("/api", apiRouter);
  }

  public run() {
    this.app.listen(PORT, () => {
      console.log("Server running on http://localhost:%s", PORT);
    });
  }
}

new Server().run();
