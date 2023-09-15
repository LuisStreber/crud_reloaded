import React from 'react';

const styles = `
  .vh-100 {
    height: 100vh;
  }

  body {
    color: #5DDF28;
  }

  a {
    color: #5DDF28;
  }

  .register-link {
    color: #5DDF28;
  }

  .gif-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .gif {
    max-width: 100%;
  }

  .container {
    background: rgba(0, 0, 0, 0.6);
    box-shadow: inset 0 0 30px rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
  }
  
  .custom-card {
    position: relative; 
    background: rgba(10, 10, 10, 0.9);
    border: 5px solid #5DDF28;
    border-radius: 15px;
    width: 340px;
    padding: 20px;
    backdrop-filter: brightness(1.3);
    margin-bottom: 3rem;
    margin-top: 3rem;
    margin-left: 3rem;
  }
  
  .custom-card::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 5px solid #5DDF28;
    border-radius: 25px;
    box-shadow: 0 0 20px #5DDF28, 0 0 30px #5DDF28, 0 0 40px #5DDF28, 0 0 50px #5DDF28, 0 0 75px #5DDF28;
    opacity: 0.7;
    z-index: -1;
  }

`;

const Dashboard = () => {
    return (
      <div>
        <style>{styles}</style>
        <section className="vh-100" style={{ backgroundColor: "#010000" }}>
          <div className="container py-5 mb-4">     
          <h1 className="text-center mb-4">Dashboard</h1>      
            <div style={{ paddingTop: '156.825%', position: 'relative' }}></div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="custom-card">
                  <div className="card-body">
                    <h5 className="card-title">Card 1</h5>
                    <p className="card-text">Content of Card 1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="custom-card">
                  <div className="card-body">
                    <h5 className="card-title">Card 2</h5>
                    <p className="card-text">Content of Card 2</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="custom-card">
                  <div className="card-body">
                    <h5 className="card-title">Card 3</h5>
                    <p className="card-text">Content of Card 3</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="custom-card">
                  <div className="card-body">
                    <h5 className="card-title">Card 4</h5>
                    <p className="card-text">Content of Card 4</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="custom-card">
                  <div className="card-body">
                    <h5 className="card-title">Card 5</h5>
                    <p className="card-text">Content of Card 5</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="custom-card">
                  <div className="card-body">
                    <h5 className="card-title">Card 6</h5>
                    <p className="card-text">Content of Card 6</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="custom-card">
                  <div className="card-body">
                    <h5 className="card-title">Card 7</h5>
                    <p className="card-text">Content of Card 7</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="custom-card">
                  <div className="card-body">
                    <h5 className="card-title">Card 8</h5>
                    <p className="card-text">Content of Card 8</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="custom-card">
                  <div className="card-body">
                    <h5 className="card-title">Card 9</h5>
                    <p className="card-text">Content of Card 9</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-light text-center text-lg-start">
          <div className="text-center p-3" style={{ backgroundColor: "black" }}>
            01010100 01101000 01100101 00100000 01110011 01110100 01110010 01101111 01101110 01100111 00100000 01110011 01110101 01110010 01110110 01101001 01110110 01100101 01110011
          </div>
        </footer>
      </div>
    );
  }
  
  export default Dashboard;