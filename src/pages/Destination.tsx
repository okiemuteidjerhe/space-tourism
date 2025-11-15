import PageLayout from "../layout/PageLayout";
import { Navigate, NavLink, useParams } from "react-router-dom";
import moon from "../assets/destination/image-moon.webp"
import mars from '../assets/destination/image-mars.webp'
import titan from '../assets/destination/image-titan.webp'
import europa from '../assets/destination/image-europa.webp'
import data from '../data.json'

interface Destination{
    name: string
    description: string
    distance: string
    travel: string
    [key:string] : any
}

export default function Destination(){
    const images: Record<string,string> = {
        moon : moon,
        mars : mars,
        titan : titan,
        europa: europa
    }

    /* useEffect(()=>{
    let imageSrcLinksArray = Object.values(images)
    imageSrcLinksArray.forEach(link=>{
        const img = new Image()
        img.src = link
    })
    },[]) */

    

    const destinationData:Destination[] = data.destinations
    const links = destinationData.map(d => {
        return (
            <NavLink
                key={d.name}
                className={({isActive}) => `text-preset-7 sm:text-preset-8 text-Blue-300 pb-[15px] ${isActive ? 'border-b border-White text-White' : ""} hover:border-b hover:border-White/30`}
                to={`/destination/${d.name.toLowerCase()}`}
            >
                {d.name.toUpperCase()}
            </NavLink>
            )
    })
    
    const validParams = ['moon', 'mars', 'titan', 'europa']
    const {name} = useParams<{name:string}>();

    if(!validParams.includes(name!)){
        return <Navigate to='/not%20found' replace/>    
    }
    
    const current = destinationData.find(d => d.name.toLowerCase() === name?.toLowerCase())

    return (
        <PageLayout bgImg="bg-destination">
            <main className="m-6 sm:m-10 lg:my-12 lg:mx-41 grow flex flex-col gap-12 sm:gap-[66px] lg:gap-[157px] items-center">
                <h3 className="w-full text-center sm:text-left">
                    <span className="text-preset-8 sm:text-preset-5-tab lg:text-preset-5 font-bold text-White/25 mr-6">01</span>
                    <span className="text-preset-8 sm:text-preset-5-tab lg:text-preset-5">PICK YOUR DESTINATION</span>
                </h3>
                <section className="flex flex-col lg:flex-row gap-8 sm:gap-[73px] lg:gap-[109px] grow sm:mx-[87px]">
                    <div className='w-[150px] h-[150px] mx-auto sm:w-[300px] sm:h-[300px]'>
                        <img key={current?.name} src={images[name!]} alt={current?.name} />
                    </div>
                    <div className="flex flex-col gap-6 items-center lg:w-[445px] lg:items-start">
                        <nav className="px-10 lg:pl-0 flex gap-8">
                            {links}
                        </nav>

                        <div className="flex flex-col gap-4 text-center lg:text-left">
                            <h1 className="text-preset-3 text-White sm:text-preset-1-variant lg:text-preset-2">{current?.name.toUpperCase()}</h1>
                            <p className="text-preset-9-variant text-Blue-300 sm:text-preset-9-tab lg:text-preset-9">{current?.description}</p>
                        </div>

                        <hr className="w-full bg-White opacity-25"/>
                        
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex flex-col gap-3 text-center lg:text-left">
                                <h4 className="text-preset-7 text-Blue-300 p-1">AVG. DISTANCE</h4>
                                <h2 className="text-preset-6 text-White p-2">{current?.distance.toUpperCase()}</h2>
                            </div>
                            <div className="flex flex-col gap-3 text-center lg:text-left">
                                <h4 className="text-preset-7 text-Blue-300 p-1">EST. TRAVEL TIME</h4>
                                <h2 className="text-preset-6 text-White p-2">{current?.travel.toUpperCase()}</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </PageLayout>
    )
}