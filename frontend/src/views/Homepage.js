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
  
  .card {
    position: relative; 
    background: rgba(10, 10, 10, 0.9);
    border: 5px solid #5DDF28;
    border-radius: 15px;
    width: 340px;
    padding: 20px;
    backdrop-filter: brightness(1.3);
  }
  
  .card::before {
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

  .welcome-field {
    align-text: center;
  }

  .login-button {
    margin-top: 40px;
    margin-bottom: 30px; 
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid #5DDF28;
    border-radius: 5px;
    background-color: black;
    color: #5DDF28;
    display: block; 
    margin-left: auto; 
    margin-right: auto; 
}

    .login-label {
    color: #5DDF28;
    text-decoration: none;

    }
`;

function Homepage() {

    const handleSubmit = (event) => {
        event.preventDefault(); // Previene el comportamiento predeterminado del formulario
        // Aquí puedes agregar el código para manejar el envío del formulario
    }

    return (
        <div>
          <style>{styles}</style>
          <section className="vh-100" style={{ backgroundColor: "#010000" }}>
            <div className="container py-5 mb-4">
              <div style={{ paddingTop: '156.825%', position: 'relative' }}></div>
              <div className="row d-flex justify-content-center align-items-center h-100">
                <img src={process.env.PUBLIC_URL + '/scream.gif'} alt="Mi GIF" style={{ width: '250px', height: '350px' }} />
                <div className="col col-xl-10">
                  <div className="card" style={{ borderRadius: "1rem" }}>
                    <div className="row g-0">
                      <div className="col-md-6 col-lg-5 d-none d-md-block"></div>
                      <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">
                          <form onSubmit={handleSubmit}>
                            <div className="d-flex align-items-center mb-3 pb-1">
                              <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }} />
                              <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <span className="h2 fw-bold mb-0 welcome-field">You Sure?</span>
                              </div>
                            </div>
                            <button type="submit" className="btn btn-dark btn-lg btn-block login-button">
                                <a href="/login/" className="login-label">Try..</a>
                            </button>
                          </form>
                        </div>
                      </div>
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

export default Homepage;