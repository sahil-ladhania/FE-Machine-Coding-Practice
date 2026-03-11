import TodoComponent from "./TodoComponent";

export default function TodosComponent() {
    return (
        <>
            <div>
                <h1 className="text-2xl text-red-800 font-medium text-center py-10">Your Todos :-</h1>
                
                <div className="flex flex-col mx-40">
                    <TodoComponent/>
                    <TodoComponent/>
                    <TodoComponent/>
                    <TodoComponent/>
                    <TodoComponent/>
                </div>
            </div>
        </>
    )
};