import axios from "axios";

const BASE_URL = "http://localhost:8080/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTQyNDQzNjBiNDY4N2NlOTgzMjRiYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjQ5NDI3MCwiZXhwIjoxNjQyNzUzNDcwfQ.W7kmNSFp1WRI5exvI2JirrnuWVqY4gjfJgRdpJEdW2I"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` }
})