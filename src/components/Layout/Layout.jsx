import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { tokenSelector } from 'redux/auth/authSelectors';

import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Layout = () => {
  const isToken = useSelector(tokenSelector);
  return (
    <>
      <header>
        <Navigation />
        {isToken ? <UserMenu /> : <AuthNavigation />}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
