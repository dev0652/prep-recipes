import { Badge, BadgeList, Title, Wrapper } from './Difficulty.styled';

export const Difficulty = ({ difficulty }) => {
  return (
    <Wrapper>
      <Title>Difficulty</Title>
      <BadgeList>
        <Badge key="easy" active={difficulty === 'easy'}>
          Easy
        </Badge>
        <Badge key="medium" active={difficulty === 'medium'}>
          Medium
        </Badge>
        <Badge key="hard" active={difficulty === 'hard'}>
          Hard
        </Badge>
      </BadgeList>
    </Wrapper>
  );
};
