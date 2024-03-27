import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/cartSlice";
import { getProducts } from "../Store/productSlice";
import StatusCode from "../utils/StatusCode";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);
  useEffect(() => {
    // Dispatch
    dispatch(getProducts());
  }, []);

  if (status === StatusCode.LAODING) {
    <p>Loading.....</p>;
  }

  if (status === StatusCode.ERROR) {
    <Alert key="danger" variant="danger">
      Something went wrong! Try again later
    </Alert>;
  }

  const addToCart = (product) => {
    // Dispatch an add action
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div key={product.id} className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{
              width: "100px",
              height: "130px",
              padding: "5px",
            }}
          />
        </div>

        <Card.Body className="text-center">
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>$ {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer
          className="text-center"
          style={{ backgroundColor: "white" }}
        >
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <>
      <h1 className="text-center">Product Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;
