import useSWR from 'swr';

import { featureApiClient } from '../apiClient/featureApiClient';

export type FeatureList = Awaited<ReturnType<typeof featureApiClient.fetchList>>;
export function useFeatureList(...[options]: Parameters<typeof featureApiClient.fetchList>) {
  return useSWR(featureApiClient.fetchList$$key(options), featureApiClient.fetchList, { suspense: true });
}
