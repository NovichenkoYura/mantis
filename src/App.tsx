import React from 'react';
import 'App.css';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from 'react-query';
import { ExampleСurrency } from './api/currencyQuerry/currencyQuerry';

import { ComponentRoutes } from 'components/componentRoutes';
import QueryParamProvider from 'use-query-params/dist/QueryParamProvider';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <>
      <div className="App">
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <QueryClientProvider client={queryClient}>
            <ComponentRoutes />

            {/* <Example /> */}
            {/* <ExampleСurrency /> */}
          </QueryClientProvider>
        </QueryParamProvider>
      </div>
    </>
  );
};
