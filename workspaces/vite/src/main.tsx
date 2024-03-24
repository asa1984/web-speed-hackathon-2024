import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { ClientApp as Client } from '@wsh-2024/app/src/index';
// import { AdminApp as Admin } from '@wsh-2024/admin/src/index';
const Client = React.lazy(() => import('./Client'));
const Admin = React.lazy(() => import('./Admin'));

import { registerServiceWorker } from './utils/registerServiceWorker';

const main = async () => {
  await registerServiceWorker();

  const root = ReactDOM.createRoot(document.getElementById('root')!);

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <React.Suspense>
          <Routes>
            <Route element={<Client />} path="/" />
            <Route element={<Admin />} path="/admin" />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </React.StrictMode>,
  );
};

main().catch(console.error);
