import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { books } from './books'
import Book from './book'

const BookList = () => {
  return (
    <div>
      <h1>Welcome to UOB Bookstore!</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />
        })}
      </section>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
