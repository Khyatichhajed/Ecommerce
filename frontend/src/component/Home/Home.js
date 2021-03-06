import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import Metadata from "../layout/Metadata";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layout/Loader/Loader"
import { useAlert } from "react-alert";

const Home = () => {
  const alert=useAlert()
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    if(error){
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch,error,alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader/>
      ) : (
        <Fragment>
          <Metadata title="ECOMMERCE" />
          <div className="banner">
            <p>Welcome to Hamar Bajar !</p>
            <h1>छत्तीसगढ़ का अपना बाजार</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => <ProductCard product={product} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
