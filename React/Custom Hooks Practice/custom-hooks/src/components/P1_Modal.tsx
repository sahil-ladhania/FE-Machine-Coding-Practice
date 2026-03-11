
export default function P1_Modal({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl p-6 w-80">
                <h1 className="text-center text-lg font-semibold mb-6">My Modal</h1>
                <button
                    onClick={onClose}
                    className="w-full border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                    Close Modal
                </button>
            </div>
        </div>
    );
}