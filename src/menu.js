// import React, { useState } from 'react';
// import { X } from 'lucide-react';
// import '@fortawesome/fontawesome-free/css/all.css';

// const MenuBar = () => {
//   const [activeItem, setActiveItem] = useState('Home');
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

//   const menuItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '#about' }, // Scroll to About section
//     { name: 'Leadership', path: '#legacy-scrollbar' }, // Scroll to Leadership And Legacy section
//     { name: 'Values', path: '#product' },
//     { name: 'Solutions', path: '#service' }, // Scroll to Solutions section
//     { name: 'Making an Impact', path: '#animated' },
//   ];

//   const getBackgroundColor = () => {
//     switch (activeItem) {
//       case 'Home':
//         return 'bg-[#cc194a]';
//       case 'About':
//         return 'bg-[#eb9466]';
//       case 'Leadership And Legacy':
//         return 'bg-[#848fa5]';
//       case 'Values':
//         return 'bg-[#afbda5]';
//       case 'Solutions':
//         return 'bg-red-300';
//       case 'Making an Impact':
//         return 'bg-green-300';
//       default:
//         return 'bg-white-200';
//     }
//   };

//   const handleScroll = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       window.scrollTo({
//         top: section.offsetTop,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <div>
//       {/* Button to open menu, shown only on Home page and when the menu is closed */}
//       {window.location.pathname === '/' && !isMenuOpen && (
//         <button
//           className="absolute top-8 w-4 h-4 right-8 text-white rounded flex items-center justify-center"
//           style={{ zIndex: 1000 }} // Added z-index here
//           onClick={() => setIsMenuOpen(true)}
//         >
//           <i className="fas fa-bars"></i> {/* Font Awesome hamburger icon */}
//         </button>
//       )}

//       {/* MenuBar container */}
//       {isMenuOpen && (
//         <div className={`min-h-screen ${getBackgroundColor()} transition-colors duration-300`}>
//           <div className="container mx-auto px-4 pb-8 pt-12">
//             <div className="flex justify-between items-center mb-8">
//               <X
//                 className="w-7 h-7 text-white-600 absolute left-[95%] cursor-pointer"
//                 onClick={() => setIsMenuOpen(false)} // Close menu when clicked
//               />
//             </div>
//             <nav className="flex flex-col items-center space-y-6 mt-[70px]">
//               {menuItems.map(({ name, path }) => (
//                 <a
//                   key={name}
//                   href={path}
//                   className={`font-bold text-white text-3xl hover:text-4xl transition-all duration-300`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     if (path.startsWith('#')) {
//                       handleScroll(path.substring(1)); // Remove # from the path
//                     } else {
//                       window.location.href = path; // Use Link for other navigation
//                     }
//                     setActiveItem(name);
//                     setIsMenuOpen(false); // Close the menu when an item is clicked
//                   }}
//                 >
//                   {name.toUpperCase()}
//                 </a>
//               ))}
//             </nav>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MenuBar;
