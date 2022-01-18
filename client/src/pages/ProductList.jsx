import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import { mobile } from './../reponsive';

import { useLocation } from "react-router-dom"
import { useState } from "react"

const Container = styled.div`

`

const Title = styled.h1`
  margin: 20px;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  margin: 20px;

  ${mobile({ width: "0 20px", display: "flex", flexDirection: "column" })}
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

  ${mobile({ marginRight: "0px" })}
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  cursor: pointer;

  ${mobile({ margin: "10px 0" })}
`

const Option = styled.option`
  cursor: pointer;
`

const ProductList = () => {

  const location = useLocation()
  // Lấy đường dẫn ra
  // console.log(location.pathname.split("/")[2])
  const category = location.pathname.split("/")[2]

  const [filter, setFilter] = useState({})
  const [sort, setSort] = useState("Newest")

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value
    })
  }
  // console.log(filter)
  // console.log(sort)

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilter}>
            <Option disable>
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="Newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filter={filter} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
