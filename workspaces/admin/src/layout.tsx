import { ChakraProvider, useToast } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { Suspense, useEffect } from 'react';

import { CommonLayout } from './foundation/layouts/CommonLayout';
import { queryClient } from './lib/api/queryClient';

export const Layout: React.FC = () => {
  const toast = useToast();

  useEffect(() => {
    const mutationCache = queryClient.getMutationCache();
    const onError = mutationCache.config.onError?.bind(mutationCache.config);

    queryClient.getMutationCache().config.onError = (...args) => {
      toast({
        duration: 1000,
        isClosable: true,
        status: 'error',
        title: 'リクエストの処理に失敗しました',
      });
      onError?.(...args);
    };

    return () => {
      queryClient.getMutationCache().config.onError = onError;
    };
  }, [toast]);

  return (
    <Suspense fallback={null}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <CommonLayout />
        </ChakraProvider>
      </QueryClientProvider>
    </Suspense>
  );
};
