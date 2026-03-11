import type { Props } from "../../types/todoTypes";

export default function TodoItemComponent({
    data,
    onStart,
    onReset,
    onDelete
}: Props) {
    return (
        <div className="border border-gray-200 rounded-lg p-4 space-y-3">
            {/* Todo Name */}
            <h3 className="text-lg font-semibold text-gray-800">
                {data.name}
            </h3>
            {/* Todo Timer */}
            <div className="text-gray-500 text-sm">
                {data.timer}
            </div>
            {/* Todo Buttons */}
            <div className="flex gap-2">
                <button onClick={() => onStart(data.id)} className={`${data.isTimerRunning ? "bg-orange-400" : "bg-green-600"} px-4 py-1 text-sm text-white rounded-md hover:bg-green-700 transition`}>
                    {data.isTimerRunning ? "Pause" : "Start"}
                </button>
                <button onClick={() => onReset(data.id)} className="px-4 py-1 text-sm bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition">
                    Reset
                </button>
                <button onClick={() => onDelete(data.id)} className="px-4 py-1 text-sm bg-red-600 text-white rounded-md hover:bg-red-700 transition">
                    Delete
                </button>
            </div>
        </div>
    )
};