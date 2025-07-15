import { Input } from "@/components/ui/input" 

export default function InvestmentForm() {
	return (
		<form className='space-y-4'>
			{/* Initial Investment */}
			<div>
				<label
					htmlFor='initialInvestment'
					className='block text-sm font-medium text-gray-700'
				>
					Initial Investment
				</label>
				<Input
					id='initialInvestment'
					type='number'
					placeholder='Enter initial amount'
				/>
			</div>

			{/* Annual Investment */}
			<div>
				<label
					htmlFor='annualInvestment'
					className='block text-sm font-medium text-gray-700'
				>
					Annual Investment
				</label>
				<Input
					id='annualInvestment'
					type='number'
					placeholder='Enter annual amount'
				/>
			</div>

			{/* Expected Return */}
			<div>
				<label
					htmlFor='expectedReturn'
					className='block text-sm font-medium text-gray-700'
				>
					Expected Return (%)
				</label>
				<Input
					id='expectedReturn'
					type='number'
					placeholder='Enter expected return'
				/>
			</div>

			{/* Duration */}
			<div>
				<label
					htmlFor='duration'
					className='block text-sm font-medium text-gray-700'
				>
					Duration (Years)
				</label>
				<Input
					id='duration'
					type='number'
					placeholder='Enter number of years'
				/>
			</div>

			<button
				type='submit'
				className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700'
			>
				Calculate
			</button>
		</form>
	)
}
