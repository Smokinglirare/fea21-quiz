import React from "react";


const Item = (props) => {
  return <p data-testid="two-item">{text}</p>
}


// Slutför Two så att den skriver ut
// alla items som ges via props till Two.
// Använd komponenten Item för att skriva ut det
// i items.map nedan.

const Two = (items) => {

const hahaItems = items.items;
console.log(hahaItems)
  return (

    <div>
      {
       hahaItems.map((item) => {
         
<p key={item.text}>{item.text}</p>
        })
      }
    </div>
  );
};

export default Two;
