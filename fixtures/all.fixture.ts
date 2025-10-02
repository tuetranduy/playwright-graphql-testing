import { test as baseTest } from '@playwright/test';
import { GraphQLFixtures, graphQLFixtures } from './graphql.fixture';

const test = baseTest.extend<GraphQLFixtures>({
    ...graphQLFixtures,
});

export default test;
export const expect = test.expect;