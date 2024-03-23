import { QUESTION } from '../../constants/Question';
import { Color, Space, Typography } from '../../styles/variables';
import { Spacer } from '../Spacer';
import { Text } from '../Text';

type Props = {
  id: string;
};

const Question: React.FC<Props> = ({ id }: Props) => (
  <>
    <Text as="h2" color={Color.MONO_100} id={id} typography={Typography.NORMAL16}>
      Q&A
    </Text>
    <Spacer height={Space * 1} />
    <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12}>
      {QUESTION}
    </Text>
  </>
);

export { Question as default };
