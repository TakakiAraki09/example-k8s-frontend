import type { CodegenConfig } from '@graphql-codegen/cli';
import { GRAPHQL_ENDPOINT } from './constants';


const config = {
  schema: {
    [GRAPHQL_ENDPOINT]: {
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
