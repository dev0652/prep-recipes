import { HiChartPie, HiChartBar } from 'react-icons/hi';
import { TbAlarm } from 'react-icons/tb';

export const Recipe = ({
  recipe: { name, type, time, servings, calories },
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <div>
          <TbAlarm />
          <p>{time} min</p>
        </div>
        <div>
          <HiChartPie />
          <p>{servings} servings</p>
        </div>
        <div>
          <HiChartBar />
          <p>{calories} calories</p>
        </div>
      </div>
    </div>
  );
};
