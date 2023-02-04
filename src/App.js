import ProductListing from "./components/ProductListing";

export const config = {
  endpoint: "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
};

const App = () => {
  return (
    <ProductListing />
  );
}

export default App;
