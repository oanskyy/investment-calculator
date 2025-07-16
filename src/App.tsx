import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import Header from './components/Header';
import InvestmentForm from './components/InvestmentForm';
import ResultCard from './components/ResultCard';

export type YearlyResult = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  totalInterest: number;
  investedCapital: number;
};

function App() {
  const [result, setResult] = useState<YearlyResult[] | null>(null);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-green-200 via-green-100 to-green-300">
      <Header />
      <main className="flex flex-grow flex-col items-center px-4 py-12">
        <InvestmentForm onResult={setResult} />
        {result && <ResultCard value={result} />}
        <Toaster position="top-right" />
      </main>

      {/* <pre>{JSON.stringify(result, null, 2)}</pre> */}

      <footer>
        <div className="py-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Investment Calculator by @oansky</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
