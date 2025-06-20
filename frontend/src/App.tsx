import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Full-Stack Template
        </h1>
        <p className="text-gray-600 mb-6">
          React + TypeScript + Vite + Tailwind CSS + Node.js + Express
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
          onClick={() => setCount(count + 1)}
        >
          Count: {count}
        </button>
        <p className="text-sm text-gray-500 mt-4">
          Edit this component to start building your application
        </p>
      </div>
    </div>
  )
}

export default App
