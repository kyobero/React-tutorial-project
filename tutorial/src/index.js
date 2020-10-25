import React from 'react';
import ReactDom from 'react-dom';

//Css
import './index.css';
// setup vars
const books = [
{
  img: 
  'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  title: 'I love you to the moon and back',
  author: 'Amelia Hepworth',
},
{
  img: 
  'https://images-na.ssl-images-amazon.com/images/I/81zBVMvSjNL._AC_UL200_SR200,200_.jpg',
  title: 'Midnight Sun',
  author: 'Stephenie Meyer',
},
{
  img: 
  'https://images-na.ssl-images-amazon.com/images/I/81zBVMvSjNL._AC_UL200_SR200,200_.jpg',
  title: 'Midnight Sun',
  author: 'Stephenie Meyer',
},
];


function BookList() {
  return (
  <section className='booklist'>
    {books.map((book)=> {
      return  <Book book={book}></Book>;
    
  })}
  </section>
  );
}


const Book = (props) =>{
  const {img, title, author} = props.book;

  return (
   <article className='book'>
     <img src={img} alt='' />
    <h1>{title}</h1>
    <h4>{author}</h4>
    <h3>{props.children}</h3> 
  </article>
  );
};


ReactDom.render(<BookList/>, document.getElementById('root'));