import game from "../assets/game.png";
import computers from "../assets/computers.png";
import home from "../assets/home.png";
import deals from "../assets/deals.png";
import Product from "./Product";
import Selection from "./Selection";
import items from "../items";
export default function Home() {
  const products= items.map((item) => {
    return <Product key={item.id} {...item} />;
  }
  );
  return (
    <>
      <div className="products">
        <Selection 
          title="Computers & Accessories"
          image={computers}
          
        />
        <Selection title="Gaming Accessories" image={game}  />
        <Selection title="Home Gadgets" image={home}  />
        <Selection title="Holiday Deals" image={deals}  />
        {products}
        {/* <Product id="1" price="20" rate={4} image={game} title="game" />
        <Product id="1" price="20" rate={4} image={game} title="game" />
        <Product id="1" price="20" rate={4} image={game} title="game" />
        <Product id="1" price="20" rate={4} image={game} title="game" />
        <Product id="1" price="20" rate={4} image={game} title="game" />
        <Product id="1" price="20" rate={4} image={game} title="game" />
        <Product id="1" price="20" rate={4} image={game} title="game" />
        <Product id="1" price="20" rate={4} image={game} title="game" />
        <Product id="1" price="20" rate={4} image={game} title="game" />
        <Product id="1" price="20" rate={4} image={game} title="game" />
        <Product id="1" price="20" rate={4} image={game} title="game" />
        <Product id="1" price="20" rate={4} image={game} title="game" /> */}
      </div>
    </>
  );
}
