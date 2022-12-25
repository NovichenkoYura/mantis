import React from 'react';
import './App.css';
// import { ComponentRoutes } from './components/';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from 'react-query';
import { Example } from 'components/example';
import { ComponentRoutes } from 'components/componentRoutes';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ComponentRoutes />

        <Example />
      </QueryClientProvider>
    </div>
  );
};

// export const App = () => {
//   return (
//     <div className="App">
//       <QueryClientProvider client={queryClient}>
//         <ComponentRoutes />

//         <Example />
//       </QueryClientProvider>
//     </div>
//   );
// };
