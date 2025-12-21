'use client';
import { useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>This is the page {count}</h1>
            <button onClick={() => setCount(c => c + 1)}>count++</button>
        </>
    );
}
