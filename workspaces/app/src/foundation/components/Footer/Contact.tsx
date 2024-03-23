import { CONTACT } from '../../constants/Contact';
import { Color, Space, Typography } from '../../styles/variables';
import { Spacer } from '../Spacer';
import { Text } from '../Text';

type Props = {
  id: string;
};

const Contact: React.FC<Props> = ({ id }: Props) => (
  <>
    <Text as="h2" color={Color.MONO_100} id={id} typography={Typography.NORMAL16}>
      お問い合わせ
    </Text>
    <Spacer height={Space * 1} />
    <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12}>
      {CONTACT}
    </Text>
  </>
);

export { Contact as default };
