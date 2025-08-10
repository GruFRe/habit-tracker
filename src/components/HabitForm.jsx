import { useState } from "react";

// Component to create new Habits
export const HabitForm = ({ setHabits, habits }) => {
	const [newHabit, setNewHabit] = useState({
		id: 0,
		habitText: "",
		times: 0,
		timeframe: "week",
		status: 0,
	});
	// Function wich gets called onChange
	const handleOnChange = (e) => {
		// calls setterFunction
		setNewHabit({
			//  wich uses spreadOperater to keep current object
			...newHabit,
			// and assigns new value with name of input field and value of target
			[e.target.name]: e.target.value,
		});
	};
	// Function wich gets called on submit
	const submitForm = (e) => {
		// prevent default behaviour wich reload page after submitting
		e.preventDefault();
		// calculate and assign new id/key at this point
		const newID = habits.length + 1;
		setNewHabit({
			...newHabit,
			id: newID,
		});
		// console.log("Length: ", newHabit);
		// add current habbit to habitList for easy assinging in the next step
		const retHabits = [newHabit, ...habits];
		// call the setHabits Function and add current habitList to it
		setHabits(retHabits);
	};
	console.log(newHabit.habitText, newHabit.times);
	return (
		<>
			{/* Form */}
			<form onSubmit={submitForm} className="bg-green-200 flex flex-col">
				{/* Section for textinput and corresponding label */}
				<section className="flex flex-col items-center p-4">
					<label htmlFor="habitText">Create a new habit </label>
					<input
						type="text"
						id="habitText"
						name="habitText"
						// Link useState and form element with value and onChange
						value={newHabit.habitText}
						onChange={(e) => {
							handleOnChange(e);
						}}
						required
						className="border-2 bg-lime-300 rounded-2xl w-fit max-w-md m-4 px-4"
					/>
				</section>
				{/* Section to select timeframe and repetitions */}
				<section className="flex flex-row justify-evenly mx-2 mb-4">
					<input
						type="int"
						name="times"
						id="times"
						// Link useState and form element with value and onChange
						value={newHabit.times}
						// pass in event too
						onChange={(e) => {
							handleOnChange(e);
						}}
						className="border-2 bg-lime-300 rounded-2xl w-[20%] h-[50%] text-center"
					/>
					<label htmlFor="times">times per</label>
					{/* Div for groups of buttons and Labels use same name for both buttons to ensure only one can be selected*/}
					<div>
						<div>
							<input
								type="radio"
								name="timeframe"
								id="day"
								value="day"
								checked={newHabit.timeframe === "day"}
								onChange={handleOnChange}
							/>
							<label htmlFor="day">Day</label>
						</div>
						<div>
							<input
								type="radio"
								name="timeframe"
								id="week"
								value="week"
								checked={newHabit.timeframe === "week"}
								onChange={handleOnChange}
							/>
							<label htmlFor="week">Week</label>
						</div>
					</div>
				</section>
				{/* Submit Button, onClick should create a new Habit */}
				<button
					type="submit"
					className="border-2 rounded-2xl mb-4 mx-4"
				>
					Submit
				</button>
			</form>
		</>
	);
};
