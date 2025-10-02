import test, { expect } from '../fixtures/all.fixture';
import { GetProductsQuery } from '../graphql/generated/graphql';
import { GET_PRODUCTS } from '../graphql/queries/product-queries';
import { productsResponseSchema } from '../schemas/products-schema';

test.describe('GraphQL API Tests with Zod Validation', () => {
  test('should fetch products and validate the response against the Zod schema', async ({ graphQLClientManager }) => {
    const response = await graphQLClientManager.query<GetProductsQuery>(GET_PRODUCTS, {})

    const validationResult = productsResponseSchema.safeParse(response);

    expect(validationResult.success, `Zod validation failed: ${validationResult.error?.message}`).toBe(true);
  });
});