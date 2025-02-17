import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  removeSelectedProduct,
  fetchProduct,
} from "../redux/actions/productActions";
import { useSelector } from "react-redux";
import { AppThunkDispatch, RootState } from "../redux/reducers";
import { IProduct } from "../redux/reducers/productReducer";

const ProductDetail = () => {
  const product = useSelector((state: RootState) => state.product) as IProduct;
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch: AppThunkDispatch = useDispatch();

  //   여기 설명! 왜 처음 상세페이지 진입 시에 remove 액션이 실행되는지?
  // 1. 페이지 이동 시 useEffect 실행
  // 2. productId 유효할 시, productId 설정
  // 3. 의존성 배열에 productId가 있으므로 useEffect 재실행되면서 진입 시 useEffect가 정리되기 때문에
  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex={0}>
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
