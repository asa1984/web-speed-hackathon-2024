import { lazy } from 'react';
import { Navigate, Outlet, type RouteObject } from 'react-router-dom';

import { useAuthUser } from './features/auth/hooks/useAuthUser';
import { Layout } from './layout';

const AuthPage = lazy(() => import('./pages/AuthPage'));
const AuthorListPage = lazy(() => import('./pages/AuthorListPage'));
const BookListPage = lazy(() => import('./pages/BookListPage'));
const EpisodeCreatePage = lazy(() => import('./pages/EpisodeCreatePage'));
const EpisodeDetailPage = lazy(() => import('./pages/EpisodeDetailPage'));

const AuthGuard = () => {
  const { data: user } = useAuthUser();
  return user == null ? <Navigate to="/admin" /> : <Outlet />;
};

export const adminRouter: RouteObject[] = [
  {
    element: <Layout />,
    path: '/admin',
    children: [
      {
        element: <AuthPage />,
        path: '',
      },
      {
        element: <AuthGuard />,
        path: '',
        children: [
          {
            element: <AuthorListPage />,
            path: 'authors',
          },
          {
            element: <BookListPage />,
            path: 'books',
          },
          {
            element: <EpisodeDetailPage />,
            path: 'books/:bookId/episodes/:episodeId',
          },
          {
            element: <EpisodeCreatePage />,
            path: 'books/:bookId/episodes/new',
          },
        ],
      },
    ],
  },
];
