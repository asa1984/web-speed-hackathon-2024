import { useId } from 'react';
import styled from 'styled-components';

import { FeatureList } from '../../features/feature/components/FeatureList';
import { RankingList } from '../../features/ranking/components/RankingList';
import { ReleaseList } from '../../features/release/components/ReleaseList';
import { Box } from '../../foundation/components/Box';
import { Flex } from '../../foundation/components/Flex';
import { Spacer } from '../../foundation/components/Spacer';
import { Text } from '../../foundation/components/Text';
import { Color, Space, Typography } from '../../foundation/styles/variables';
import { Container } from '../../foundation/components/Container';
import { Footer } from '../../foundation/components/Footer';

import { CoverSection } from './internal/CoverSection';

const TopPage: React.FC = () => {
  const pickupA11yId = useId();
  const rankingA11yId = useId();
  const todayA11yId = useId();

  return (
    <Flex align="flex-start" direction="column" gap={Space * 2} justify="center" pb={Space * 2}>
      <Box as="header" maxWidth="100%" width="100%">
        <CoverSection />
      </Box>
      <Box as="main" maxWidth="100%" width="100%">
        <Box aria-labelledby={pickupA11yId} as="section" maxWidth="100%" mt={16} width="100%">
          <Text as="h2" color={Color.MONO_100} id={pickupA11yId} typography={Typography.NORMAL20} weight="bold">
            ピックアップ
          </Text>
          <Spacer height={Space * 2} />
          <Box maxWidth="100%" overflowX="scroll" overflowY="hidden">
            <FeatureList />
          </Box>
        </Box>

        <Spacer height={Space * 2} />

        <Box aria-labelledby={rankingA11yId} as="section" maxWidth="100%" width="100%">
          <Text as="h2" color={Color.MONO_100} id={rankingA11yId} typography={Typography.NORMAL20} weight="bold">
            ランキング
          </Text>
          <Spacer height={Space * 2} />
          <Box maxWidth="100%" overflowX="hidden" overflowY="hidden">
            <RankingList />
          </Box>
        </Box>

        <Spacer height={Space * 2} />

        <Box aria-labelledby={todayA11yId} as="section" maxWidth="100%" width="100%">
          <Text as="h2" color={Color.MONO_100} id={todayA11yId} typography={Typography.NORMAL20} weight="bold">
            本日更新
          </Text>
          <Spacer height={Space * 2} />
          <Box maxWidth="100%" overflowX="scroll" overflowY="hidden">
            <ReleaseList />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

const _LayoutContent = styled.div`
  height: 100%;
  padding: 0 ${Space * 2}px;
`;

const TopPageWithCommonLayout: React.FC = () => {
  return (
    <Container>
      <_LayoutContent>
        <TopPage />
      </_LayoutContent>
      <Footer />
    </Container>
  );
};

export { TopPageWithCommonLayout as default };
