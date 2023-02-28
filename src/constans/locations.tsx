import { DashBoardPage } from 'pages/DashBoardPage';
import { GoodsPage } from 'pages/GoodsPage';
import { LoginPage } from 'pages/LoginPage';
import { StartPage } from 'pages/StartPage';

export const locations = {
  startpage: { path: '/startpage', component: <StartPage /> },
  dashboardpage: { path: '/dashboardpage', component: <DashBoardPage /> },
  login: { path: '/log_in', component: <LoginPage /> },
  goods: { path: '/goods', component: <GoodsPage /> }
};
