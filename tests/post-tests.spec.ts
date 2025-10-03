import { validateResponse } from "../core/helpers/validation-helpers";
import test, { expect } from "../fixtures/all.fixture";
import { GET_POST_BY_ID_QUERY, GET_POSTS_QUERY } from "../graphql/queries/posts-queries";
import { getPostResponseSchema, getPostsResponseSchema } from "../schemas/post-schemas";
import * as postTestData from "../resources/test-data/post.json";
import { GetPostByIdQuery } from "../graphql/generated/graphql";

test.describe('Posts GraphQL Tests', () => {
    test('should fetch all posts and validate response schema', async ({ graphQLClientManager }) => {
        const response = await graphQLClientManager.query(GET_POSTS_QUERY, {});
        const isSchemaValid = validateResponse(getPostsResponseSchema, response);

        expect(isSchemaValid).toBe(true);
    });

    test('should fetch a post by ID and validate response schema', async ({ graphQLClientManager }) => {
        const postId = postTestData.id;
        const response = await graphQLClientManager.query<GetPostByIdQuery>(GET_POST_BY_ID_QUERY, { id: postId });
        const isSchemaValid = validateResponse(getPostResponseSchema, response);

        expect(isSchemaValid).toBe(true);

        expect(response.data?.post?.id).toBe(postId);
        expect(response.data?.post?.title).toBe(postTestData.title);
        expect(response.data?.post?.body).toBe(postTestData.body);
        expect(response.data?.post?.author.name).toBe(postTestData.author.name);
        expect(response.data?.post?.author.email).toBe(postTestData.author.email);
        expect(response.data?.post?.comments?.length).toBe(postTestData.comments.length);
        expect(response.data?.post?.comments?.[0].text).toBe(postTestData.comments[0].text);
    });
});