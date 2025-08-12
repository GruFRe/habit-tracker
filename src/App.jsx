import { useState } from "react";
import "./App.css";
import { HabitForm } from "./components/HabitForm";
import { Header } from "./components/Header";
import { HabilList } from "./components/HabitList";
import { ProgressPreview } from "./components/ProgressPreview";

function App() {
	// // useState for Array wich contains different habits, each is an object
	// const [habits, setHabits] = useState([
	// 	{ id: 1, habitText: "drink", times: 7, timeframe: "day", status: 0 },
	// 	{
	// 		id: 2,
	// 		habitText: "ride bike",
	// 		times: 4,
	// 		timeframe: "week",
	// 		status: 0,
	// 	},
	// ]);

	// read from local Storage
	const stringifiedHabits = localStorage.getItem("habits");
	const parsedHabits = JSON.parse(stringifiedHabits);
	const [habits, setHabits] = useState(parsedHabits ? parsedHabits : []);

	useState(() => {
		localStorage.setItem("habits", JSON.stringify(habits) || []);
	}, [habits]);

	// add loop to iterate over habits and count for
	// - completed
	// - timeframe === days

	let completedHabits = 0;
	let dayHabits = 0;
	habits.forEach((habit) => {
		if (habit.timeframe === "day") {
			dayHabits++;
		}
		if (habit.times === habit.status) {
			completedHabits++;
		}
	});

	return (
		<div className="size-100%">
			<Header />
			<HabitForm setHabits={setHabits} habits={habits} />
			<ProgressPreview completed={completedHabits} days={dayHabits} />
			<HabilList habits={habits} setHabits={setHabits} />
		</div>
	);
}

export default App;
