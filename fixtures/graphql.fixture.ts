import { GraphQLClientManager } from "../core/apis/graphql-client-manager";
import { test as base } from '@playwright/test';

export type GraphQLFixtures = {
    graphQLClientManager: GraphQLClientManager;
}

type ExtendParams = Parameters<typeof base.extend<GraphQLFixtures>>;

export const graphQLFixtures: ExtendParams[0] = {
    graphQLClientManager: async ({ }, use) => {
        const clientManager = new GraphQLClientManager();
        await use(clientManager);
    }
}

export { expect } from '@playwright/test';