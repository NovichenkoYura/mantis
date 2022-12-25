import { locations } from 'constans/locations';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout } from './Layout';
// import { Layout } from './Layout';

export const ComponentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={locations.dashboard.path} element={locations.dashboard.component} />
        <Route path={locations.login.path} element={locations.login.component} />
      </Route>
    </Routes>
  );
};
