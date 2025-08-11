// Child component for each HabitItem Component to interact with it and show progress

// need
// times, status, setter function in here
// pass in whole habit Object in parent component for easier access
export const ProgressAction = ({ value, habit, setHabits }) => {
	// function to calculate wich gets triggered on button click
	const changeCounter = (e) => {
		// add logic to count

		// first step: check for value of buton to get operation
		// check if operation is valid inside of first if statement(not greater or equal to with addition or smaller or equal to with substraction )
		if (value === "+") {
			// add logic for additon here
			if (habit.status < habit.times) {
				console.log("Addition if smaller");
			}
		} else if (value === "-") {
			// add logic for substraction here
		} else {
			console.warn("Wrong operation");
			return;
		}
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
