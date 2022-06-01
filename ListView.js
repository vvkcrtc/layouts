function ShopItem(props) {
  let {products} = props
  let arr = products.map(el => 
    <li className="shopitem" key={`${el.name}_${el.color}`}>
      <img alt={el.name} src={el.img} />
      <h2>{el.name}</h2>
      <p style={{color: "#555555"}}>{el.color}</p>
      <p style={{color: "red"}}>${el.price}</p>
      <button className="btn">Add to card</button>    
    </li>
  )
  return arr;
}
  
function ListView(props) {
  return (
    <ul className="listview">
      <ShopItem products={props.products} />
    </ul>
  )
}

export default ListView;