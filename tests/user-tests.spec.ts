import test, { expect } from '../fixtures/all.fixture';
import { validateResponse } from '../core/helpers/validation-helpers';
import { GET_USERS_QUERY } from '../graphql/queries/users-queries';
import { usersResponseSchema } from '../schemas/user-schemas';

test.describe('GraphQL API Tests with Zod Validation', () => {
  test('should fetch all users and validate response schema', async ({ graphQLClientManager }) => {
    const response = await graphQLClientManager.query(GET_USERS_QUERY, {});
    const isSchemaValid = validateResponse(usersResponseSchema, response);

    expect(isSchemaValid).toBe(true);
  });
});