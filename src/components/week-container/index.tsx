import { memo } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {
  getCurrentWeekDates,
  getDate2Digits,
  getWeekDay,
  isToday,
  classnames,
} from 'utils/index';

import { WORKOUTS } from 'constants/seeds';
import Workout from 'components/workout';
import classes from './styles.module.css';

export const WeekContainerComponent: React.FC = () => {
  const currentWeekDates = getCurrentWeekDates();
  return (
    <DragDropContext onDragEnd={(result) => console.log('result', result)}>
      <div className={classes['week-container']} data-testid="week-container">
        {currentWeekDates.map((date) => {
          const workouts = WORKOUTS.filter(
            (_, index) => index === date.getDay(),
          );
          return (
            <div key={date.toString()} className={classes['date-container']}>
              <div className={classes['week-day']}>
                <span>{getWeekDay(date)}</span>
              </div>
              <Droppable droppableId={`workout-container-${getWeekDay(date)}`}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    className={classes['workout-container']}
                    ref={provided.innerRef}
                  >
                    <div
                      className={classnames(classes['workout-date'], {
                        [classes.today]: isToday(date),
                      })}
                    >
                      <span>{getDate2Digits(date)}</span>
                    </div>
                    <div>
                      {workouts.map((workout, index) => (
                        <Draggable
                          key={`${workout.name}+`}
                          draggableId={workout.name}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Workout {...workout} />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
            </div>
          );
        })}
      </div>
    </DragDropContext>
  );
};

const WeekContainer = memo(WeekContainerComponent);
WeekContainer.displayName = 'WeekContainer';

export default WeekContainer;
