import "./Cards.css";
import {categories} from "../../helpers/Data";

console.log(categories);

const Cards = () => {
    return (
        <div className="card-container">
      {categories.map((card, index) => {
        return (
          <div className="cards" key={index}>
            <img src={card.img} alt={card.name} />
            <div className="card-over">
              <p>{card.options}</p>
            </div>
          </div>
        );
      })}
            {/* tek data çekme!
            <div>
                <div>
                    <h2>Card Title</h2>
                    <img src="https://cdn.pixabay.com/photo/2017/06/07/15/47/new-york-city-2380683_960_720.jpg" alt="" />
                    <div>
                        <p>Card desc</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
};

export default Cards;