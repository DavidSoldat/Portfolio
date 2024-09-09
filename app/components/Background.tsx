const AnimatedBackground = () => {
  return (
    <div className='absolute h-[100dvh] inset-0 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-black dark:to-zinc-950 background-transition'>
      <div className='absolute top-1/4 right-1/4 w-72 h-72 bg-pink-400 opacity-60 rounded-full blur-3xl animate-move-slow'></div>

      <div className='absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500 opacity-60 rounded-full blur-3xl animate-move-fast'></div>

      <div className='absolute top-1/3 right-1/3 w-80 h-80 bg-blue-400 opacity-60 rounded-full blur-3xl animate-move-medium'></div>
    </div>
  );
};

export default AnimatedBackground;
