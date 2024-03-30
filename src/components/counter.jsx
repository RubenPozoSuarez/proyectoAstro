import { useState } from 'preact/hooks';

export default function Counter() {

    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p class="text-yellow-300 text-xl mr-2">Count: {count}</p>
            <button class="border px-4 py-2 text-xl" onClick={() => setCount(count + 1)}>Increment</button>
            <button class="border px-4 py-2 text-xl" onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );

}
