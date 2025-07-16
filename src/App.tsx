import { useState } from "react"
import Header from "./components/Header"
import InvestmentForm from "./components/InvestmentForm"
import ResultCard from "./components/ResultCard"
import { Toaster } from "react-hot-toast"

export type YearlyResult = {
	year: number
	interest: number
	valueEndOfYear: number
	totalInterest: number
	investedCapital: number
}

function App() {
	const [result, setResult] = useState<YearlyResult[] | null>(null)

	return (
		<div className='flex flex-col min-h-screen bg-gradient-to-br from-green-200 via-green-100 to-green-300'>
			<Header />
			<main className='flex flex-col items-center flex-grow px-4 py-12 '>
				<InvestmentForm onResult={setResult} />
				{result && <ResultCard value={result} />}
				{/* Add toaster here */}
				<Toaster position='top-right' />
			</main>

			{/* <pre>{JSON.stringify(result, null, 2)}</pre> */}

			<footer>
				<div className='text-center text-gray-600 py-8'>
					<p>© {new Date().getFullYear()} Investment Calculator by @oansky</p>
				</div>
			</footer>
		</div>
	)
}

export default App
