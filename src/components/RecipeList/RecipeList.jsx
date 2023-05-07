import PropTypes from 'prop-types';
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

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
