import { NextFunction, Request, Response } from "express";

import { Books } from "../models/book-model";

export const createBook: any = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const books = await Books.create({ ...req.body });
  return res
    .status(201)
    .json({ message: "Book created successfully", data: books });
};

export const getAllBook: any = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const allBooks: Books[] = await Books.findAll();
  return res
    .status(200)
    .json({ message: "Book fetched successfully", data: allBooks });
};

// export const deleteBook: RequestHandler = async (req, res, next) => {
//   const { id } = req.params;
//   const deletedBook: Books | null = await Books.findByPk(id);
//   await Books.destroy({ where: { id } });
//   return res
//     .status(200)
//     .json({ message: "Book deleted succesfully", data: deleteBook });
// };

// export const getBookById: RequestHandler = async (req, res, next) => {
//   const { id } = req.params;
//   const book: Books | null = await Books.findByPk(id);
//   return res.status(200).json({ message: "Book fetched successfully" });
// };

// export const updateBook: RequestHandler = async (req, res, next) => {
//   const { id } = req.params;
//   await Books.update({ ...req.body }, { where: { id } });
//   const updatedBook: Books | null = await Books.findByPk(id);
//   return res
//     .status(200)
//     .json({ message: "Book updated successfully", data: updatedBook });
// };
