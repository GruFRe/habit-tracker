// ProgressAction.jsx
// Gott verdammte scheiße, 2 Tage für die Buttons "verschwendet"
// Kind-Komponente, die mit einer Gewohnheit interagiert
export const ProgressAction = ({ value, habit, setHabits }) => {
	// Diese Funktion wird aufgerufen, wenn du auf einen Button klickst
	const changeCounter = () => {
		// Schritt 1: Finde heraus, ob es ein "+" oder "-" Button ist
		if (value === "+") {
			// Schritt 2: Wenn es der "+" Button ist, prüfe, ob der Status noch erhöht werden darf
			if (habit.status < habit.times) {
				// Schritt 3: Berechne den neuen Status
				const newStatus = habit.status + 1;

				// Schritt 4 (GANZ WICHTIG): Aktualisiere den Zustand
				// Du sagst dem Manager (HabilList): "Hier ist die neue Liste"
				setHabits((prevHabits) => {
					// WICHTIG: Das hier ist der fehlende Teil in deinem Code!
					// Gehe durch jede Gewohnheit in der alten Liste (prevHabits)
					return prevHabits.map((currentHabit) => {
						// Wenn die ID der aktuellen Gewohnheit mit der ID unserer Gewohnheit übereinstimmt...
						if (currentHabit.id === habit.id) {
							// ... dann gib ein NEUES Objekt zurück, bei dem nur der "status" geändert wurde.
							return { ...currentHabit, status: newStatus };
						} else {
							// ... sonst gib die Gewohnheit unverändert zurück.
							return currentHabit;
						}
					});
				});
			}
		}
		// Schritt 5: Mache dasselbe für den "-" Button
		else if (value === "-") {
			// Prüfe, ob der Status noch verringert werden darf (nicht unter 0)
			if (habit.status > 0) {
				// Berechne den neuen Status
				const newStatus = habit.status - 1;

				// Aktualisiere den Zustand
				setHabits((prevHabits) => {
					return prevHabits.map((currentHabit) => {
						if (currentHabit.id === habit.id) {
							return { ...currentHabit, status: newStatus };
						} else {
							return currentHabit;
						}
					});
				});
			}
		}
		// Schritt 6: Wenn der Button kein "+" oder "-" ist (was nicht passieren sollte)
		else {
			console.warn("Falsche Operation");
		}
	};

	// Das ist der Button, den du siehst
	return (
		<button
			className="border-2 bg-green-300 rounded-2xl w-[44px] h-[30px] font- m-4"
			name={value}
			id={value}
			onClick={changeCounter}
		>
			{value}
		</button>
	);
};
