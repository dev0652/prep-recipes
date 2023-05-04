import { HiChartPie, HiChartBar } from 'react-icons/hi';
import { TbAlarm } from 'react-icons/tb';
import { InfoBlock, Wrapper } from './RecipeInfo.styled';

export const RecipeInfo = ({ time, servings, calories }) => {
  return (
    <Wrapper>
      <InfoBlock>
        <TbAlarm />
        {time} min
      </InfoBlock>
      <InfoBlock>
        <HiChartPie />
        {servings} servings
      </InfoBlock>
      <InfoBlock>
        <HiChartBar />
        {calories} calories
      </InfoBlock>
    </Wrapper>
  );
};
