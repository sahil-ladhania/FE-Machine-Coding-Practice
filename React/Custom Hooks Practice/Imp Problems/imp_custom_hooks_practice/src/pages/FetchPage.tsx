function FetchPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">useFetch</h1>

      <div className="w-96 flex flex-col gap-3">
        <div className="bg-gray-800 rounded-lg px-4 py-3 text-sm text-gray-400">
          Status: <span className="text-yellow-400 font-medium">loading...</span>
        </div>

        <div className="bg-gray-800 rounded-lg px-4 py-3 text-sm text-gray-400">
          Error: <span className="text-red-400 font-medium">—</span>
        </div>

        <div className="bg-gray-800 rounded-lg px-4 py-4 text-sm text-gray-300 min-h-32">
          Data will appear here...
        </div>
      </div>
    </div>
  );
}

export default FetchPage;
