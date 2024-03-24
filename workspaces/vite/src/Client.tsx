import { SWRConfig } from 'swr';

import { ClientApp } from '@wsh-2024/app/src/index';

const Client: React.FC = () => (
  <SWRConfig value={{ revalidateIfStale: true, revalidateOnFocus: false, revalidateOnReconnect: false }}>
    <ClientApp />
  </SWRConfig>
);

export { Client as default };
