
interface ResultCardProps {
	value: number
}

export default function ResultCard({ value }: ResultCardProps) {
	return (
		<div className='mt-8 bg-white shadow-md rounded-lg p-6 text-center w-full max-w-2xl'>
			<h3 className='text-lg text-gray-600 mb-2'>Estimated Future Value</h3>
			<p className='text-3xl font-bold text-green-700 tracking-tight'>
				£{value.toLocaleString(undefined, { minimumFractionDigits: 2 })}
			</p>
		</div>
	)
}
