import React from 'react';
import './App.css';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from 'react-query';
import { Example } from 'components/example';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Example />
      </QueryClientProvider>
    </div>
  );
};
