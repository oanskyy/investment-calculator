import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function InvestmentForm() {
	const [inputValues, setInputValues] = useState({
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

		const P = parseFloat(inputValues.initialInvestment)
		const A = parseFloat(inputValues.annualInvestment)
		const r = parseFloat(inputValues.expectedReturn) / 100
		const t = parseFloat(inputValues.duration)

		if (isNaN(P) || isNaN(A) || isNaN(r) || isNaN(t)) {
			return // guard against invalid inputs
		}

		const futureValue =
			P * Math.pow(1 + r, t) + A * ((Math.pow(1 + r, t) - 1) / r)

		setResult(futureValue) // update the result
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target

		setInputValues(prevValues => ({
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
							value={inputValues.initialInvestment}
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
							value={inputValues.annualInvestment}
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
							value={inputValues.expectedReturn}
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
							value={inputValues.duration}
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
			{result !== null && (
				<div className='mt-8 bg-white shadow-md rounded-lg p-6 text-center w-full max-w-2xl'>
					<h3 className='text-lg text-gray-600 mb-2'>Estimated Future Value</h3>
					<p className='text-3xl font-bold text-green-700 tracking-tight'>
						£{result.toLocaleString(undefined, { minimumFractionDigits: 2 })}
					</p>
				</div>
			)}
		</div>
	)
}
