/*
Task : Callback ref use karke dynamic element measure karo.
*/

export default function CallbackRefDemo() {
    return (
        <div>Callback Ref Pattern</div>
    )
};

/*
👀 Kya Observe Karna Hai :-
    - Show/Hide — callback ref har baar call hota hai
    - Hide pe node = null aata hai
    - Content change pe measurement update hoti hai?
    - (Spoiler: Content change pe callback ref nahi call hota!)

💡 Learning Outcome :-
    - Callback Ref: Called on attach/detach
    - Not on Update: Content change se ref callback nahi fire hota
    - Use Case: Dynamic elements, conditional rendering
*/