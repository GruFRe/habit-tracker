import { useState } from "react";
import "./App.css";
import { HabitForm } from "./components/HabitForm";
import { Header } from "./components/Header";
import { HabilList } from "./components/HabitList";

function App() {
	// useState for Array wich contains different habits, each is an object
	const [habits, setHabits] = useState([
		{ id: 1, text: "drink", count: 7, time: "day" },
		{ id: 2, text: "ride bike", count: 4, time: "week" },
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
