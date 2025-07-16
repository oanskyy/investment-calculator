export function calculateFutureValue(
	initial: number,
	annual: number,
	rate: number,
	years: number
): number {
	return (
		initial * Math.pow(1 + rate, years) +
		annual * ((Math.pow(1 + rate, years) - 1) / rate)
	)
}
