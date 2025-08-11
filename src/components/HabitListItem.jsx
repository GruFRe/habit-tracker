import { ProgressAction } from "./ProgressAction";

// Component wihc represents a single List Item
export const HabitListItem = ({ habit, setHabits }) => {
	// array with actions to create buttons dynamically
	const actions = ["-", "+"];
	return (
		<section className="bg-green-400 w-[100%] m-2 mx-4 p-4 ">
			<span className="block text-center">{habit.text} </span>
			<div className="flex flex-col justify-around">
				<span className="block text-center">
					{habit.status} from {habit.times} times per{" "}
					{habit.timeframe}
				</span>
				{/* Container for Navigation Buttons */}
				<div className="flex justify-around mt-2px">
					{/* Add buttons here */}
					{actions.map((el) => {
						return (
							<ProgressAction
								// add another key for nested List! took me around one day to get rid of error msg
								key={el}
								value={el}
								habit={habit}
								setHabits={setHabits}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};
