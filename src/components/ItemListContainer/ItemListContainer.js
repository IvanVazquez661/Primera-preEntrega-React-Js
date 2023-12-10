import { useEffect, useState } from "react"
import { getProduct, getProductByCategory } from '../asyncMock'  // Asegúrate de importar getProductByCategory si existe
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
  const [product, setProduct] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProduct

    asyncFunc(categoryId)
      .then(response => {
        setProduct(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [categoryId])

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList product={product} />
    </div>
  )
}

export default ItemListContainer
