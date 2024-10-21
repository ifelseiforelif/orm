import express, { Request, Response, NextFunction } from "express";
import { booksRoutes } from "./routes/books-routes";
import connection from "./config/config";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/books", booksRoutes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});
connection
  .sync()
  .then(() => {
    console.log("Database synced successfully");
  })
  .catch((err) => {
    console.error("Error: ", err);
  });
app.listen(3000);
