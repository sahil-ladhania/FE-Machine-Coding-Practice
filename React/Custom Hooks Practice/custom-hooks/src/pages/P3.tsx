import { useLocalStorage } from "../custom-hooks/useLocalStorage"

export default function P3() {
    // useLocalStorage Hook
    const { value, setValue } = useLocalStorage("isDarkMode", false);

    return (
        <div className={`min-h-screen p-20 transition-colors duration-300 ${value ? "bg-black text-white" : "bg-white text-black"}`}>
            <h1 className="mb-4 text-lg font-bold text-red-800">
                useLocalStorage Hook - Bilkul useState ki tarah kaam karta hai — lekin value localStorage mein save hoti hai. Page refresh ke baad bhi value wahi rahegi.
            </h1>

            <div className="mt-10">
                <button
                    onClick={() => setValue(!value)}
                    className={`border px-4 py-2 cursor-pointer rounded transition-colors duration-300 ${value ? "border-white text-white hover:bg-white hover:text-black" : "border-black text-black hover:bg-black hover:text-white"}`}
                >
                    {value ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
            </div>
        </div>
    )
}