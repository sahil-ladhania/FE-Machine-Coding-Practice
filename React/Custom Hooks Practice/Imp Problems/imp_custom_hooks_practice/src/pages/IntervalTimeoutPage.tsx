function IntervalTimeoutPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-10">
      <h1 className="text-2xl font-bold">useInterval / useTimeout</h1>

      {/* useInterval */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold text-gray-300">useInterval</h2>
        <div className="text-5xl font-bold text-blue-400">0</div>
        <div className="flex gap-3">
          <button className="bg-green-700 hover:bg-green-600 px-5 py-2 rounded-lg text-sm font-medium">
            Start
          </button>
          <button className="bg-red-700 hover:bg-red-600 px-5 py-2 rounded-lg text-sm font-medium">
            Stop
          </button>
        </div>
      </div>

      <div className="w-64 border-t border-gray-700" />

      {/* useTimeout */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold text-gray-300">useTimeout</h2>
        <button className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg text-sm font-medium">
          Trigger (2s delay)
        </button>
        <div className="bg-gray-800 rounded-lg px-4 py-3 text-sm text-gray-400">
          Message: <span className="text-white font-medium">—</span>
        </div>
      </div>
    </div>
  );
}

export default IntervalTimeoutPage;
