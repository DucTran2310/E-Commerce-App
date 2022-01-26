import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'

import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core';

import { mobile } from "../reponsive"
import { logoutFailure, logoutSuccess, userSelector } from '../redux/userRedux';
import { logout } from "../redux/apiCalls"

const Container = styled.div`
  height: 60px;

  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ padding: "10px 0" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.span`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;

  ${mobile({ width: "50px" })}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;

  ${mobile({ fontSize: "24px" })}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 25px;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {

  const [search, setSearch] = useState("")

  // useSelector lấy state từ redux store
  const cart = useSelector(state => state.cart)
  const quatity = useSelector(state => state.cart.quantity)
  // console.log(cart)
  // console.log(quatity)
  const navigate = useNavigate()

  // return về một tham chiếu đến dispatch function từ Redux store 
  // và được sử dụng để dispatch các action
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutSuccess())
    navigate("/")
  }

  const handleSearch = (e) => {
    navigate(`/products/${search}`)
    setSearch("")
  }

  const currentUser = useSelector(userSelector)
  console.log(currentUser)

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input
              placeholder="Search type clothes"
              value={search}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search
              style={{ color: "gray", fontSize: 16 }}
              onClick={handleSearch}
            />
          </SearchContainer>
        </Left>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <Center><Logo>ADSTAR.</Logo></Center>
        </Link>
        <Right>
          {!currentUser ?
            <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>
              <MenuItem>REGISTER</MenuItem>
            </Link>
            :
            <button style={{ border: 'none', color: 'black', background: "white", fontSize: "14px", paddingTop: "5px", fontWeight: "800" }} onClick={handleLogout} >
              LOGOUT
            </button>
          }
          {!currentUser ?
            <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
              <MenuItem>SIGN IN</MenuItem>
            </Link>
            :
            <p style={{ marginLeft: "20px", fontSize: "18px" }}>{currentUser.username}</p>
          }
          <Link to="/cart">
            {currentUser ?
              <MenuItem>
                <Badge badgeContent={quatity} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
              :
              <MenuItem>
                <ShoppingCartOutlined />
              </MenuItem>
            }
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
