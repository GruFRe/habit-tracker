// Component to create new Habits
export const HabitForm = () => {
	// define Variable with design to reuse it for different textfields
	const textFieldDesign = "border-2 bg-lime-300 rounded-2xl w-fit max-w-md";
	return (
		<>
			{/* Form */}
			<form className="bg-green-200 flex flex-col">
				{/* Section for textinput and corresponding label */}
				<section>
					<label>Create a new habit </label>
					<input
						type="text"
						id="habit"
						name="habit"
						required
						className="border-2 bg-lime-300 rounded-2xl w-fit max-w-md"
					/>
				</section>
				{/* Section to select timeframe and repetitions */}
				<sectionf className="flex flex-row">
					<input
						type="int"
						className="border-2 bg-lime-300 rounded-2xl w-[15%] h-[50%]"
					/>
					<span>times per</span>
					{/* Div for button Divs */}
					<div>
						<div>
							<input type="radio" name="week" id="week" />
							<label htmlFor="week">Week</label>
						</div>
						<div>
							<input type="radio" name="week" id="week" />
							<label htmlFor="week">Week</label>
						</div>
					</div>
				</sectionf>
				{/* Submit Button, onClick should create a new Habit */}
				<button className="border-2 rounded-2xl mb-4 mx-4">
					Submit
				</button>
			</form>
		</>
	);
};
