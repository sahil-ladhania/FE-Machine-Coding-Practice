/*
Task : Event listener mein stale closure fix karo using ref.
*/

export default function StaleClosureRefDemo() {
    return (
        <div>Stale Closure with Ref</div>
    )
};

/*
👀 Kya Observe Karna Hai :-
    - Increment karo 5 times
    - Enter press karo — alert shows 5 (correct!)
    - countRef.current = count line hata do — always 0

💡 Learning Outcome :-
    - Ref as "Latest Value Box": Always current in callbacks
    - Pattern: ref.current = value on every render
    - Use Case: Event listeners, intervals, callbacks
*/