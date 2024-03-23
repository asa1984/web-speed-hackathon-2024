import { createRoot } from 'react-dom/client';

import { AdminApp } from '@wsh-2024/admin/src/index';

import { registerServiceWorker } from './utils/registerServiceWorker';

const main = async () => {
  await registerServiceWorker();

  const root = document.getElementById('root')!;
  createRoot(root).render(<AdminApp />);
};

main().catch(console.error);
