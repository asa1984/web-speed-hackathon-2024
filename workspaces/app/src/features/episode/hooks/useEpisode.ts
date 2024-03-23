import useSWR from 'swr';

import { episodeApiClient } from '../apiClient/episodeApiClient';

export type Episode = Awaited<ReturnType<typeof episodeApiClient.fetch>>;
export function useEpisode(...[options]: Parameters<typeof episodeApiClient.fetch>) {
  return useSWR(episodeApiClient.fetch$$key(options), episodeApiClient.fetch, { suspense: true });
}
