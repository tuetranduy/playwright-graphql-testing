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