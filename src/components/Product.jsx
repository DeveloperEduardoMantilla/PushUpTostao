
export default function Product(props) {
  const {imgProduct,color} = props;
  return (
    <div className="product" style={{"backgroundColor":color}}>
        <img src={imgProduct} alt="" />
    </div>
  )
}
