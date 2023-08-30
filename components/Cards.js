import React from 'react';

const Cards = (props)=>{
    const {resName, star} = props;
    return(
      <div className="cards">
       <img
       className="cardlogo"
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShkzYops_BDPA4zpikXtB7O73q9qRkjNYWSw&usqp=CA"/>
       <h3>Hungry</h3>
       <h4>{props.resName}</h4>
       <h4>{star}stars</h4>
  
      </div>
    );
  }

  export default Cards;