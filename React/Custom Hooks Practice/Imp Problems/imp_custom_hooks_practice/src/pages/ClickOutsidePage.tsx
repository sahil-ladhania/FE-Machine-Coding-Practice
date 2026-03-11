function ClickOutsidePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">useClickOutside</h1>

      <p className="text-gray-400 text-sm">Click outside the box to trigger the callback</p>

      <div className="w-64 h-40 bg-gray-700 border-2 border-blue-500 rounded-xl flex items-center justify-center">
        <span className="text-gray-300 text-sm">I am the box</span>
      </div>

      <div className="bg-gray-800 rounded-lg px-4 py-3 text-sm text-gray-400">
        Clicked outside: <span className="text-white font-medium">—</span>
      </div>
    </div>
  );
}

export default ClickOutsidePage;
