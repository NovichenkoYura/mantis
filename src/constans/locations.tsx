import { DashBoardModule } from 'components/modules/DashBoardModule';
import { GoodsModule } from 'components/modules/GoodsModule';
import { LoginModule } from 'components/modules/LoginModule';
import { StartPageModule } from 'components/modules/StartPageModule';

export const locations = {
  startpage: { path: '/startpage', component: <StartPageModule /> },
  dashboard: { path: '/dashboard', component: <DashBoardModule /> },
  login: { path: '/log_in', component: <LoginModule /> },
  goods: { path: '/goods', component: <GoodsModule /> }
};
