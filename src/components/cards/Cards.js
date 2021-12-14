/** @format */

// import "./Cards.css";
// import {categories} from "../../helpers/Data";

// // console.log(categories);

// const Cards = () => {

//   const [isVisible, setIsvisible] = useState(false);

//     return (

//       <div className="container">
//         {/* <h1>Languages</h1> */}
//         <div className="card-container">
//           {categories.map((card, index) => {
//           return (
//             <div className="cards" key={index}>
//               <img src={card.img} alt={card.name} />
//               <div className="card-over">
//                 <p>{card.options}</p>
//               </div>
//             </div>
//         );
//       })}
//         </div>
//       </div>

//     )
// };

// export default Cards;

import "./Cards.css";
import { categories } from "../../helpers/Data";
// import { useState } from "react";
// console.log(categories);

const Cards = ({ toggleShow, isVisible }) => {
  // const handleClick = (e)=>{
  //   console.log("Click with handleClick from Header");
  return (
    <div className='container'>
      <h1>Languages</h1>
      <div className='card-container'>
        {categories.map((card, index) => {
          return (
            <div className='cards' key={index} onClick={toggleShow}>
              {isVisible ? (
                <div>
                  <img src={card.img} alt='' />
                  <p>{card.name}</p>
                </div>
              ) : (
                <div>
                  <p>{card.options} </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Cards;
