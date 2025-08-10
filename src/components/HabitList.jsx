import { HabitListItem } from "./HabitListItem";

// Component wich lists all created Habits
export const HabilList = ({ habits }) => {
	return (
		<div className="flex flex-col items-center bg-green-800">
			{habits.map((habit) => {
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
