import { z } from "zod"

export const investmentSchema = z.object({
	initialInvestment: z.string().min(1, "Initial investment is required"),
	annualInvestment: z.string().min(1, "Annual investment is required"),
	expectedReturn: z.string().min(1, "Expected return is required"),
	duration: z.string().min(1, "Duration is required")
})

export type InvestmentFormData = z.infer<typeof investmentSchema>
