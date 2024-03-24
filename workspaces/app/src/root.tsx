import { ArrowBack } from '@mui/icons-material';
import { lazy } from 'react';
import { type RouteObject } from 'react-router-dom';
import { styled } from 'styled-components';

import { Link } from './foundation/components/Link';
import { Text } from './foundation/components/Text';
import { ActionLayout } from './foundation/layouts/ActionLayout';
import { Color, Space, Typography } from './foundation/styles/variables';
import { Layout } from './layout';

const AuthorDetailPage = lazy(() => import('./pages/AuthorDetailPage'));
const BookDetailPage = lazy(() => import('./pages/BookDetailPage'));
const EpisodeDetailPage = lazy(() => import('./pages/EpisodeDetailPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const TopPage = lazy(() => import('./pages/TopPage'));

const _BackToTopButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${Space * 1}px;
  border: none;
  background-color: transparent;
`;

export const clientRouter: RouteObject[] = [
  {
    element: <Layout />,
    path: '/',
    children: [
      {
        element: <TopPage />,
        path: '',
      },
      {
        element: (
          <ActionLayout
            leftContent={
              <_BackToTopButton href={'/'}>
                <ArrowBack style={{ color: Color.MONO_100, height: 32, width: 32 }} />
                <Text color={Color.MONO_100} typography={Typography.NORMAL16} weight="bold">
                  トップへ戻る
                </Text>
              </_BackToTopButton>
            }
          />
        ),
        path: '',
        children: [
          {
            element: <BookDetailPage />,
            path: 'books/:bookId',
          },
          {
            element: <EpisodeDetailPage />,
            path: 'books/:bookId/episodes/:episodeId',
          },
          {
            element: <AuthorDetailPage />,
            path: 'authors/:authorId',
          },
          {
            element: <SearchPage />,
            path: 'search',
          },
        ],
      },
    ],
  },
];
