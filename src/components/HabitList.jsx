import { HabitListItem } from "./HabitListItem";

// Component wich lists all created Habits
export const HabilList = ({ habits }) => {
	return (
		<div className="flex flex-col items-center bg-green-800">
			{habits.map((habit) => {
				console.log(habit.id);
				// make sure to use return inside of map and to update names if changes occur
				return (
					<HabitListItem
						key={habit.id}
						text={habit.habitText}
						times={habit.times}
						timeframe={habit.timeframe}
						status={habit.status}
					/>
				);
			})}
		</div>
	);
};
