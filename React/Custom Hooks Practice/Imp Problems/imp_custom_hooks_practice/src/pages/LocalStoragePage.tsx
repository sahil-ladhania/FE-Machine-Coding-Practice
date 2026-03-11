function LocalStoragePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">useLocalStorage</h1>

      <div className="flex flex-col gap-3 w-80">
        <input
          type="text"
          placeholder="Type and reload to test..."
          className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />
        <div className="bg-gray-800 rounded-lg px-4 py-3 text-sm text-gray-400">
          Stored value: <span className="text-white font-medium">—</span>
        </div>
        <button className="bg-red-800 hover:bg-red-700 text-white rounded-lg px-4 py-2 text-sm">
          Clear Storage
        </button>
      </div>
    </div>
  );
}

export default LocalStoragePage;
