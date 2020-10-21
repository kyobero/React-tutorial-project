import React from 'react';
import ReactDom from 'react-dom'

//Css
import './index.css';
//setup vars
const author = 'Amelia Hepworth';
const title = 'I love you to the moon and back';
const img = 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg';

function BookList(){
  return (
  <section className='booklist'>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>
  );
}


const Book = () =>{
  return (
   <article className='book'>
     <img src={img} alt='' />
    <h1>{title}</h1>
    <h4>{author.toUpperCase()}</h4>
    <p>{5*8}</p>
  </article>
  );
};


ReactDom.render(<BookList/>, document.getElementById('root'));