import Card from "@/app/components/recent-post-card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="main">
            <div className="text-container">
              <h1> Hi&#44; I am Arsalan&#44; Generative AI Eng</h1>
              <p>
                A certified Cloud-Native Generative AI Engineer with expertise
                in harnessing the power of AI and cloud technologies to build
                innovative, scalable solutions.
              </p>
              <button> Download Resume </button>
            </div>

            <div>
              <div className="hero-image">
                <img
                  src="/profile.jpeg"
                  alt="Error!"
                  width={300}
                  height={300}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section Ends Here! */}

      {/* Recent Post Section */}
      <section className="recent-post">
        <div className="container">
          <div className="container-main">
            <div className="heading">
              <h3> Recent Post </h3>
              <button> View all </button>
            </div>

            <div className="card-parent">
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </section>
      {/* Recent Post Section Ends Here! */}

      {/* Feature Section */}
      <section className="featured-section">

        <div className="container">
          
          <div className="feature-main">


            <div className="main-heading">
              <h3> Featured Works </h3>
            </div>

          <div className="feature-card-parent">
            <div className="feature-card">
              <img src="./img1.png" alt="Error" width={245} height={180} />
              <div className="card-content">
                <h2> Designing Dashboards </h2>
                <div className="badge-parent">
                  <div className="feature-badge">
                    <p> 2020 </p>
                  </div>
                  <p> Dashboard </p>
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Blanditiis voluptatibus fugiat, consectetur, doloremque
                  obcaecati voluptates facilis atque soluta ad quasi, in quod
                </p>
              </div>
            </div>

            <div className="feature-card">
              <img src="./img2.png" alt="Error" width={245} height={180} />
              <div className="card-content">
                <h2> Designing Dashboards </h2>
                <div className="badge-parent">
                  <div className="feature-badge">
                    <p> 2020 </p>
                  </div>
                  <p> Dashboard </p>
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Blanditiis voluptatibus fugiat, consectetur, doloremque
                  obcaecati voluptates facilis atque soluta ad quasi, in quod
                </p>
              </div>
            </div>

            <div className="feature-card">
              <img src="./img3.png" alt="Error" width={245} height={180} />
              <div className="card-content">
                <h2> Designing Dashboards </h2>
                <div className="badge-parent">
                  <div className="feature-badge">
                    <p> 2020 </p>
                  </div>
                  <p> Dashboard </p>
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Blanditiis voluptatibus fugiat, consectetur, doloremque
                  obcaecati voluptates facilis atque soluta ad quasi, in quod
                </p>
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>
      {/* Feature Section Ends Here! */}
    </>
  );
}
