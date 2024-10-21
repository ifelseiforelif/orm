import { Router } from "express";

import { createBook, getAllBook } from "../controller/book-controller";
export const booksRoutes = Router();
booksRoutes.post("/", createBook);
booksRoutes.get("/", getAllBook);
