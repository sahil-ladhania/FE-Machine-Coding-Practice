function AsyncPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">useAsync</h1>

      <button className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-lg font-medium">
        Execute Async
      </button>

      <div className="flex flex-col gap-3 w-80">
        <div className="bg-gray-800 rounded-lg px-4 py-3 text-sm text-gray-400">
          Loading: <span className="text-yellow-400 font-medium">false</span>
        </div>
        <div className="bg-gray-800 rounded-lg px-4 py-3 text-sm text-gray-400">
          Error: <span className="text-red-400 font-medium">—</span>
        </div>
        <div className="bg-gray-800 rounded-lg px-4 py-4 text-sm text-gray-300 min-h-24">
          Data will appear here...
        </div>
      </div>
    </div>
  );
}

export default AsyncPage;
