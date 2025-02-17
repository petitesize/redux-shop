import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import { AppThunkDispatch } from "../redux/reducers";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch: AppThunkDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <ProductComponent />
    </>
  );
};

export default ProductListing;
