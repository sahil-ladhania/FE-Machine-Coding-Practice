import TodosComponent from "./TodosComponent";

export default function ContainerComponent() {
    return (
        <>
            <div>
                <h1 className="text-4xl text-blue-800 font-medium text-center py-10">Todo App</h1>
                
                <div className="ml-150 flex justify-between w-80">
                    <input className="border rounded p-2" type="text" placeholder="Enter todo..."/>
                    <button className="bg-blue-300 px-4 py-2 rounded cursor-pointer">Add</button>
                </div>

                <TodosComponent/>
            </div>
        </>
    )
};