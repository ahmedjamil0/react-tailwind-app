const App = () => {
  return <div className="p-6">
    <h1 className="text-yellow-500  text-8xl font-bold ">Hello, World</h1>
    <p className="text-gray-700 text-2xl font-normal mt-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, distinctio. </p>
    <ul className="flex mt-2">
      <li className="px-2">Home</li>
      <li className="px-2">Contact</li>
    </ul>
      <h2 className="text-gray-700 text-4xl">Home</h2>
      <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia impedit ab ad sequi ipsum consequuntur inventore laboriosam ipsam quas molestias.</p>
 <h2 className="text-gray-700 text-4xl">Contact</h2>
     <form>
       <div>
       <label htmlFor="email" className="text-xl font-semibold text-gray-700">Email</label>
       <input type="email" name="email" className="border" />

       </div>
       <div>

       <label htmlFor="name" className="text-xl font-semibold text-gray-700">Name</label>
       <input type="text" name="name" className="border" />
       </div>
       <button className="bg-yellow-600 px-5 py-2 mt-3 text-white">Send</button>
     </form>
</div>;
};

export default App;
