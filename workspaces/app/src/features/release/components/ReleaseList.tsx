import moment from 'moment-timezone';
import { Suspense } from 'react';

import { Flex } from '../../../foundation/components/Flex';
import { Space } from '../../../foundation/styles/variables';
import { getDayOfWeekStr } from '../../../lib/date/getDayOfWeekStr';
import { BookCardPresenter } from '../../book/components/BookCard';
import { useRelease } from '../hooks/useRelease';

const ReleaseList: React.FC = () => {
  const todayStr = getDayOfWeekStr(moment());
  const { data: release } = useRelease({ params: { dayOfWeek: todayStr } });
  return (
    <>
      {release.books.map((book) => (
        <BookCardPresenter key={book.id} book={book} />
      ))}
    </>
  );
};

const ReleaseListWithSuspense: React.FC = () => {
  return (
    <Flex align="stretch" gap={Space * 2} justify="flex-start">
      <Suspense>
        <ReleaseList />
      </Suspense>
    </Flex>
  );
};

export { ReleaseListWithSuspense as ReleaseList };
