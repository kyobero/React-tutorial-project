import React from 'react';
import ReactDom from 'react-dom';

//Css
import './index.css';
// setup vars

import  {books} from './books'
import Book from './Book'

function BookList() {
  return (
  <section className='booklist'>
    {books.map((book)=> {
      return  <Book key={book.id} {...book}></Book>;
    
  })}
  </section>
  );
}


ReactDom.render(<BookList/>, document.getElementById('root'));