import { Outlet } from 'react-router';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';

export default function Layout() {
  return (
    <DashboardLayout>
      <PageContainer sx={{ m: 0 }} title='' >
        <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
}
