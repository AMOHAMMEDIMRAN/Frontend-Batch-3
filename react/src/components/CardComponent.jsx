const CardComponent = () => {
  const products = ['headset', 'mobile', 'power bank', 'charger']
  return (
    <div>
      { products.length > 0 && <h1>cart product {products.length}</h1> }
      {
        products.map((p,i) => (
          <li key={i} >{p}</li>
        ))
      }
      
    </div>
  )
}
export default CardComponent