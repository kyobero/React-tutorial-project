import React from 'react';
import ReactDom from 'react-dom';

//Css
import './index.css';
// setup vars
const books = [
{
  id: 1,
  img: 
  'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  title: 'I love you to the moon and back',
  author: 'Amelia Hepworth',
},
{
  id: 2,
  img: 
  'https://images-na.ssl-images-amazon.com/images/I/81zBVMvSjNL._AC_UL200_SR200,200_.jpg',
  title: 'Midnight Sun',
  author: 'Stephenie Meyer',
},
{
  id: 3,
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
      return  <Book key={book.id} {...book}></Book>;
    
  })}
  </section>
  );
}


const Book = ({img, title, author}) =>{
  // const {img, title, author} = props;
  // attribute, eventHandler
  // onClick, onMoueOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
   <article className='book' onMouseOver={()=>{
     console.log(title);
   }}>
     <img src={img} alt='' />
    <h1 onClick={() => console.log(title)}>{title}</h1>
    <h4>{author}</h4>
    <button type='button' onClick={clickHandler}>
     reference example
    </button>
    <button type='button' onClick={() => complexExample(author)}>
      more complex example
    </button>
  </article>
  );
};


ReactDom.render(<BookList/>, document.getElementById('root'));