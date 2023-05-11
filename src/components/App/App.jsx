import { RecipeList } from '../RecipeList/RecipeList';
import recipes from '../../recipes.json';
import { Wrapper } from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <RecipeList recipes={recipes} />
    </Wrapper>
  );
};
