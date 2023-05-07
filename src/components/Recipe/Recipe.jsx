import { RecipeInfo } from '../RecipeInfo/RecipeInfo';
import { Difficulty } from '../Difficulty/Difficulty';
import { Title, Wrapper } from './Recipe.styled';

export const Recipe = ({
  recipe: { name, type, time, servings, calories, difficulty },
}) => {
  return (
    <Wrapper>
      <Title>{name}</Title>
      <RecipeInfo time={time} servings={servings} calories={calories} />
      <Difficulty difficulty={difficulty} />
    </Wrapper>
  );
};
