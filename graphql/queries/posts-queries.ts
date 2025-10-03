import { gql } from "../generated/gql";

export const GET_POSTS_QUERY = gql(`query GetPosts {
  posts {
    id
    title
    body
    author {
      id
      name
      email
    }
    comments {
      id
      text
    }
  }
}`)

export const GET_POST_BY_ID_QUERY = gql(`query GetPostById($id: ID!) {
  post(id: $id) {
    id
    title
    body
    author {
      id
      name
      email
    }
    comments {
      id
      text
    }
  }
}`)