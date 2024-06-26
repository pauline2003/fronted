// bookReducer.tsx

export interface Book {
    id: number;
    title: string;
    author: string;
    year: number;
  }
  
  export const initialBooks: Book[] = [
    { id: 1, title: "Book 1", author: "Author 1", year: 2000 },
    { id: 2, title: "Book 2", author: "Author 2", year: 2005 },
    { id: 3, title: "Book 3", author: "Author 3", year: 2010 },
    { id: 4, title: "Book 4", author: "Author 4", year: 2015 },
    { id: 5, title: "Book 5", author: "Author 5", year: 2020 },
  ];
  
  export const bookReducer = (state: Book[], action: any) => {
    switch (action.type) {
      case 'ADD_BOOK':
        return [...state, action.payload];
      case 'UPDATE_BOOK':
        return state.map(book =>
          book.id === action.payload.id ? { ...book, ...action.payload } : book
        );
      case 'DELETE_BOOK':
        return state.filter(book => book.id !== action.payload.id);
      default:
        return state;
    }
  };
  