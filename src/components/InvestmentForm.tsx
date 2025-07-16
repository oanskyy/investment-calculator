import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { Input } from '@/components/ui/input';

import { InvestmentFormData, investmentSchema } from '@/lib/schema';

import { calculateInvestmentResults } from '@/util/investment';

import { YearlyResult } from '../App';

interface InvestmentFormProps {
  onResult: (value: YearlyResult[]) => void;
}

export default function InvestmentForm({ onResult }: InvestmentFormProps) {
  // ✅ USE useForm from RHF
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InvestmentFormData>({
    resolver: zodResolver(investmentSchema),
    mode: 'onTouched',
    defaultValues: {
      initialInvestment: '',
      annualInvestment: '',
      expectedReturn: '',
      duration: '',
    },
  });

  const onSubmit = (data: InvestmentFormData) => {
    const P = +data.initialInvestment;
    const A = +data.annualInvestment;
    const r = +data.expectedReturn / 100;
    const t = +data.duration;

    const results = calculateInvestmentResults({
      initialInvestment: P,
      annualInvestment: A,
      expectedReturn: r,
      duration: t,
    });
    console.log('Calculated Future Values:');
    console.table(results);

    onResult(results);
    toast.success('Calculation successful!');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-3xl space-y-6 rounded-xl bg-white p-8 shadow-md"
    >
      <h2 className="text-center text-2xl font-bold text-gray-800">Investment Calculator</h2>

      {/* Row 1: Initial + Annual */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="initialInvestment" className="text-md block font-medium text-gray-700">
            Initial Investment
          </label>
          <Input
            id="initialInvestment"
            type="number"
            placeholder="Enter initial amount"
            {...register('initialInvestment')}
            className={`text-gray-800 ${
              errors.initialInvestment && 'border-red-500 focus:border-red-500 focus:ring-red-500'
            }`}
          />
          {errors.initialInvestment && (
            <p className="mt-1 text-sm text-red-500">{errors.initialInvestment.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="annualInvestment" className="text-md block font-medium text-gray-700">
            Annual Investment
          </label>
          <Input
            id="annualInvestment"
            type="number"
            placeholder="Enter annual amount"
            {...register('annualInvestment')}
            className={`text-gray-800 ${
              errors.annualInvestment && 'border-red-500 focus:border-red-500 focus:ring-red-500'
            }`}
          />
          {errors.annualInvestment && (
            <p className="mt-1 text-sm text-red-500">{errors.annualInvestment.message}</p>
          )}
        </div>
      </div>

      {/* Row 2: Return + Duration */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="expectedReturn" className="text-md block font-medium text-gray-700">
            Expected Return (%)
          </label>
          <Input
            id="expectedReturn"
            type="number"
            placeholder="Enter expected return"
            {...register('expectedReturn')}
            className={`text-gray-800 ${
              errors.expectedReturn ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
            }`}
          />
          {errors.expectedReturn && (
            <p className="mt-1 text-sm text-red-500">{errors.expectedReturn.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="duration" className="text-md block font-medium text-gray-700">
            Duration (Years)
          </label>
          <Input
            id="duration"
            type="number"
            placeholder="Enter number of years"
            {...register('duration')}
            className="text-gray-800"
          />
          {errors.duration && (
            <p className="mt-1 text-sm text-red-500">{errors.duration.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="transform rounded-md bg-green-600 px-6 py-3 text-base text-white transition duration-200 hover:scale-105 hover:bg-green-500"
      >
        Calculate
      </button>
    </form>
  );
}
