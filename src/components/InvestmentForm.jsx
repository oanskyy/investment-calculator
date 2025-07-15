import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function InvestmentForm() {
	const [inputValues, setInputValues] = useState({
		initialInvestment: "",
		annualInvestment: "",
		expectedReturn: "",
		duration: ""
	})

	const handleChange = e => {
		const { id, value } = e.target

		setInputValues(prevValues => ({
			...prevValues,
			[id]: value
		}))
	}

	return (
		<div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 via-green-100 to-green-300 px-4'>
			<form className='w-full max-w-2xl bg-white p-8 rounded-xl shadow-md space-y-6'>
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
		</div>
	)
}
