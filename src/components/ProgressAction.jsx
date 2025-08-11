// Child component for each HabitItem Component to interact with it and show progress

// need
// times, status, setter function in here
// pass in whole habit Object in parent component for easier access
export const ProgressAction = ({ value, habit, setHabits }) => {
	const changeCounter = (e) => {
		// add logic to count
	};

	return (
		<>
			<button
				className="border-2 bg-green-300 rounded-2xl w-[44px] h-[30px] font- m-4"
				name={value}
				id={value}
				onClick={changeCounter}
			>
				{value}
			</button>
		</>
	);
};
