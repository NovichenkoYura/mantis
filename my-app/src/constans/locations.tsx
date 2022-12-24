import { DashBoardModule } from 'components/modules/DashBoardModule';
import { LoginModule } from 'components/modules/LoginModule';

export const locations = {
  main: { path: '/dashboard', component: <DashBoardModule /> },
  login: { path: '/log_in', component: <LoginModule /> }
};
