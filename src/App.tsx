import { useState } from 'react';
import './App.css';
import { AgeCards } from './components/AgeCard';

function App() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
  const [error, setError] = useState('');

  const calculateAge = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    
    if (!birthDate) {
      return setError('Digite uma data!');
    }

    const today = new Date();
    const birth = new Date(birthDate);

    
    if (birth > today) {
      return setError('Data inválida! No futuro não é possível calcular');
    }

    
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    
    if (months < 0) {
      years--;
      months += 12;
    }

    
    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
      days += lastMonth.getDate(); 
    }

    
    setAge({ years, months, days });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Calculadora de idade</h1>
          <form onSubmit={calculateAge} className="space-y-4">
            <div>
              <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">
                Digite seu aniversário
              </label>
              <input
                type="date"
                id="birthDate"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="mt-2 block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Calcular
            </button>
          </form>
        </div>
      </div>
      
     
<div className="flex-1 flex items-center justify-center bg-gradient-to-b from-purple-50 to-indigo-50">
  <div className="text-center">
    {(age.years > 0 || age.months > 0 || age.days > 0) ? (
      <AgeCards age={age}></AgeCards>
    ) : (
      <div className="text-gray-500 text-xl font-light italic animate-pulse">
        
      </div>
    )}
  </div>
</div>
    </div>
  );
}

export default App;
