import { memo } from 'react';
import {
  getCurrentWeekDates,
  getDate2Digits,
  getWeekDay,
  isToday,
  classnames,
} from 'utils/index';

import classes from './styles.module.css';
import { WORKOUTS } from 'constants/seeds';
import Workout from 'components/workout';

export const WeekContainerComponent: React.FC = () => {
  const currentWeekDates = getCurrentWeekDates();
  return (
    <div className={classes['week-container']} data-testid="week-container">
      {currentWeekDates.map((date) => {
        const workouts = WORKOUTS.filter((_, index) => index === date.getDay());
        return (
          <div key={date.toString()} className={classes['date-container']}>
            <div className={classes['week-day']}>
              <span>{getWeekDay(date)}</span>
            </div>
            <div className={classes['workout-container']}>
              <div
                className={classnames(classes['workout-date'], {
                  [classes.today]: isToday(date),
                })}
              >
                <span>{getDate2Digits(date)}</span>
              </div>
              <div>
                {workouts.map((workout, index) => (
                  <Workout key={`${workout.name}+${index}`} {...workout} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const WeekContainer = memo(WeekContainerComponent);
WeekContainer.displayName = 'WeekContainer';

export default WeekContainer;
