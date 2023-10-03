import axios from "axios";

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: "Bearer v6VchVXG1kvlqzyeIlJv05etGIef6HQ3bjdrwqQbwJhc97H6t-SzzAVfDuzsiO8pGC3TdkP_-HcSmEPl4xT7Sh4ZBy4ecs9Gl2ENEqYKYH0R3vTYD3o7GHRUVzccZXYx"
  }
})