// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
// export function calculateInvestmentResults({
// 	initialInvestment,
// 	annualInvestment,
// 	expectedReturn,
// 	duration
// }: {
// 	initialInvestment: number
// 	annualInvestment: number
// 	expectedReturn: number
// 	duration: number
// }) {
// 	const annualData = []
// 	let investmentValue = initialInvestment

// 	for (let i = 0; i < duration; i++) {
// 		const interestEarnedInYear = investmentValue * (expectedReturn / 100)
// 		investmentValue += interestEarnedInYear + annualInvestment
// 		annualData.push({
// 			year: i + 1, // year identifier
// 			interest: interestEarnedInYear, // the amount of interest earned in this year
// 			valueEndOfYear: investmentValue, // investment value at end of year
// 			annualInvestment: annualInvestment // investment added in this year
// 		})
// 	}

// 	return annualData
// }
export function calculateInvestmentResults({
	initialInvestment,
	annualInvestment,
	expectedReturn,
	duration
}: {
	initialInvestment: number
	annualInvestment: number
	expectedReturn: number
	duration: number
}) {
	const annualData = []
	let investmentValue = initialInvestment
	let totalInterest = 0
	let totalInvestedCapital = initialInvestment

	for (let i = 0; i < duration; i++) {
		// 1. Add this year's investment first
		investmentValue += annualInvestment
		totalInvestedCapital += annualInvestment

		// 2. Calculate interest on the updated investment
		const interestEarnedInYear = investmentValue * (expectedReturn / 100)
		investmentValue += interestEarnedInYear

		// 3. Track total interest
		totalInterest += interestEarnedInYear

		// 4. Push data
		annualData.push({
			year: i + 1,
			interest: interestEarnedInYear,
			valueEndOfYear: investmentValue,
			totalInterest,
			investedCapital: totalInvestedCapital
		})
	}

	return annualData
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	minimumFractionDigits: 0,
	maximumFractionDigits: 0
})
