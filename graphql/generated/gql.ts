/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "query GetPosts {\n  posts {\n    id\n    title\n    body\n    author {\n      id\n      name\n      email\n    }\n    comments {\n      id\n      text\n    }\n  }\n}": typeof types.GetPostsDocument,
    "query GetPostById($id: ID!) {\n  post(id: $id) {\n    id\n    title\n    body\n    author {\n      id\n      name\n      email\n    }\n    comments {\n      id\n      text\n    }\n  }\n}": typeof types.GetPostByIdDocument,
    "query GetUsers {\n  users {\n    id\n    name\n    email\n    posts {\n      title\n    }\n    comments {\n      text\n    }\n  }\n}": typeof types.GetUsersDocument,
};
const documents: Documents = {
    "query GetPosts {\n  posts {\n    id\n    title\n    body\n    author {\n      id\n      name\n      email\n    }\n    comments {\n      id\n      text\n    }\n  }\n}": types.GetPostsDocument,
    "query GetPostById($id: ID!) {\n  post(id: $id) {\n    id\n    title\n    body\n    author {\n      id\n      name\n      email\n    }\n    comments {\n      id\n      text\n    }\n  }\n}": types.GetPostByIdDocument,
    "query GetUsers {\n  users {\n    id\n    name\n    email\n    posts {\n      title\n    }\n    comments {\n      text\n    }\n  }\n}": types.GetUsersDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetPosts {\n  posts {\n    id\n    title\n    body\n    author {\n      id\n      name\n      email\n    }\n    comments {\n      id\n      text\n    }\n  }\n}"): (typeof documents)["query GetPosts {\n  posts {\n    id\n    title\n    body\n    author {\n      id\n      name\n      email\n    }\n    comments {\n      id\n      text\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetPostById($id: ID!) {\n  post(id: $id) {\n    id\n    title\n    body\n    author {\n      id\n      name\n      email\n    }\n    comments {\n      id\n      text\n    }\n  }\n}"): (typeof documents)["query GetPostById($id: ID!) {\n  post(id: $id) {\n    id\n    title\n    body\n    author {\n      id\n      name\n      email\n    }\n    comments {\n      id\n      text\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetUsers {\n  users {\n    id\n    name\n    email\n    posts {\n      title\n    }\n    comments {\n      text\n    }\n  }\n}"): (typeof documents)["query GetUsers {\n  users {\n    id\n    name\n    email\n    posts {\n      title\n    }\n    comments {\n      text\n    }\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;