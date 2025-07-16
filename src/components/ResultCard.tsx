import { YearlyResult } from '../App';

interface ResultCardProps {
  value: YearlyResult[];
}

export default function ResultCard({ value }: ResultCardProps) {
  return (
    <div className="mt-8 w-full max-w-3xl overflow-x-auto rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-6 text-center text-2xl font-bold text-gray-800">
        Yearly Investment Breakdown
      </h3>

      <table className="min-w-full text-left text-base text-gray-800">
        <thead className="border-b border-gray-300 bg-gray-100 font-semibold">
          <tr>
            <th className="px-4 py-3">Year</th>
            <th className="px-4 py-3">Interest (Year)</th>
            <th className="px-4 py-3">Investment Value</th>
            <th className="px-4 py-3">Total Interest</th>
            <th className="px-4 py-3">Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {value.map((entry) => (
            <tr key={entry.year} className="border-b border-gray-200">
              <td className="px-4 py-3">{entry.year}</td>
              <td className="px-4 py-3">
                {entry.interest.toLocaleString('en-GB', {
                  style: 'currency',
                  currency: 'GBP',
                })}
              </td>
              <td className="px-4 py-3">
                {entry.valueEndOfYear.toLocaleString('en-GB', {
                  style: 'currency',
                  currency: 'GBP',
                })}
              </td>
              <td className="px-4 py-3">
                {entry.totalInterest.toLocaleString('en-GB', {
                  style: 'currency',
                  currency: 'GBP',
                })}
              </td>
              <td className="px-4 py-3">
                {entry.investedCapital.toLocaleString('en-GB', {
                  style: 'currency',
                  currency: 'GBP',
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
