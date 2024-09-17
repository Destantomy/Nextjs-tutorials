'use client'

import { useState } from "react";

export default function AdminProductPage() {
    const [status, setStatus] = useState('');
    const revalidate = async() => {
        const res = await fetch('http://localhost:3000/api/revalidate?tag=products&secret=1234', {
            method: 'POST',
        });
        if(!res.ok) {
            setStatus('revalidate fail');
        } else {
            const response = await res.json();
            if(response.revalidate) {
                setStatus('revalidate success');
            }
        }
    };
    
    return (
        <div>
            <p>{status}</p>
            <button className="bg-black text-white p-3 m-5" onClick={() => revalidate()}>Revalidate</button>
        </div>
    )
}