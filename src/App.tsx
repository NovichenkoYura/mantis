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

const queryClient = new QueryClient();

export const App = () => {
  return (
    <>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <ComponentRoutes />

          {/* <Example /> */}
          {/* <ExampleСurrency /> */}
        </QueryClientProvider>
      </div>
    </>
  );
};
