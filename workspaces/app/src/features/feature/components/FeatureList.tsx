import { Suspense } from 'react';

import { Flex } from '../../../foundation/components/Flex';
import { Space } from '../../../foundation/styles/variables';
import { useFeatureList } from '../hooks/useFeatureList';

import { FeatureCard } from './FeatureCard';

const FeatureList: React.FC = () => {
  const { data: featureList } = useFeatureList({ query: {} });
  return (
    <>
      {featureList.map((feature) => (
        <FeatureCard key={feature.id} book={feature.book} />
      ))}
    </>
  );
};

const FeatureListWithSuspense: React.FC = () => {
  return (
    <Flex align="stretch" direction="row" gap={Space * 2} justify="flex-start">
      <Suspense fallback={null}>
        <FeatureList />
      </Suspense>
    </Flex>
  );
};

export { FeatureListWithSuspense as FeatureList };
