
const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto text-white space-y-4 pt-4" data-aos="fade-up">
      <h2 className="text-3xl text-center font-bold">Contact <span className="font-extrabold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Me</span></h2>
      <p className="text-lg font-normal text-gray-400 ml-2">
      Feel free to reach out for collaborations or just a friendly chat. 
      Fill out the form below or contact me directly!
      </p>
      <form className="">
        <div className="p-4 flex flex-col">
          <label className="text-gray-300 font-medium mb-2">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" className="focus:outline-none border focus:ring-2 focus:ring-cyan-500 rounded-md px-4 py-2" required />
        </div>
        <div className="p-4 flex flex-col">
          <label className="text-gray-300 font-medium mb-2">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" className="focus:outline-none border focus:ring-2 focus:ring-cyan-500 rounded-md px-4 py-2" required />
        </div>
        <div className="p-4 flex flex-col">
          <label className="text-gray-300 font-medium mb-2">Message:</label>
          <textarea id="message" name="message" rows="3" placeholder="Your Message" className="focus:outline-none border focus:ring-2 focus:ring-cyan-500 rounded-md px-4 py-2" required></textarea>
        </div>
        <button type="submit" className="px-4 py-2 ml-4 bg-gray-600 text-gray-300 font-normal rounded-2xl hover:text-black hover:bg-cyan-500 transition-all duration-500">Send Message</button>
      </form>

    </div>
  )
}

export default Contact