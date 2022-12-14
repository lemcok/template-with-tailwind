
const feature_list = [
  {
    numbered: '01',
    title: 'Track Company-wide progress',
    description: `See how your day-to-day  tasks fit into the wider vision. Go
    from traking progress at the milestone level all the way done
    to the smallest of details. Never lose sight of the bigger picture again.`
  },
  {
    numbered: '02',
    title: 'Advanced built-in reports',
    description: `Set internal delivery estimates and track progress toward
    company goals. Our customisable dashboard helps you built out the
    reports you need to keep key stakeholders informed.`
  },
  {
    numbered: '03',
    title: 'Everything you need in one place',
    description: `Stop jumping from one service to another to communicate,
    store files, track tasks and share documents.Manage offers an all-in-one
    team productivity solution.`
  },
]

const Feature_Item  = ({ numbered, title, description }) => {
  return (
    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
      <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
        <div className="flex items-center space-x-2">
          <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
            {numbered}
          </div>
          <h3 className="text-base font-bold md:mb-4 md:hidden">
            {title}
          </h3>
        </div>
      </div>
      <div>
        <h3 className="hidden mb-4 text-lg font-bold md:block">
          { title }
        </h3>
        <p className="text-darkGrayishBlue">
          {description}
        </p>
      </div>
    </div>
  )
}

export const FeaturesSection = () => {
  return (
    <section id="features">
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionatily your team needs,
            without the complexity. Our software is tailor-made for
            modern digital product teams.
          </p>
        </div>

        {/* ▼ numbered list */}
        <div className="flex flex-col space-y-8 md:w-1/2">
          { feature_list.map( item => <Feature_Item {...item } key={item.numbered} />) }
        </div>
      </div>
    </section>
  );
}