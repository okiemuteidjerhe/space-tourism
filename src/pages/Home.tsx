import PageLayout from "../layout/PageLayout"

export default function Home() {
    return (
        <PageLayout bgImg="bg-home">
            <main className="m-6 sm:p-32 lg:pt-[417px] lg:pb-32 lg:px-[165px] grow flex flex-col lg:flex-row items-center lg:justify-between">
                
                <div className="flex flex-col gap-6 text-center lg:text-left">
                    <h3 className="text-Blue-300 text-preset-8 sm:text-preset-5">SO, YOU WANT TO TRAVEL TO</h3>
                    <h1 className="text-White text-preset-1-variant sm:text-preset-1">SPACE</h1>
                    <p className="text-Blue-300 text-preset-9-variant sm:text-preset-9-tab lg:text-preset-9 lg:w-[540px]">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>

                <button className="bg-White w-36 h-36 sm:w-[272px] sm:h-[272px] rounded-full mx-[91px] my-[119px] sm:mt-12 text-Blue-900 text-preset-4-variant sm:text-preset-4 lg:m-0">
                    EXPLORE
                </button>

            </main>
        </PageLayout>
    )
}