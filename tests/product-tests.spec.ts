import test, { expect } from '../fixtures/all.fixture';
import { GetProductQuery, GetProductsQuery } from '../graphql/generated/graphql';
import { GET_PRODUCT_BY_ID, GET_PRODUCTS } from '../graphql/queries/product-queries';
import { productResponseSchema, productsResponseSchema } from '../schemas/products-schema';
import productData from '../resources/test-data/product.json';

test.describe('GraphQL API Tests with Zod Validation', () => {
  test('should fetch products and validate the response against the Zod schema', async ({ graphQLClientManager }) => {
    const response = await graphQLClientManager.query<GetProductsQuery>(GET_PRODUCTS, {})

    const validationResult = productsResponseSchema.safeParse(response);

    expect(validationResult.success, `Zod validation failed: ${validationResult.error?.message}`).toBe(true);
  });

  test('should return correct product information', async ({ graphQLClientManager }) => {
    const response = await graphQLClientManager.query<GetProductQuery>(GET_PRODUCT_BY_ID, { id: productData.id });

    const validationResult = productResponseSchema.safeParse(response);

    expect(validationResult.success, `Zod validation failed: ${validationResult.error?.message}`).toBe(true);
    expect(response.data?.product).toBeDefined();
    expect(response.data?.product?.name).toBe(productData.name);
    expect(response.data?.product?.price).toBe(productData.price);
  });
});