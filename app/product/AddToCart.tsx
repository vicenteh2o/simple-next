"use client"
import { useState } from "react";

interface MyComponentProps {
  productId: number;
}

const AddToCart: React.FC<MyComponentProps> = ({ productId }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true)
    console.log(`Product ${productId} added to cart.`)
  }

  return (
    <button onClick={handleAddToCart}>
      {added ? "Added to cart" : "Add to cart"}
    </button>
  );
};

export default AddToCart