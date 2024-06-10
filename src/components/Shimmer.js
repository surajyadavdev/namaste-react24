import React from 'react';

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {Array(16).fill("").map((_, index) => (
        <div key={index} className="w-36 h-48 bg-gray-200 rounded-md shadow-md animate-pulse">
          <div className="h-full w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-md"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;







// import React from 'react';

// const Shimmer = () => {
//   return (
//     <div className="flex flex-wrap gap-4 p-4">
//       {Array(16).fill("").map((_, index) => (
//         <div key={index} className="w-36 h-48 bg-gray-200 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]"></div>
//       ))}
//     </div>
//   );
// };

// export default Shimmer;






// const Shimmer = () =>{
//     return (
//         <div className="shimmer-container">
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//         </div>
//     );
// }; 

// export default Shimmer;