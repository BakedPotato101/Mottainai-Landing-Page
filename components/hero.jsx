export default function Hero() {
  return (
    <div className="bg-mottai-tan">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-36 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40 pt-10">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="relative">
              <h1 className="text-7xl font-special tracking-tight text-gray-900 sm:text-8xl">
                Let's Save <br /> Some Food!
              </h1>
              {/* Squiggly Line */}
              {/* <svg
                className="absolute -bottom-2 left-0 w-full h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 40"
                fill="none"
              >
                <path
                  d="M0 20c40-20 80 20 120 0s80-20 120 0 80 20 120 0 80-20 120 0 80 20 120 0 80-20 120 0 80 20 120 0"
                  stroke="#CD2424"
                  strokeWidth="3"
                  strokeOpacity="0.6"
                  fill="none"
                />
              </svg> */}
              <img src="/underline.png" className=""/>
            </div>
            <p className="mt-4 text-lg text-gray-700">
              Mottai helps local restaurants save food and money while reducing
              waste. Join us in turning waste into opportunity.
            </p>
            <div className="mt-10 flex items-center w-full outline-6 outline-orange-600">
              <a
                href="#"
                className="mx-auto rounded-full bg-mottai-red px-8 py-2 text-lg font-semibold text-white shadow-sm hover:bg-mottai-accent transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Download the app
              </a>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
            <img
              src="/taco-plate.webp"
              alt="Mottainai Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
