import Header from "./Header"
import type { ReactNode } from "react"

interface PageLayoutProps{
    bgImg : string
    children: ReactNode
}

export default function PageLayout(props:PageLayoutProps){
    return (
        <div className={`flex flex-col w-full max-w-[1440px] min-h-screen bg-layout ${props.bgImg}`}>
            <Header/>
            {props.children}
        </div>
    )
}