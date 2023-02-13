import React from 'react';
import 'App.css';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from 'react-query';
import { Example } from 'components/example';
import { ExampleСurrency, Stock } from './api/currencyQuerry/currencyQuerry';

import { ComponentRoutes } from 'components/componentRoutes';
import { useAppDispatch } from 'api/hooks';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMemo } from 'react';
import { loginThunk } from 'store/usersSlice';
import { Accordeon } from 'components/Accordeon/Accordeon';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <ComponentRoutes />
          {/* <Accordeon /> */}

          {/* <Example /> */}
          {/* <ExampleСurrency /> */}
        </QueryClientProvider>
      </div>
    </>
  );
};
