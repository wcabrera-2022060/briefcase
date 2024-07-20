import './styles/Home.css'

export const Home = () => {
  return (
    <section className='s-hero target-section'>
      <div className='s-hero__bg rellax' data-rellax-speed={-7} />
      <div className='row s-hero__content'>
        <div className='column'>
          <div className='s-hero__content-about'>
            <h1>
              <span className='font-100'>Portafolio</span>
            </h1>
            <h3>
              <span>Mi nombre es Weslly Alexander Cabrera Morales</span>
              <br />
              Soy un apasionado por la tecnología y el desarrollo de software
              <br />
              <span>"El evance de la tecnología no para, tampoco deberiamos de detenernos nosotros" - Weslly Cabrera</span>
            </h3>


            <div className='container'>
              <div className="tooltip-container">
                <div className="tooltip">
                  <div className="profile">
                    <div className="user">
                      <div className="img">LN</div>
                      <div className="details">
                        <div className="name">Weslly Cabrera</div>
                        <div className="username">@wcabrera-2022060</div>
                      </div>
                    </div>
                    <div className="about">Connections</div>
                  </div>
                </div>
                <div className="text">
                  <a className="icon" href="https://www.linkedin.com/in/wesllycabrera/">
                    <div className="layer">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span className="fab fa-linkedin">
                        <svg viewBox="0 0 448 512" height="1em">
                          <path
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="text">LinkedIn</div>
                  </a>
                </div>
              </div>

              <div className="tooltip-container">
                <div className="tooltip">
                  <div className="profile">
                    <div className="user">
                      <div className="img">GH</div>
                      <div className="details">
                        <div className="name">Weslly Cabrera</div>
                        <div className="username">@wcabrera-2022060</div>
                      </div>
                    </div>
                    <div className="about">300+ Commits</div>
                  </div>
                </div>
                <div className="text">
                  <a className="icon" href="https://github.com/wcabrera-2022060">
                    <div className="layer">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span className="fab fa-linkedin">
                        <img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=w240-h480-rw" />
                      </span>
                    </div>
                    <div className="text">LinkedIn</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}