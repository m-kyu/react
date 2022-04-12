
import './css/common.scss';
import React, { Suspense, lazy } from 'react';

import {HashRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from './Home.js';
import Work from './Work.js';
import About from './About.js';

// Import Swiper styles
import 'swiper/css';


function App() {
  


  return (
    <HashRouter>
       <header>
        <h1>로고</h1>
         <nav>
           <Link to="/">Home</Link>
           <Link to="/work">Work</Link>
           <Link to="/about">About</Link>
           <Link to="/about">service</Link>
         </nav>
       </header>
       

       <main>
         <Suspense fallback={<div>Loading...</div>}>
           <Routes>
             <Route path="/" element={<Home />}  />
             <Route path="/work" element={<Work />} />
             <Route path="/about" element={<About />} />
           </Routes>
         </Suspense>
       </main>

       <footer>하단 카피라이트</footer>     
     </HashRouter>
    
  );
}

export default App;


// import './css/common.scss';
// import React, { Suspense, lazy } from 'react';
// import {HashRouter, Routes, Route, Link} from "react-router-dom";
// import Home from './Home.js';
// import Work from './Work.js';
// import About from './About.js';

// function App() {
//   return (
//     <HashRouter>
//       <header>
//         <h1>로고</h1>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/work">Work</Link>
//           <Link to="/about">About</Link>
//         </nav>
//       </header>

//       <main>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/" element={<Home />}  />
//             <Route path="/work" element={<Work />} />
//             <Route path="/about" element={<About />} />
//           </Routes>
//         </Suspense>
//       </main>

//       <footer>하단 카피라이트</footer>     
//     </HashRouter>
//   );
// }

// export default App;
