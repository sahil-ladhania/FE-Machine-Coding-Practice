import P1_Modal from "../components/P1_Modal";
import { useToggle } from "../custom-hooks/useToggle";

export default function P1() {
    // useToggle Hook
    const { value: isModalOpen , toggle: toggleModal } = useToggle();
    const { value: isDark , toggle: toggleTheme } = useToggle();

    return (
        <div className={`m-20 min-h-screen ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
            <h1 className="text-red-800 mb-4 text-lg font-bold">
                useToggle Hook - Ek boolean value ko toggle karta hai — true → false → true. Jab bhi koi cheez open/close, on/off honi ho, tab use karo.
            </h1>

            <div>
                <button onClick={toggleModal} className="border p-2 my-2 cursor-pointer">
                    {
                        isModalOpen === true ? "Close Modal" : "Open Modal"
                    }
                </button>

                {
                    isModalOpen && <P1_Modal onClose={toggleModal}/>
                }

                <button onClick={toggleTheme} className="border p-2 my-2 ml-2 cursor-pointer">
                    {
                        isDark ? "Light Mode" : "Dark Mode"
                    }
                </button>
            </div>
        </div>
    )
};