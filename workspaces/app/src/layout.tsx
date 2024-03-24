import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SWRConfig } from 'swr';

import { Dialog } from './foundation/components/Dialog';
import { GlobalStyle } from './foundation/styles/GlobalStyle';

export const Layout: React.FC = () => {
  return (
    <SWRConfig value={{ revalidateIfStale: true, revalidateOnFocus: false, revalidateOnReconnect: false }}>
      <GlobalStyle />
      <Dialog />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </SWRConfig>
  );
};
