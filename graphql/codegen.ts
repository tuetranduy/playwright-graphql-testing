import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    overwrite: true,
    schema: [
        process.env.GRAPHQL_ENDPOINT || "",
    ],
    documents: ["graphql/queries/*.ts"],
    ignoreNoDocuments: true,
    generates: {
        "./graphql/generated/": {
            preset: "client",
            presetConfig: {
                gqlTagName: "gql",
            }
        },
        './schema.graphql': {
            plugins: ['schema-ast'],
            config: {
                gqlTagName: "gql",
                includeDirectives: true
            }
        }
    },
};

export default config;