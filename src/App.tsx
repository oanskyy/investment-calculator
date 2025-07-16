import { useState } from "react"
import Header from "./components/Header"
import InvestmentForm from "./components/InvestmentForm"
import ResultCard from "./components/ResultCard"

function App() {
	const [result, setResult] = useState<null | number>(null)

	return (
		<>
			<Header />
			<main>
				<InvestmentForm onResult={setResult} />
				{result !== null && <ResultCard value={result} />}
			</main>
			<footer></footer>
		</>
	)
}

export default App
