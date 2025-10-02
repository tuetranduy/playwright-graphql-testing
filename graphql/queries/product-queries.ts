import { gql } from "../generated/gql";

export const GET_PRODUCTS = gql(`query GetProducts {
  products{
    name
    price
    categories {
      name
    }
  }
}`)

export const GET_PRODUCT_BY_ID = gql(`query GetProduct($id: ID!) {
  product(where: {id: $id}) {
    name
    price
  }
}`)