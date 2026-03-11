function TogglePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">useToggle</h1>

      <div className="bg-gray-800 rounded-lg px-4 py-3 text-sm text-gray-400">
        Value: <span className="text-white font-medium">false</span>
      </div>

      <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-medium">
        Toggle
      </button>
    </div>
  );
}

export default TogglePage;
