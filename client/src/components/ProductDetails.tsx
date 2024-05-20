import { Product } from "../types";

interface ProductDetailsProps extends Product {
  onToggleEdit: () => void;
}

const ProductDetails = ({
  title,
  price,
  quantity,
  onToggleEdit,
}: ProductDetailsProps) => {
  return (
    <div className="product-details">
      <h3>{title}</h3>
      <p className="price">${price}</p>
      <p className="quantity">{quantity} left in stock</p>
      <div className="actions product-actions">
        <button className="add-to-cart">Add to Cart</button>
        <button className="edit" onClick={onToggleEdit}>
          Edit
        </button>
      </div>
      <button className="delete-button">
        <span>X</span>
      </button>
    </div>
  );
};

export default ProductDetails;
