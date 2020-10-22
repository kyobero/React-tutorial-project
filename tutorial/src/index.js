import React from 'react';
import ReactDom from 'react-dom'

//Css
import './index.css';
//setup vars
const firstBook ={
  img: 
  'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  title: 'I love you to the moon and back',
  author: 'Amelia Hepworth',
};
const secondBook ={
  img: 
  'https://images-na.ssl-images-amazon.com/images/I/81zBVMvSjNL._AC_UL200_SR200,200_.jpg',
  title: 'Midnight Sun',
  author: 'Stephenie Meyer',
};
function BookList(){
  return (
  <section className='booklist'>
    <Book
    img={firstBook.img}
    title={firstBook.title}
    author={firstBook.author}
    />
    <Book 
    img={secondBook.img}
    title={secondBook.title}
    author={secondBook.author}
    />
  </section>
  );
}


const Book = (props) =>{
  return (
   <article className='book'>
     <img src={props.img} alt='' />
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
  </article>
  );
};


ReactDom.render(<BookList/>, document.getElementById('root'));