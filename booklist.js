class BookList {
  constructor() {
    this.books = [];        
    this.favoriteBook = ""; 
  }

  
  addBook(title, author) {
    this.books.push({ title, author });
  }

  
  setFavoriteBook(title) {
    this.favoriteBook = title;
  }

  
  getBooksList() {
    
    this.books.forEach(i => {
      console.log(`${i.title},${i.author}`);
    });
  }

  
  getFavoriteBook() {
    if (this.favoriteBook) {
      console.log(this.favoriteBook);
    } else {
      console.log("Error");
    }
  }
}


const b = new BookList();
b.addBook("Alkimyogar", "Paulo Coelho");
b.addBook("1984", "George Orwell");
b.addBook("O'tkan kunlar", "Abdulla Qodiriy");

b.getBooksList();
b.setFavoriteBook("1984");
b.getFavoriteBook();
