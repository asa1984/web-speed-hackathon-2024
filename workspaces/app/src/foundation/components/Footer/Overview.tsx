import { OVERVIEW } from '../../constants/Overview';
import { Color, Space, Typography } from '../../styles/variables';
import { Spacer } from '../Spacer';
import { Text } from '../Text';

type Props = {
  id: string;
};

const Overview: React.FC<Props> = ({ id }: Props) => (
  <>
    <Text as="h2" color={Color.MONO_100} id={id} typography={Typography.NORMAL16}>
      Cyber TOONとは
    </Text>
    <Spacer height={Space * 1} />
    <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12}>
      {OVERVIEW}
    </Text>
  </>
);

export { Overview as default };
