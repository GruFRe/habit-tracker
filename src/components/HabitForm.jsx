import { useState } from "react";

// Component to create new Habits
export const HabitForm = ({ setHabits, habits }) => {
	// add blueprint for habit
	const habitBlueprint = {
		id: 0,
		habitText: "",
		times: 0,
		timeframe: "week",
		status: 0,
	};
	// pass in a copy of that blueprint to state to keep track of tbis new copy
	const [newHabit, setNewHabit] = useState({ ...habitBlueprint });
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
		e.preventDefault();

		// additional check to get rid of errors, Gemini
		if (newHabit.habitText === "" || newHabit.times <= 0) {
			alert("Bitte fülle alle Felder korrekt aus!");
			return; // Beende die Funktion, wenn die Validierung fehlschlägt
		}

		// calculate ID while Sumbitting
		const newID = Date.now();

		// create the new habit object with the new ID right away
		const habitWithID = { ...newHabit, id: newID };

		// add the new habit with the ID to the habits list
		setHabits([habitWithID, ...habits]);

		// reset newHabit to clear out/ reset inputs, pass innBlueprint again
		const reset = habitBlueprint;
		setNewHabit(reset);
	};
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
						type="number"
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
