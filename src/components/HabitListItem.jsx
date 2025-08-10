// Component wihc represents a single List Item
export const HabitListItem = ({ text, count, time, status }) => {
	return (
		<section className="bg-green-400 w-[100%] m-2 mx-4 p-4">
			<span>{text} </span>
			<div className="flex flex-row justify-around">
				<span>
					{status} from {count} times per {time}
				</span>
			</div>
		</section>
	);
};
