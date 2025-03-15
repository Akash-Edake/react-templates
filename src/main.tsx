import * as ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router';
import App from './App';
import Layout from './common/layout/Dashboard';
import DashboardPage from './common/pages';
import OrdersPage from './common/pages/orders';
// import Layout from './layouts/dashboard';
// import DashboardPage from './pages';
// import OrdersPage from './pages/orders';

const router = createHashRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '',
            Component: DashboardPage,
          },
          {
            path: 'orders',
            Component: OrdersPage,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
  </>,
);
