// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import "./landing_page.css"
// import Header from "./Header"

// function LandingPage() {
//     return (
//         <div>

//         <Header />

//             <div className='ctop'>
//                 <div className="card w-75 mx-auto " style={{ background: "linear-gradient(#000080, #000080, #000080, #FFFFFF)" }}>
//                     <div className="row">
//                         <div className='col-4'>
//                             <img src="https://www.kindpng.com/picc/m/704-7047532_background-startup-hd-png-download.png" width="200" className="card-img-top" />
//                         </div>
//                         <div className='col-8'>
//                             <div id="cardbody" className="card-body">
//                                 <h5 className="card-title">Welcome to GUSEC.</h5><br />
//                                 <p className="card-text">Gujarat University Startup and Entrepreneurship Council (GUSEC) is one of India’s leading startup support systems, which has set an unprecedented benchmark by facilitating at zero-cost. Right in the heart of Gujarat University, with an ever-growing infrastructure, 100+ innovative tech and non-tech startups, GUSEC has played a pivotal role in shaping and nurturing the startup ecosystem in Gujarat.</p>
//                                 <a href="https://gusec.edu.in/" className="btn btn-primary">Learn More</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }

// export default LandingPage;

import "bootstrap/dist/css/bootstrap.min.css";
import "./landing_page.css";
import Header from "./Header";

function LandingPage() {
  return (
    <div>
      <Header />

      <div className="ctop">
        <div
          className="card w-75 mx-auto "
          style={
            {
              // background: "linear-gradient(#000080, #000080, #000080, #FFFFFF)",
            }
          }
        >
          <div className="row">
            <div className="col-4">
              <img
                src="https://www.thebusinessrankers.com/wp-content/uploads/2020/10/startup.jpeg"
                width="300"
                height="250"
                className="card-img-top"
              />
            </div>
            <div className="col-8">
              <div id="cardbody" className="card-body">
                <h5 className="card-title">Welcome to Upstart</h5>
                
                <p className="card-text">
                  Startups – regardless of what they do or the industry in which
                  they operate – are all based on the principle of creating a
                  scalable company that provides customers with new or better
                  goods or services than what currently exists. Some industries,
                  however, are more popular than others.A startup or start-up is
                  a company or project undertaken by an entrepreneur to seek,
                  develop, and validate a scalable business model.Startups are
                  companies or ventures that are focused on a single product or
                  service that the founders want to bring to market.
                </p>
                {/* <a href="https://gusec.edu.in/" className="btn btn-primary">
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;