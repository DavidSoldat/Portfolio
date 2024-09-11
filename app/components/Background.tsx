// const AnimatedBackground = () => {
//   return (
//     <div className="background-transition absolute inset-0 h-[100vh] overflow-hidden bg-gradient-to-r from-purple-100 to-pink-100 dark:from-black dark:to-zinc-950">
//       <div className="absolute right-1/4 top-1/4 h-72 w-72 animate-move-slow rounded-full bg-pink-400 opacity-60 blur-3xl"></div>

//       <div className="absolute right-1/4 top-1/2 h-96 w-96 animate-move-fast rounded-full bg-purple-500 opacity-60 blur-3xl"></div>

//       <div className="absolute right-1/3 top-1/3 h-80 w-80 animate-move-medium rounded-full bg-blue-400 opacity-60 blur-3xl"></div>
//     </div>
//   );
// };

// export default AnimatedBackground;

const AnimatedBackground = () => {
  return (
    <div className="background-transition absolute inset-0 z-[-1] min-h-screen overflow-hidden bg-gradient-to-r from-purple-100 to-pink-100 dark:from-black dark:to-zinc-950">
      <div className="absolute right-1/4 top-1/4 h-72 w-72 animate-move-slow rounded-full bg-pink-400 opacity-60 blur-3xl"></div>

      <div className="absolute right-1/4 top-1/2 h-96 w-96 animate-move-fast rounded-full bg-purple-500 opacity-60 blur-3xl"></div>

      <div className="absolute right-1/3 top-1/3 h-80 w-80 animate-move-medium rounded-full bg-blue-400 opacity-60 blur-3xl"></div>
    </div>
  );
};

export default AnimatedBackground;
