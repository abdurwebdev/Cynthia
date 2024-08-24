import React from 'react'

const About = () => {
  return (
    <section>
      <div className='flex  items-center justify-center'>
        <div className='flex items-center justify-start gap-x-10'>
          <div>
            <img className='w-96 h-96 object-cover rounded-full' src="https://cynthiaugwu.com/images/cynthia.png" alt="" />
          </div>
          <div className='flex flex-col w-96'>
            <h1>(ABOUT ME)</h1>
            <p>I'm a product designer with a passion for creating products that not only look good but also solve real problems. When I'm not sketching ideas on paper, you can find me binge-watching a Netflix series or playing video games. My design philosophy is simple: make it visually appealing, functional, and bring a smile to people's faces. I'm the designer you want on your team if you want to make people say 'I need that in my life!'.</p>
            <button className='place-content-start flex items-start mt-5 px-5 py-2 rounded-full   bg-white text-black w-32 justify-start'>Let's Talk</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About