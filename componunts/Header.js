import React from 'react'
import Link from 'next/link'

const StandHeader = () => {
    return (
        <header className="flex justify-between w-full px-15 py-20 text-center text-gray-900 bg-pink-100">
            <h1 className="text-4xl">My Stand</h1>
            <div>

                <nav>
                    <Link href="/about">
                        <a className="px-2 py-1 text-gray-800 rounded-lg">about</a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default StandHeader




