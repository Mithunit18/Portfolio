import { useEffect } from 'react';
import my_main from './my_main.jpg';
import Typed from 'typed.js';


const Main = () => {

  useEffect(() => {
    var typed = new Typed(".typed-text", {
      strings: ["Frontend Developer", "FullStack Developer", "Cricketer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    <main className='flex flex-col sm:flex-row items-center justify-between mt-4 text-gray-300 space-y-4 pt-32 max-w-7xl mx-auto lg:ml-8'>
      <img
        src={my_main}
        alt="Mithun_M"
        style={{  borderRadius: "50%", objectFit: "cover", border: "3px solid cyan" }}
        data-aos="zoom-in"
        className='ml-0 lg:ml-32 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]'
      />
      <div className='flex flex-col items-center font-extrabold space-y-3 w-full' data-aos="fade-right" >
        <h3 className='lg:text-3xl'>Hello, It's me</h3>
        <h1 className='text-xl lg:text-6xl bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent font-extrabold'>MITHUN M</h1>
        <h3 className='lg:text-2xl'>And I'm a <span className='typed-text text-gray-400'></span></h3>
      </div>
      
      {/* Resume Download Button */}
    </main>
          <div className="text-center pt-16" data-aos="fade-up">
        <a href="/MITHUN_updated_resume.pdf" download>
          <button className='px-8 py-4 bg-gray-600 rounded-2xl hover:bg-cyan-500 hover:text-black transition-all duration-500 font-medium' >Download My Resume</button>
        </a>
      </div>
    </>
  );
};


export default Main;
