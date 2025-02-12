import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ProductAction, setProducts } from "../redux/actions/productActions";
import { Dispatch } from "redux";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch<Dispatch<ProductAction>>();

  const fetchProducts = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err:", err);
      });

    if (res && res.data) {
      dispatch(setProducts(res.data));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <ProductComponent />
    </>
  );
};

export default ProductListing;
