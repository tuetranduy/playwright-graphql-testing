import { ApolloClient, DocumentNode, HttpLink, InMemoryCache } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

loadDevMessages();
loadErrorMessages();

const defaultOptions: ApolloClient.DefaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    },
    mutate: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    }
}

export class GraphQLClientManager {

    client = new ApolloClient({
        link: new HttpLink({ uri: process.env.GRAPHQL_ENDPOINT, fetch }),
        cache: new InMemoryCache(),
        defaultOptions: defaultOptions
    });


    async query<T>(query: DocumentNode, variables: Object): Promise<ApolloClient.QueryResult<T>> {
        try {
            return await this.client.query({
                query: query,
                variables: variables
            })
        } catch (error) {
            console.error("Error executing GraphQL query:", error);
            throw new Error("Failed to execute GraphQL query");
        }
    }

    async mutate<T>(query: DocumentNode, variables: Object): Promise<ApolloClient.MutateResult<T>> {
        try {
            return await this.client.mutate({
                mutation: query,
                variables: variables
            })
        } catch (error) {
            console.error("Error executing GraphQL mutation:", error);
            throw new Error("Failed to execute GraphQL mutation");
        }
    }
}

