import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    },
    mutations: {}
  }
});

export const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Todos />
      </QueryClientProvider>
    </div>
  );
};
