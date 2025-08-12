export const ProgressPreview = ({ days, completed }) => {
	return (
		<div className="flex flex-row justify-around bg-green-600 p-4">
			<span>Tasks for today: {days}</span>
			<span>Completed tasks: {completed}</span>
		</div>
	);
};
