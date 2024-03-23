import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import type { RouteParams } from 'regexparam';
import invariant from 'tiny-invariant';

import { EpisodeListItem } from '../../features/episode/components/EpisodeListItem';
import { useEpisodeList } from '../../features/episode/hooks/useEpisodeList';
import { Box } from '../../foundation/components/Box';
import { Flex } from '../../foundation/components/Flex';
import { Separator } from '../../foundation/components/Separator';
import { Space } from '../../foundation/styles/variables';

import { ComicViewer } from './internal/ComicViewer';

const EpisodeList: React.FC<{ bookId: string }> = ({ bookId }) => {
  const { data: episodeList } = useEpisodeList({ query: { bookId } });
  return (
    <>
      {episodeList.map((episode) => (
        <EpisodeListItem key={episode.id} episode={episode} />
      ))}
    </>
  );
};

const EpisodeDetailPage: React.FC = () => {
  const { bookId, episodeId } = useParams<RouteParams<'/books/:bookId/episodes/:episodeId'>>();
  invariant(bookId);
  invariant(episodeId);

  return (
    <Box>
      <section aria-label="漫画ビューアー">
        <ComicViewer episodeId={episodeId} />
      </section>

      <Separator />

      <Box aria-label="エピソード一覧" as="section" px={Space * 2}>
        <Flex align="center" as="ul" direction="column" justify="center">
          <Suspense>
            <EpisodeList bookId={bookId} />
          </Suspense>
        </Flex>
      </Box>
    </Box>
  );
};

const EpisodeDetailPageWithSuspense: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <EpisodeDetailPage />
    </Suspense>
  );
};

export { EpisodeDetailPageWithSuspense as default };
