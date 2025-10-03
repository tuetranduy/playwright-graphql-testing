import { gql } from "../generated/gql";

export const GET_USERS_QUERY = gql(`query GetUsers {
  users {
    id
    name
    email
    posts {
      title
    }
    comments {
      text
    }
  }
}`)