import { Suspense } from "react"

export default function Layout({ children }:{ children:React.ReactNode }) {

    return (
        <Suspense>
            <main className="min-h-screen w-screen bg-[url('/background/bg3.jpg')] bg-cover">
                { children }
            </main>
        </Suspense>
    )
}