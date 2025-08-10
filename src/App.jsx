import { useState } from "react";
import "./App.css";
import { HabitForm } from "./components/HabitForm";
import { Header } from "./components/Header";
import { HabilList } from "./components/HabitList";

function App() {
	// useState for Array wich contains different habits, each is an object
	const [habits, setHabits] = useState([
		{ id: 1, habitText: "drink", times: 7, timeframe: "day", status: 0 },
		{
			id: 2,
			habitText: "ride bike",
			times: 4,
			timeframe: "week",
			status: 0,
		},
	]);

	useState(() => {}, [habits]);

	return (
		<div className="size-100%">
			<Header />
			<HabitForm setHabits={setHabits} habits={habits} />
			<HabilList habits={habits} />
		</div>
	);
}

export default App;
