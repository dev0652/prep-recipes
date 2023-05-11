import React, { Component } from 'react';
import { RecipeInfo } from '../RecipeInfo/RecipeInfo';
import { Difficulty } from '../Difficulty/Difficulty';
import { Image, Title, Wrapper } from './Recipe.styled';

export class Recipe extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    const {
      recipe: {
        name,
        time,
        servings,
        calories,
        difficulty,
        image = 'https://via.placeholder.com/340x200',
      },
    } = this.props;
    return (
      <Wrapper>
        <Image src={image} alt={name} onClick={this.toggle} />
        <Title>{name}</Title>
        {isOpen && (
          <>
            <RecipeInfo time={time} servings={servings} calories={calories} />
            <Difficulty difficulty={difficulty} />
          </>
        )}
      </Wrapper>
    );
  }
}
