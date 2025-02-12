import { useSelector } from "react-redux";
import { State } from "../redux/reducers";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state: State) => state.allProducts.products);
  const rederList = products.map((product) => {
    const { id, title, price, image, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <div className="ui grid container">{rederList}</div>;
};

export default ProductComponent;
