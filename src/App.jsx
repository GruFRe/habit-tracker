import "./App.css";
import { HabitForm } from "./components/HabitForm";
import { Header } from "./components/Header";

function App() {
	return (
		<div className="size-100%">
			<Header />
			<HabitForm />
		</div>
	);
}

export default App;
