import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { db } from "../db/db.js";

export const addBook = async (req, res) => {
  const userId = req.user.id;

  if (!userId) {
    throw new Error("User ID not found");
  }

  //get data
  // const {
  //   title, description, language, author, price, publishedOn, page, genre, isbn
  // } = req.body;

  let booksData = req.body;

  // // Compute bookCover automatically:
  // const bookCover = `https://covers.openlibrary.org/b/isbn/${isbn.replace(/-/g, '')}-L.jpg`;

  // support array or single object
  if (!Array.isArray(booksData)) {
    booksData = [booksData];
  }

  const preparedBooks = booksData.map((book) => {
    const {
      title,
      description,
      language,
      author,
      price,
      publishedOn,
      page,
      genre,
      isbn,
    } = req.body;

    // validate data
    if (
      !title ||
      !language ||
      !price ||
      !genre ||
      !isbn ||
      !author ||
      !publishedOn
    ) {
      throw new apiError(400, "All fields are required");
    }

    return {
      title,
      description,
      language,
      author,
      price,
      publishedOn: new Date(publishedOn),
      page,
      genre,
      isbn,
      bookCover: `https://covers.openlibrary.org/b/isbn/${isbn.replace(
        /-/g,
        ""
      )}-L.jpg`,
      owner: { connect: { id: userId } },
    };
  });

  try {
    //add book
    // let book = await db.book.create({
    //   data: {
    //     title,
    //     description,
    //     language,
    //     author,
    //     price,
    //     publishedOn,
    //     page,
    //     genre,
    //     isbn,
    //     bookCover,
    //     owner: { connect: { id: userId } },
    //   },
    //   select: {
    //     id: true,
    //     title: true,
    //     description: true,
    //     language: true,
    //     author: true,
    //     price: true,
    //     publishedOn: true,
    //     page: true,
    //     genre: true,
    //     isbn: true,
    //     bookCover:true,
    //   },
    // });

    let createdBooks = [];

    for (const data of preparedBooks) {
      const book = await db.book.create({
        data,
        select: {
          id: true,
          title: true,
          description: true,
          language: true,
          author: true,
          price: true,
          publishedOn: true,
          page: true,
          genre: true,
          isbn: true,
          bookCover: true,
        },
      });
      createdBooks.push(book)
    }
    return res
      .status(200)
      .json(new apiResponse(200, createdBooks, "Book(s) added successfully."));
  } catch (error) {
    console.error(error);
    throw new apiError(500, "Something went wrong while adding the book(s)");
  }
};

export const allBooks = async (req, res) => {
  try {
    const books = await db.book.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        language: true,
        author: true,
        price: true,
        publishedOn: true,
        page: true,
        genre: true,
        isbn: true,
        bookCover: true,
      },
    });

    if (!books) {
      throw new apiError(404, "No book found");
    }

    return res
      .status(200)
      .json(new apiResponse(200, books, "All books found successfully"));
  } catch (error) {
    console.error(error);
    throw new apiError(500, "Internal error while finding books");
  }
};

export const bookDetails = async (req, res) => {
  const { bookId } = req.params;
  if (!bookId) {
    throw new apiError(400, "Book id is required");
  }
  try {
    const book = await db.book.findFirst({
      where: { id: bookId },
      select: {
        title: true,
        description: true,
        language: true,
        author: true,
        price: true,
        publishedOn: true,
        page: true,
        genre: true,
        isbn: true,
        bookCover: true,
      },
    });

    if (!book) {
      throw new apiError(400, "No details found for this book");
    }

    return res
      .status(200)
      .json(
        new apiResponse(
          200,
          book,
          "All details found successfully for this book"
        )
      );
  } catch (error) {
    console.error(error);
    throw new apiError(500, "Internal error while finding book details");
  }
};

export const updateBook = async (req, res) => {
  const userId = req.user.id;
  const { bookId } = req.params;
  if (!bookId) {
    throw new apiError(400, "Book id is required");
  }

  const {
    title,
    description,
    language,
    author,
    price,
    publishedOn,
    page,
    genre,
    isbn,
  } = req.body;

  const bookCover = `https://covers.openlibrary.org/b/isbn/${isbn.replace(
    /-/g,
    ""
  )}-L.jpg`;

  try {
    let book = await db.book.findFirst({
      where: { id: bookId },
    });

    if (!book) {
      throw new apiError(404, "No book found");
    }

    book = await db.book.update({
      where: { id: bookId },
      data: {
        title,
        description,
        language,
        author,
        price,
        publishedOn,
        page,
        genre,
        isbn,
        bookCover,
        owner: { connect: { id: userId } },
      },
      select: {
        title: true,
        description: true,
        language: true,
        author: true,
        price: true,
        publishedOn: true,
        page: true,
        genre: true,
        isbn: true,
        bookCover: true,
      },
    });

    return res
      .status(200)
      .json(new apiResponse(200, book, "Book updated successfully"));
  } catch (error) {
    console.error(error);
    throw new apiError(500, "Internal error while updating book");
  }
};

export const deleteBook = async (req, res) => {
  const { bookId } = req.params;
  if (!bookId) {
    throw new apiError(400, "Book id is required");
  }

  try {
    const book = await db.book.delete({
      where: { id: bookId },
      select: {
        title: true,
        id: true,
      },
    });

    return res
      .status(200)
      .json(new apiResponse(200, book, "Book deleted successfully"));
  } catch (error) {
    console.error(error);
    throw new apiError(500, "Internal error while deleting book");
  }
};
