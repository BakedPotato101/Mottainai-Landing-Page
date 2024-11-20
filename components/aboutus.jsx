import {
  CurrencyDollarIcon,
  GlobeAmericasIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Affordable.",
    description:
      "We help restaurants save their customers money by offering surplus food at discounted rates.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Environmental.",
    description:
      "Prevent food waste by diverting it from landfills, reducing environmental impact one meal at a time.",
    icon: GlobeAmericasIcon,
  },
  {
    name: "Restaurant-Friendly.",
    description:
      "Boost restaurant reputation while cutting costs, creating a win-win for businesses and customers.",
    icon: BuildingStorefrontIcon,
  },
];

export default function AboutUs() {
  return (
    <section id="mission" className="">
      <div className="overflow-hidden bg-mottai-red py-16 sm:py-24">
        <div className="mx-auto bg-mottai-tan shadow-md rounded-xl p-8 sm:p-12 md:p-20 max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div className="px-4 sm:px-6 md:px-8 lg:pr-4 lg:pt-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-mottai-red">
                  Our Mission
                </h2>
                <p className="mt-2 text-pretty text-3xl sm:text-4xl font-semibold tracking-tight">
                  Save Food. Save Money.
                </p>
                <p className="mt-6 text-base sm:text-lg">
                  Mottai’s mission is to help local restaurants save money by
                  saving food, helping prevent food from hitting landfills, and
                  instead letting consumers get it for cheap. Every year,
                  billions of pounds of food are wasted in restaurants in the
                  US. Mottai aims to make that number as small as possible.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-mottai-red">
                        <feature.icon
                          className="absolute left-1 top-1 h-6 w-6 text-mottai-red"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:shrink-0 lg:grow">
              <img
                src="/phones.png"
                alt="Mottainai Hero"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
