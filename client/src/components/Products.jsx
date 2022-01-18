import { useEffect, useState } from "react"
import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"

import axios from "axios"

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = ({ category, filter, sort }) => {

  // console.log(category, filter, sort)
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:8080/api/products?category=${category}`
            : "http://localhost:8080/api/products")
        // console.log(res)
        setProducts(res.data)
      } catch (err) { }
    }
    getProducts()
  }, [category])

  useEffect(() => {
    category &&
      setFilteredProducts(
        // lọc products, entries trả về cặp [key, value] nếu từng key có value thì setfiltered
        // fliter trả về mảng các phần tử theo đk là true
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            // includes trả về true,false
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filter]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
          .slice(0, 8)
          .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  )
}

export default Products
