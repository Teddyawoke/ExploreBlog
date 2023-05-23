function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5
                    justify-between font-bold px-10 py-5 mb-10">
        <div >
            <h1 className="text-7xl"> Ethiopia Blog</h1>
            <h2 className="underline decoration-4 decoration-[#F7]">Everything Ethiopia</h2>
        </div>
        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            What new in Ethiopia | Everything you need to know in one place
        </p>
    </div>
  )
}

export default Banner