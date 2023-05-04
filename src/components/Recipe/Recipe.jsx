import { RecipeInfo } from './Recipe';
import { Difficulty } from './Difficulty';
import { Title, Wrapper } from './Recipe.styled';

export const Recipe = ({
  recipe: { name, type, time, servings, calories, difficulty },
}) => {
  return (
    <Wrapper>
      <Title>{name}</Title>
      <RecipeInfo time={time} servings={servings} calories={calories} />

      <div>
        <h3>Difficulty</h3>
        <span>Easy</span>
        <span>Medium</span>
        <span>Hard</span>
      </div>
    </Wrapper>
  );
};
