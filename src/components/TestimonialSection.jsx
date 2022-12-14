import img_avatar_anisha from '../assets/img/avatar-anisha.png'
import img_avatar_ali from '../assets/img/avatar-ali.png'
import img_avatar_richard from '../assets/img/avatar-richard.png'


const testimonials = [
  {
    id: 1,
    img_avatar: img_avatar_anisha, 
    name: 'Anisha Li', 
    description: `“Manage has supercharged our team’s workflow. The ability to
    maintain visibility on larger milestones at all times keeps
    everyone motivated.”`
  },
  {
    id: 2,
    img_avatar: img_avatar_ali, 
    name: 'Ali Bravo', 
    description: `“We have been able to cancel so many other subscriptions since
    using Manage. There is no more cross-channel confusion and
    everyone is much more focused.”`
  },
  {
    id: 3,
    img_avatar: img_avatar_richard, 
    name: 'Richard Watts', 
    description: `“Manage has supercharged our team’s workflow. The ability to
    maintain visibility on larger milestones at all times keeps
    everyone motivated.”`
  },
]

const Testimonial_Card = ({ img_avatar, name, description, id }) => {
  return (
    <div className={`${(id > 1) ? 'hidden': ''} flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3`}>
      <img src={img_avatar} className='w-16 -mt-14' alt="avatar" />
      <h5 className='text-lg font-bold'>{ name }</h5>
      <p className='text-sm text-darkGrayishBlue'>
      { description }
      </p>
    </div>
  )
}

export const TestimonialSection = () => {
  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">What's Different About Manage?</h2>

        {/* ▼ testimonials container */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* ▼ testimonial cards */}
          { 
            testimonials.map( item => <Testimonial_Card {...item} key={item.id}/> ) 
          }
        </div>
        <div className='my-16'>
          <a
            href="#"
            className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}