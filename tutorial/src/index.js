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
    >
      <p>Get code examples like "phpMyAdmin tried to connect to the MySQL server, and the server rejected the connection. ... You should check the host, username and password in your configuration and make sure that they correspond to the information given by the administrator of the MySQL server.</p>
    </Book>

    <Book 
    img={secondBook.img}
    title={secondBook.title}
    author={secondBook.author}
    />
  </section>
  );
}


const Book = ({img, title, author, children}) =>{
  // const {img, title, author} = props;
  return (
   <article className='book'>
     <img src={img} alt='' />
    <h1>{title}</h1>
    <h4>{author}</h4>
    {children}
  </article>
  );
};


ReactDom.render(<BookList/>, document.getElementById('root'));