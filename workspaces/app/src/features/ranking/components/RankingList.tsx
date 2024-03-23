import { Suspense } from 'react';

import { Flex } from '../../../foundation/components/Flex';
import { useRankingList } from '../hooks/useRankingList';

import { RankingCard } from './RankingCard';

const RankingList: React.FC = () => {
  const { data: rankingList } = useRankingList({ query: {} });
  return (
    <>
      {rankingList.map((ranking) => (
        <RankingCard key={ranking.id} book={ranking.book} />
      ))}
    </>
  );
};

const RankingListWithSuspense: React.FC = () => {
  return (
    <Flex align="center" as="ul" direction="column" justify="center">
      <Suspense>
        <RankingList />
      </Suspense>
    </Flex>
  );
};

export { RankingListWithSuspense as RankingList };
