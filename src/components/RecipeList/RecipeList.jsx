import { Recipe } from '../Recipe/Recipe';

export const RecipeList = ({ recipes }) => {
  return (
    <ul>
      {recipes.map((recipe, index) => (
        <li key={index}>
          <Recipe recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};
