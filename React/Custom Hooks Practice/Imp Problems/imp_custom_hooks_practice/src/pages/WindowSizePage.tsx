function WindowSizePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">useWindowSize</h1>

      <p className="text-gray-400 text-sm">Resize the window to see values update</p>

      <div className="flex gap-6">
        <div className="bg-gray-800 rounded-lg px-6 py-4 text-center">
          <div className="text-gray-400 text-xs mb-1">Width</div>
          <div className="text-3xl font-bold text-blue-400">—</div>
          <div className="text-gray-500 text-xs mt-1">px</div>
        </div>
        <div className="bg-gray-800 rounded-lg px-6 py-4 text-center">
          <div className="text-gray-400 text-xs mb-1">Height</div>
          <div className="text-3xl font-bold text-blue-400">—</div>
          <div className="text-gray-500 text-xs mt-1">px</div>
        </div>
      </div>
    </div>
  );
}

export default WindowSizePage;
