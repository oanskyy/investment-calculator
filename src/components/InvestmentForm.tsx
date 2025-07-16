import { Input } from "@/components/ui/input"
import { useState } from "react"
import ResultCard from "./ResultCard"
import { calculateFutureValue } from "@/lib/calculateFutureValue"

export default function InvestmentForm() {
	const [formValues, setFormValues] = useState({
		initialInvestment: "",
		annualInvestment: "",
		expectedReturn: "",
		duration: ""
	})
	const [result, setResult] = useState<null | number>(null)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault() // prevent page reload

		// P = initial investment
		// A = annual contribution
		// r = annual interest rate (in decimal)
		// t = years
		// FV = P * (1 + r)^t + A * [((1 + r)^t - 1) / r]

		const P = parseFloat(formValues.initialInvestment)
		const A = parseFloat(formValues.annualInvestment)
		const r = parseFloat(formValues.expectedReturn) / 100
		const t = parseFloat(formValues.duration)

		if (isNaN(P) || isNaN(A) || isNaN(r) || isNaN(t)) {
			return // guard against invalid inputs
		}
		
		console.log(`Calculating Future Value with: P=${P}, A=${A}, r=${r}, t=${t}`)
		const futureValue = calculateFutureValue(P, A, r, t)
		console.log(`Calculated Future Value: £${futureValue.toFixed(2)}`)

		setResult(futureValue) // update the result
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target

		setFormValues(prevValues => ({
			...prevValues,
			[id]: value
		}))
		console.log(`Updated ${id}: ${value}`)
	}

	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-200 via-green-100 to-green-300 px-4'>
			<form
				onSubmit={handleSubmit}
				className='w-full max-w-2xl bg-white p-8 rounded-xl shadow-md space-y-6'
			>
				<h2 className='text-2xl font-bold text-gray-800 text-center'>
					Investment Calculator
				</h2>

				{/* Row 1: Initial + Annual */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					<div>
						<label
							htmlFor='initialInvestment'
							className='block text-md font-medium text-gray-700'
						>
							Initial Investment
						</label>
						<Input
							id='initialInvestment'
							type='number'
							placeholder='Enter initial amount'
							value={formValues.initialInvestment}
							onChange={handleChange}
							className='text-gray-800'
						/>
					</div>

					<div>
						<label
							htmlFor='annualInvestment'
							className='block text-md font-medium text-gray-700'
						>
							Annual Investment
						</label>
						<Input
							id='annualInvestment'
							type='number'
							placeholder='Enter annual amount'
							value={formValues.annualInvestment}
							onChange={handleChange}
							className='text-gray-800'
						/>
					</div>
				</div>

				{/* Row 2: Return + Duration */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					<div>
						<label
							htmlFor='expectedReturn'
							className='block text-md font-medium text-gray-700'
						>
							Expected Return (%)
						</label>
						<Input
							id='expectedReturn'
							type='number'
							placeholder='Enter expected return'
							value={formValues.expectedReturn}
							onChange={handleChange}
							className='text-gray-800'
						/>
					</div>

					<div>
						<label
							htmlFor='duration'
							className='block text-md font-medium text-gray-700'
						>
							Duration (Years)
						</label>
						<Input
							id='duration'
							type='number'
							placeholder='Enter number of years'
							value={formValues.duration}
							onChange={handleChange}
							className='text-gray-800'
						/>
					</div>
				</div>

				<button
					type='submit'
					className='bg-green-600 text-white px-6 py-3 rounded-md text-base hover:bg-green-500 transform hover:scale-105 transition duration-200'
				>
					Calculate
				</button>
			</form>
			{/* Result Display */}
			{result !== null && <ResultCard value={result} />}
		</div>
	)
}
