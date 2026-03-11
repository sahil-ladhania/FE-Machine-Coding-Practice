/*
Task : usePrevious custom hook banao aur debug karo.
*/

export default function PreviousValueDemo() {
    return (
        <div>Previous Value Hook</div>
    )
};

/*
👀 Kya Observe Karna Hai :-
    - Initial — previous is undefined
    - First increment — previous = 0, current = 1
    - Logs ka order samjho:
        - Render logs (ref has old value)
        - Effect logs (saves new value for next render)

💡 Learning Outcome :-
    - Timing: Effect runs after render, so ref has "previous" during render
    - Pattern: Store in effect, read in render
    - Common Hook: Bahut useful custom hook
*/