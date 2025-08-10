// Component to create new Habits
export const HabitForm = ({ setHabits, habits }) => {
	// define Variable with design to reuse it for different textfields
	const textFieldDesign = "border-2 bg-lime-300 rounded-2xl w-fit max-w-md";
	return (
		<>
			{/* Form */}
			<form className="bg-green-200 flex flex-col">
				{/* Section for textinput and corresponding label */}
				<section className="flex flex-col items-center p-4">
					<label htmlFor="habit">Create a new habit </label>
					<input
						type="text"
						id="habit"
						name="habit"
						required
						className="border-2 bg-lime-300 rounded-2xl w-fit max-w-md m-4 px-4"
					/>
				</section>
				{/* Section to select timeframe and repetitions */}
				<section className="flex flex-row justify-evenly mx-2 mb-4">
					<input
						type="int"
						className="border-2 bg-lime-300 rounded-2xl w-[20%] h-[50%] text-center"
						name="times"
						id="times"
					/>
					<label htmlFor="times">times per</label>
					{/* Div for button Divs */}
					<div>
						<div>
							<input
								type="radio"
								name="day"
								id="day"
								defaultChecked
							/>
							<label htmlFor="day">Day</label>
						</div>
						<div>
							<input type="radio" name="week" id="week" />
							<label htmlFor="week">Week</label>
						</div>
					</div>
				</section>
				{/* Submit Button, onClick should create a new Habit */}
				<input type="submit" value="Test" />
				<button
					className="border-2 rounded-2xl mb-4 mx-4"
					onSubmit={() => {
						// To Do
						setHabits([
							{ id: habits.legnth + 1, text: "Test" },
							...habits,
						]);
					}}
				>
					Submit
				</button>
			</form>
		</>
	);
};
