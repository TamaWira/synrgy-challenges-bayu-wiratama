import express, { Express } from "express";
import cors from "cors";
import apiRouter from "./routes/api";

const { PORT = 8000 } = process.env;

class Server {
  private app: Express;

  constructor() {
    this.app = express();

    this.app.use(express.json());
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
