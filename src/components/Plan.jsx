const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <div className='grid grid-cols-2  grid-row-5'>
        <img className="row-span-3 object-cover w-full h-full p-2" src='https://images.unsplash.com/photo-1593407580968-2cb199a41421?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJpdmF0ZSUyMGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
        <img className="row-span-2  object-cover w-full h-full p-2" src='https://images.unsplash.com/photo-1609516903996-cf2ed8e5992a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGdvYSUyMGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
        <img className="row-span-1 object-cover w-full h-full p-2" src='https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdvYSUyMGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
        <img className=" object-cover w-full h-[70%] p-2" src='https://images.unsplash.com/photo-1623815616454-f4de13de2634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGdvYSUyMGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
        <img className=" object-cover w-full h-[70%] p-2" src='https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z29hJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
       
      </div>
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold ">Plan Your Next Trip</h3>
        <p className="text-3xl py-6">Explore. Dream. Discover.</p>
        <p className="pb-6">Traveling is a journey of self-discovery. Start planning your next trip and uncover new horizons.</p>
        <div>
            <button className="border-black mr-4 hover:shadow-xl">Learn More</button>
            <button className="bg-black text-white border-black hover:shadow-xl">Book Your Trip</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
