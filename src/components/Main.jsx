const Main = () => {
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-full object-cover'
        src='https://images.unsplash.com/photo-1585911735226-1c39d1df845b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1234&q=80'
      />
      <div className='bg-black/35 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
            <p>All Inclusive</p>
            <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Getaways</h1>
            <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
            Travel to your own private oasis and experience the ultimate getaway with exclusive access to a serene beach and luxurious accommodations.
            </p>
            <button className='bg-white text-black  shadow-md shadow-black/60 hover:scale-105 duration-100'>Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
