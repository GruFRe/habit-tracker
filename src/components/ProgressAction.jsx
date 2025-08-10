// Child component for each HabitItem Component to interact with it and show progress

// need
// times, status, setter function in here
// pass in whole habit Object in parent component for easier access
export const ProgressAction = ({ value, times, status }) => {
	const changeCounter = (e) => {
		if (e.target.value === "-") {
		} else if (e.target.value === "+") {
		}

		// if (status < times) {
		// 	status++;
		// }
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
