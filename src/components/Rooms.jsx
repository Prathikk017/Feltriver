const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20  lg:mb-[20%] md:mb-[35%]  grid lg:grid-cols-3 gap-4 m-auto py-16 px-4 '>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
        <p className='pt-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sed
          blanditiis suscipit nemo provident quasi fugiat consectetur
          perspiciatis doloremque quos!
        </p>
      </div>

      <div className='grid grid-cols-2 col-span-1 gap-2  lg:w-[80vh] lg:mr-20 md:h-0  lg:ml-28 ml-5 lg:pt-4'>
        
      <img
          className=' row-span-1 object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        />
        <img
          className='row-span-2 object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        />
        
        <img
          className='object-cover w-full h-full'
          src='https://plus.unsplash.com/premium_photo-1678297269980-16f4be3a15a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3IlMjBob3RlbCUyMGJlZCUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        />
       
      </div>
    </div>
  );
};

export default Rooms;
