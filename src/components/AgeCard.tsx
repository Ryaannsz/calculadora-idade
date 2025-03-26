
export function AgeCards({age}: any){

    return(
      <div className="flex flex-col md:flex-row gap-8">
        
      <div 
        key="years"
        className="animate-bounce-in bg-white p-8 rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-xl duration-300"
        style={{ animationDelay: '0.1s' }}
      >
        <div className="flex flex-col items-center">
          <span className="text-6xl font-bold text-purple-600 mb-2 font-mono animate-digit-rise">
            {age.years}
          </span>
          <div className="w-16 h-1 bg-purple-200 rounded-full mb-2 animate-line-expand" />
          <span className="text-sm font-semibold text-purple-900 uppercase tracking-wider animate-label-fade">
            Anos
          </span>
        </div>
      </div>

      
      <div 
        key="months"
        className="animate-bounce-in bg-white p-8 rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-xl duration-300"
        style={{ animationDelay: '0.3s' }}
      >
        <div className="flex flex-col items-center">
          <span className="text-6xl font-bold text-indigo-600 mb-2 font-mono animate-digit-rise">
            {age.months}
          </span>
          <div className="w-16 h-1 bg-indigo-200 rounded-full mb-2 animate-line-expand" />
          <span className="text-sm font-semibold text-indigo-900 uppercase tracking-wider animate-label-fade">
            Meses
          </span>
        </div>
      </div>

      {/* Card para Dias */}
      <div 
        key="days"
        className="animate-bounce-in bg-white p-8 rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-xl duration-300"
        style={{ animationDelay: '0.5s' }}
      >
        <div className="flex flex-col items-center">
          <span className="text-6xl font-bold text-pink-600 mb-2 font-mono animate-digit-rise">
            {age.days}
          </span>
          <div className="w-16 h-1 bg-pink-200 rounded-full mb-2 animate-line-expand" />
          <span className="text-sm font-semibold text-pink-900 uppercase tracking-wider animate-label-fade">
            Dias
          </span>
        </div>
      </div>
    </div>
    )
}