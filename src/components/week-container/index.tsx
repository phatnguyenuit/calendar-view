import { memo } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {
  getCurrentWeekDates,
  getDate2Digits,
  getWeekDay,
  isToday,
} from 'utils/date';
import classnames from 'utils/classnames';
import { WORKOUT_CONTAINER_PREFIX } from 'constants/string';
import Workout from 'components/workout';
import { useWeekContainer } from './utils';
import classes from './styles.module.css';

const currentWeekDates = getCurrentWeekDates();
export const WeekContainerComponent: React.FC = () => {
  const { workouts, handleDragEnd, handleCreateExercise } = useWeekContainer();

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className={classes['week-container']} data-testid="week-container">
        {currentWeekDates.map((date) => {
          const weekday = date.getDay();
          const dayWorkouts = workouts[weekday] ?? [];
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
                <Droppable
                  droppableId={`${WORKOUT_CONTAINER_PREFIX}${weekday}`}
                >
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={classes.workouts}
                    >
                      {dayWorkouts.map((workout, index) => (
                        <Draggable
                          key={`${workout.name}+${index}`}
                          draggableId={`${workout.name}-${index}`}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Workout
                                {...workout}
                                index={index}
                                weekday={weekday}
                                onCreateExercise={handleCreateExercise(
                                  weekday,
                                  index,
                                )}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
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
