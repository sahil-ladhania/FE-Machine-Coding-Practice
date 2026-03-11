function PreviousPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">usePrevious</h1>

      <div className="flex items-center gap-4">
        <button className="bg-gray-700 hover:bg-gray-600 px-5 py-2 rounded-lg font-bold text-lg">−</button>
        <span className="text-4xl font-bold w-16 text-center">0</span>
        <button className="bg-gray-700 hover:bg-gray-600 px-5 py-2 rounded-lg font-bold text-lg">+</button>
      </div>

      <div className="flex gap-6 text-sm text-gray-400">
        <div className="bg-gray-800 rounded-lg px-4 py-3">
          Current: <span className="text-white font-medium">0</span>
        </div>
        <div className="bg-gray-800 rounded-lg px-4 py-3">
          Previous: <span className="text-white font-medium">—</span>
        </div>
      </div>
    </div>
  );
}

export default PreviousPage;
