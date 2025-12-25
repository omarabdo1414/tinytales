
const PageTitle = ({title} : {title: string}) => {
    return (
        <section className="w-full">
        <div className="relative py-16 text-center bg-[url('../../public/Images/background.svg')]">
            <div className="relative hidden lg:block">
                <h1 className="text-3xl font-semibold text-gray-900 relative z-10">
                    {title}
                </h1>
                <h1 className="text-7xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-transparent text-stroke opacity-20">
                    {title}
                </h1>
            </div>
            <div className="relative lg:hidden">
                <h1 className="text-lg font-semibold text-gray-900 relative z-10">
                    T-Shirt
                </h1>
                <h1 className="text-4xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-transparent text-stroke opacity-20">
                    T-Shirt
                </h1>
            </div>
        </div>
        </section>
    )
}

export default PageTitle;