import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import { ClientApp as Client } from '@wsh-2024/app/src/index';
// import { AdminApp as Admin } from '@wsh-2024/admin/src/index';
// const Client = React.lazy(() => import('./Client'));
// const Admin = React.lazy(() => import('./Admin'));
import { adminRouter } from '@wsh-2024/admin/src/root';
import { clientRouter } from '@wsh-2024/app/src/root';

import { registerServiceWorker } from './utils/registerServiceWorker';

const router = createBrowserRouter([...clientRouter, ...adminRouter]);

const main = async () => {
  await registerServiceWorker();

  const root = ReactDOM.createRoot(document.getElementById('root')!);

  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
};

main().catch(console.error);
