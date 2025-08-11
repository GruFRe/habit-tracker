import { HabitListItem } from "./HabitListItem";

// Component wich lists all created Habits
export const HabilList = ({ habits, setHabits }) => {
	habits.forEach((element) => {
		console.log(element.id);
	});
	return (
		<div className="flex flex-col items-center bg-green-800">
			{habits.map((habit) => {
				// make sure to use return inside of map and to update names if changes occur
				return (
					<HabitListItem
						key={habit.id}
						habit={habit}
						setHabits={setHabits}
					/>
				);
			})}
		</div>
	);
};
