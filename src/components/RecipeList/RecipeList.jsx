import PropTypes from 'prop-types';
import { Recipe } from '../Recipe/Recipe';
import { Card, CardList } from './RecipeList.styled';

export const RecipeList = ({ recipes }) => {
  return (
    <CardList>
      {recipes.map((recipe, index) => (
        <Card key={index}>
          <Recipe recipe={recipe} />
        </Card>
      ))}
    </CardList>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
