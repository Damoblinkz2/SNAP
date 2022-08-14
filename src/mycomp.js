import React from "react";
import './App.css';
import './index.css'; 

function Show() {
     document.querySelector('.side-bar').style.right = '0%';
}

function Hide() {
    document.querySelector('.side-bar').style.right = '-100%';
}

function dropToggle1() {
  document.querySelector('.drp1').classList.toggle('showhide');
}

function dropToggle2() {
  document.querySelector('.drp2').classList.toggle('showhide');
}

function Land() {
    return(
       <header className=".container-fluid">
         <div className="head">

           <div className="logo">
             <a href="index.html">
              <img src='logo.svg' alt="logo" />
             </a>
           </div>

          
           <Menu />

    </div>

    
        <Access />

    <div className="menu-icon">
         <div onClick={Show}>
            <img src="icon-menu.svg" alt="icon-menu" />
         </div>
    </div>

       </header>
    );
}

function Menu() {
        return(
          <div className="menu">
           <div>
              <Features />
          </div>

          <div>
            <Company />
          </div>

          <div>
            <div>
              <div className="career">
                  <a href="#">Career </a>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="about">
                  <a href="#">About </a>
              </div>
            </div>
          </div>

          </div>  
        );
}

function Features() {
   return(
    <div className=".features">
        <div onClick={dropToggle1}>
        <span>Features</span>
        <img src="icon-arrow-down.svg"  alt="arrow-down" />
        </div>
       
        <div className="dropdwn drp1">
            <div>
                <img src="icon-todo.svg" alt="todo" />
                <a href="#" className="todo">Todo list</a>
            </div>

            <div>
                <img src="icon-calendar.svg" alt="calendar" />
                <a href="#" className="calendar">Calendar</a>
            </div>

            <div>
                <img src="icon-reminders.svg" alt="remind" />
                <a href="#" className="reminder">Reminders</a>
            </div>

            <div>
                <img src="icon-planning.svg" alt="planning" />
                <a href="#" className="planning">Planning</a>
            </div>
        </div>
    </div>
   )
 }

 function Company() {
    return(
     <div className=".company">
        <div onClick={dropToggle2}>
         <span>Company</span>
         <img src="icon-arrow-down.svg"  alt="arrow-down" />
        </div>

        <div className="dropdwn drp2">
            <div>
                <a href="#" className="history">History</a>
            </div>

            <div>
                <a href="#" className="team">Our Team</a>
            </div>

            <div>
                <a href="#" className="blog">Blog</a>
            </div>

        </div>
     </div>
    )
  }

  function Access() {
      return(
        <div className="access">
        <div className="login">
            <a href="#">Login </a>
        </div>

        
        <div className="signin">
            <a href="#">Register </a>
        </div>
</div>
      );
  }



  export function Banner() {
    
    return(
        <div className="container banner">
           <div  className="row">
              <div className="col-12 mobile">
                <img src="image-hero-mobile.png" alt="heroimg" className="mobileImg" />
              </div>
              <div className="col-12 col-md-6 bannerwrite">
                <div>
                <h1>Make remote work</h1>
                <br />
                <p className="description">Get your team in sync,no matter your location.
                Streamline processes,create team rituals,and watch productivity soar.</p>
                <br />
                <button>Learn more</button>
                </div>
                <br />
                <br />
                <br />

                <div className="row">
                    <div className="col">
                        <img src="client-databiz.svg" alt="company" />
                    </div>

                    <div className="col">
                        <img src="client-audiophile.svg" alt="company" />
                    </div>

                    <div className="col">
                        <img src="client-meet.svg" alt="company" />
                    </div>

                    <div className="col">
                        <img src="client-maker.svg" alt="company" />
                    </div>
                </div>
              </div>

              <div className="col-md-6 desktop">
                 <img src="image-hero-desktop.png" alt="heroimg"  className="desktopImg"/>
              </div>
           </div>
        </div>
    )
    
  }

  export function Sidebar() {
       return(
         <div className="side-bar">
           <div onClick={Hide}>
            <img src="icon-close-menu.svg" alt="close" />
           </div>

           <div className="sidemenu">
             <Menu />
           </div>

           <div>
            <Access />
           </div>
         </div>
       );
  }
  
export default Land;