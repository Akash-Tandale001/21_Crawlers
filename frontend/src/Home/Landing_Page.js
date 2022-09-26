import "bootstrap/dist/css/bootstrap.min.css";
import "./landing_page.css";
import Header from "../NavBar/Header";

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
                <br />
                <p className="card-text">
                  Startups – regardless of what they do or the industry in which
                  they operate – are all based on the principle of creating a
                  scalable company that provides customers with new or better
                  goods or services than what currently exists. Some industries,
                  however, are more popular than others.A startup or start-up is
                  a company or project undertaken by an entrepreneur to seek,
                  develop, and validate a scalable business model.Startups are
                  companies or ventures that are focused on a single product or
                  service that the founders want to bring to market. These
                  companies typically don't have a fully developed business
                  model and, more crucially, lack adequate capital to move onto
                  the next phase of business.
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
