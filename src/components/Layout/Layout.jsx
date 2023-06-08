import { Outlet } from 'react-router-dom';

import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
        <AuthNavigation />
        <UserMenu />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
