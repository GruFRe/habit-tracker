import { ProgressAction } from "./ProgressAction";

// Component wihc represents a single List Item
export const HabitListItem = ({ text, times, timeframe, status }) => {
	// array with actions to create buttons dynamically
	const actions = ["-", "+"];
	return (
		<section className="bg-green-400 w-[100%] m-2 mx-4 p-4 ">
			<span className="block text-center">{text} </span>
			<div className="flex flex-col justify-around">
				<span className="block text-center">
					{status} from {times} times per {timeframe}
				</span>
				{/* Container for RadioButtons */}
				<div className="flex justify-around mt-2px">
					{/* Add buttons here */}
					{actions.map((el) => {
						return <ProgressAction value={el} />;
					})}
				</div>
			</div>
		</section>
	);
};
