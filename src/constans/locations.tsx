import { DashBoardModule } from 'components/modules/DashBoardModule';
import { LoginModule } from 'components/modules/LoginModule';
import { StartPageModule } from 'components/modules/StartPageModule';

export const locations = {
  startpage: { path: '/startpage', component: <StartPageModule /> },
  dashboard: { path: '/dashboard', component: <DashBoardModule /> },
  login: { path: '/log_in', component: <LoginModule /> }
};
