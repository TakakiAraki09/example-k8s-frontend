import type { CodegenConfig } from '@graphql-codegen/cli';

const graphqlEndpoint = 'http://localhost:8080/query';

const config = {
  schema: {
    [graphqlEndpoint]: {
    },
  },
  documents: ['./components/**/*.ts', './components/**/*.tsx'],
  ignoreNoDocuments: true,
  generates: {
    'schema.generated.json': {
      plugins: ['introspection'],
    },
    'generated/gql/': {
      preset: 'client',
      config: {
        useTypeImports: true,
      },
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
} as const satisfies CodegenConfig;

export default config;
