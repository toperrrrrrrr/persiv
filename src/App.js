import React from 'react';
import logos from './assets/imgs/logo.png';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
   return (
      <div className="h-screen flex items-center justify-center bg-blue-500">
         <header id="header" class="header d-flex align-items-center fixed-top">
            <div class="container-fluid container-xl position-relative d-flex align-items-center">

               <a href="index.html" class="logo d-flex align-items-center me-auto">
                  <img src={logos} alt="" />
                  <h1 class="sitename">FlexStart</h1>
               </a>

               <nav id="navmenu" class="navmenu">
                  <ul>
                     <li><a href="#hero" class="active">Home<br /></a></li>
                     <li><a href="#about">About</a></li>
                     <li><a href="#services">Services</a></li>
                     <li><a href="#portfolio">Portfolio</a></li>
                     <li><a href="#team">Team</a></li>
                     <li><a href="blog.html">Blog</a></li>
                     <li class="dropdown"><a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                           <li><a href="#">Dropdown 1</a></li>
                           <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                              <ul>
                                 <li><a href="#">Deep Dropdown 1</a></li>
                                 <li><a href="#">Deep Dropdown 2</a></li>
                                 <li><a href="#">Deep Dropdown 3</a></li>
                                 <li><a href="#">Deep Dropdown 4</a></li>
                                 <li><a href="#">Deep Dropdown 5</a></li>
                              </ul>
                           </li>
                           <li><a href="#">Dropdown 2</a></li>
                           <li><a href="#">Dropdown 3</a></li>
                           <li><a href="#">Dropdown 4</a></li>
                        </ul>
                     </li>
                     <li class="listing-dropdown"><a href="#"><span>Listing Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                           <li>
                              <a href="#">Column 1 link 1</a>
                              <a href="#">Column 1 link 2</a>
                              <a href="#">Column 1 link 3</a>
                           </li>
                           <li>
                              <a href="#">Column 2 link 1</a>
                              <a href="#">Column 2 link 2</a>
                              <a href="#">Column 3 link 3</a>
                           </li>
                           <li>
                              <a href="#">Column 3 link 1</a>
                              <a href="#">Column 3 link 2</a>
                              <a href="#">Column 3 link 3</a>
                           </li>
                           <li>
                              <a href="#">Column 4 link 1</a>
                              <a href="#">Column 4 link 2</a>
                              <a href="#">Column 4 link 3</a>
                           </li>
                           <li>
                              <a href="#">Column 5 link 1</a>
                              <a href="#">Column 5 link 2</a>
                              <a href="#">Column 5 link 3</a>
                           </li>
                        </ul>
                     </li>
                     <li><a href="#contact">Contact</a></li>
                  </ul>
                  <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
               </nav>

               <a class="btn-getstarted flex-md-shrink-0" href="index.html#about">Get Started</a>

            </div>
         </header>

      </div>
   );
}

export default App;

