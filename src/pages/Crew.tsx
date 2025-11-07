import PageLayout from "../layout/PageLayout";
import data from '../data.json'
import { NavLink, useParams } from "react-router-dom";
import Commander from '../assets/crew/image-douglas-hurley.webp'
import Mission_Specialist from '../assets/crew/image-mark-shuttleworth.webp'
import Pilot from '../assets/crew/image-victor-glover.webp'
import Flight_Engineer from '../assets/crew/image-anousheh-ansari.webp'

export default function Crew(){
    interface Crew{
        name: string
        role: string
        bio: string
        [key:string]: any
    }

    const images: Record<string, string> = {
        commander: Commander,
        ["mission specialist"]: Mission_Specialist,
        ['flight engineer']: Flight_Engineer,
        pilot: Pilot
    }

    const crew = data.crew as Crew[]
    const { role } = useParams<{role:string}>()
    const current = crew.find(c => c.role.toLowerCase() === role?.toLowerCase())

    const navLinks = crew.map(c => {
        return (
            <NavLink 
                key={c.role}
                to={`/crew/${c.role.toLowerCase()}`}
                className={({isActive}) => `w-2.5 h-2.5 lg:w-3.5 lg:h-3.5 rounded-full  ${isActive ? 'bg-White' : 'bg-White/30'}`}
            ></NavLink>
        )
    })
    return (
        <PageLayout bgImg="bg-crew">
            <main className="m-6 sm:m-10 sm:mb-0 lg:my-12 lg:mx-41.25 grow flex flex-col gap-6">
                <h3 className="w-full text-center sm:text-left">
                    <span className="text-preset-8 sm:text-preset-5-tab lg:text-preset-5 font-bold text-White/25 mr-6">02</span>
                    <span className="text-preset-8 sm:text-preset-5-tab lg:text-preset-5">MEET YOUR CREW</span>
                </h3>
                <section className="flex flex-col gap-8 sm:gap-[120px] lg:gap-8 items-center sm:mx-22 lg:mx-0 lg:flex-row">
                    <div className="pt-10 lg:pt-0 flex flex-col gap-6 lg:gap-10 items-center lg:items-start lg:w-[539px]">
                        <div className="flex flex-col gap-6 text-center lg:text-left lg:py-[140px]">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-preset-4-variant sm:text-preset-3-mobile lg:text-preset-4 lg:py-3 text-White/50">{current?.role.toUpperCase()}</h2>
                                <h1 className="text-preset-3-mobile sm:text-preset-4-tab lg:text-preset-3 lg:leading-16 lg:py-3">{current?.name.toUpperCase()}</h1>
                            </div>
                            <p className="text-preset-9-variant sm:text-preset-9-tab lg:text-preset-9 text-Blue-300">{current?.bio}</p>
                        </div>
                        <nav className="flex gap-4 lg:pb-12">
                            {navLinks}
                        </nav>
                    </div>
                    <div className="relative w-68 h-85 sm:w-[447px] sm:h-140 lg:w-[540px] lg:h-169 overflow-hidden mx-auto">
                        <img src={images[role!]} alt="" className="w-full h-full object-cover max-sm:mask-gradient lg:mask-gradient"/>
                    </div>
                </section>
            </main>
        </PageLayout>
    )
}