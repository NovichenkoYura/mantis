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
import { ComponentRoutes } from 'components/componentRoutes';
import { useAppDispatch } from 'api/hooks';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMemo } from 'react';
import { loginThunk } from 'store/usersSlice';
interface formProps {
  login?: string;
  password?: string;
}

const queryClient = new QueryClient();

export const App: React.FC<formProps> = () => {
  const dispatch = useAppDispatch();

  const validationSchema = useMemo(() => {
    return Yup.object({
      login: Yup.string().required('Required'),
      password: Yup.string().min(5).max(500).required('Required')
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      login: '',
      password: ''
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dispatch(
        loginThunk({
          login: values.login,
          password: values.password
        })
      );
      resetForm();
    },
    validationSchema
  });
  return (
    <>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <ComponentRoutes />

          {/* <Example /> */}
        </QueryClientProvider>
      </div>

      <form onSubmit={formik.handleSubmit} className="registrationForm__container logIn">
        <div className="formik-form">
          <input
            id="login"
            name="login"
            onChange={formik.handleChange}
            value={formik.values.login}
            className="formik-input"
            placeholder="Your email..."
          />
          <p className="formik-errors-message">{formik.errors.login}</p>

          <input
            id="name"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="formik-input"
            placeholder="Your password..."
          />
          <p className="formik-errors-message">{formik.errors.password}</p>

          <button type="submit" className="main__button">
            Log in
          </button>
        </div>
      </form>
    </>
  );
};
