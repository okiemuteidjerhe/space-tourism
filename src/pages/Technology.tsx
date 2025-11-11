import PageLayout from "../layout/PageLayout";
import launchLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg'
import launchPortrait from '../assets/technology/image-launch-vehicle-portrait.jpg'
import spaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg'
import spaceportLandscape from '../assets/technology/image-spaceport-landscape.jpg'
import spaceCapsuleLandscape from '../assets/technology/image-space-capsule-landscape.jpg'
import spaceCapsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg'
import data from '../data.json'
import { Navigate, NavLink, useParams } from "react-router-dom";

export default function Technology(){
    interface Technology{
        name: string
        description: string
    }

    const technology = data.technology as Technology[]

    const validParams = ['launch vehicle', 'space capsule', 'spaceport']

    const { name } = useParams()

    if(!validParams.includes(name!)){
        return <Navigate to='/not%20found' replace/>
    }

    const current = technology.find(t => t.name.toLowerCase() === name?.toLowerCase())

    const navLinks = technology.map((t, index) => {
        return (
            <NavLink
                key={t.name}
                to={`/technology/${t.name.toLowerCase()}`}
                className={({isActive}) => `w-10 lg:w-20 h-10 lg:h-20 rounded-full flex items-center justify-center text-preset-4-variant sm:text-preset-4-tab lg:text-preset-4 ${isActive ? 'bg-White text-Blue-900' : "border border-White/25 text-White"}`}
            >
                {index + 1}
            </NavLink>
        )
    })

    const images: Record<string, {[key:string]: string}> = {
        ['launch vehicle']: {
            landscape: launchLandscape,
            portrait: launchPortrait
        },

        ['space capsule']: {
            landspace: spaceCapsuleLandscape,
            portrait: spaceCapsulePortrait
        },
        spaceport: {
            landscape: spaceportLandscape,
            portrait: spaceportPortrait
        }
    }

    return (
        <PageLayout bgImg="bg-technology">
            <main className="my-6 sm:mt-10 sm:mb-0 lg:my-12 lg:ml-41.25 grow flex flex-col gap-6">
                <h3 className="w-full text-center sm:ml-10 sm:text-left">
                    <span className="text-preset-8 sm:text-preset-5-tab lg:text-preset-5 font-bold text-White/25 mr-6">03</span>
                    <span className="text-preset-8 sm:text-preset-5-tab lg:text-preset-5">SPACE LAUNCH 101</span>
                </h3>
                <section className="flex flex-col gap-8 lg:flex-row-reverse">
                    <picture key={current?.name} className="h-[322px] sm:h-[357px] lg:h-[600px]  overflow-hidden mt-16">
                        <source media="(min-width: 64rem)" srcSet={images[name!].portrait}/>
                        <source media="(min-width: 40rem)" srcSet={images[name!].landscape}/>
                        <img src={images[name!].portrait} alt={current?.name} className="w-full h-full  object-cover " />
                    </picture>
                    <div className="flex flex-col gap-10 lg:gap-16 mx-6 lg:flex-row lg:w-[635px] lg:items-center">
                        <nav className="flex justify-center items-center gap-4 lg:gap-8 lg:flex-col">
                            {navLinks}
                        </nav>
                        <div className="flex flex-col gap-4 text-center lg:text-left">
                            <div className="flex flex-col gap-4">
                                <h2 className="text-preset-4-variant sm:text-preset-3-mobile lg:text-preset-4 lg:py-3 text-White/50">THE TERMINOLOGY</h2>
                                <h1 className="text-preset-3-mobile sm:text-preset-4-tab lg:text-preset-3 lg:leading-16 lg:py-3">{current?.name.toUpperCase()}</h1>
                            </div>
                            <p className="text-preset-9-variant sm:text-preset-9-tab lg:text-preset-9 text-Blue-300">{current?.description}</p>
                        </div>
                    </div>
                </section>
            </main>
        </PageLayout>
    )
}