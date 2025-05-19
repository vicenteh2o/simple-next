interface MyComponentProps {
  productId: number;
}

const AddToCart: React.FC<MyComponentProps> = ({ productId }) => {
  return (
    <div>
      <p>ID: {productId}</p>
    </div>
  );
};

export default AddToCart