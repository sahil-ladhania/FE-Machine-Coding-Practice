
export default function TodoComponent() {
    return (
        <>
            <div className="flex justify-between h-auto mb-6 border p-2 rounded bg-emerald-100">
                <h2 className="text-justify text-wrap w-6/12">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis perspiciatis officiis deserunt laborum odio consectetur?
                </h2>
                <button className="bg-blue-500 rounded h-10 px-2 cursor-pointer">Update</button>
                <button className="bg-red-600 rounded h-10 px-2 cursor-pointer">Delete</button>
                <button className="bg-green-400 rounded h-10 px-2 cursor-pointer">Mark as Done</button>
            </div>
        </>
    )
};