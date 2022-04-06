import React from 'react'

type Props = {}

const AboutPage = (props: Props) => {
  return (
    <body className="body-wrapper">
      <section className="page-title bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">

              <h3>Abouts</h3>
            </div>
          </div>
        </div>
      </section>

    <section className="section">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="about-img">
                    <img src="../../../public/image/bg_1.jpg" className="img-fluid w-100 rounded" alt=""/>
                </div>
            </div>
            <div className="col-lg-6 pt-5 pt-lg-0">
                <div className="about-content">
                    <h3 className="font-weight-bold">Introduction</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est justo, aliquam nec tempor
                        fermentum, commodo et libero. Quisque et rutrum arcu. Vivamus dictum tincidunt magna id
                        euismod. Nam sollicitudin mi quis orci lobortis feugiat.</p>
                    <h3 className="font-weight-bold">How we can help</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est justo, aliquam nec tempor
                        fermentum, commodo et libero. Quisque et rutrum arcu. Vivamus dictum tincidunt magna id
                        euismod. Nam sollicitudin mi quis orci lobortis feugiat. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nunc est justo, aliquam nec tempor fermentum, commodo et libero.
                        Quisque et rutrum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est
                        justo, aliquam nec tempor fermentum, commodo et libero. Quisque et rutrum arcu. Vivamus dictum
                        tincidunt magna id euismod. Nam sollicitudin mi quis orci lobortis feugiat.</p>
                </div>
            </div>
        </div>
    </div>
    </section>


    </body>
  )
}

export default AboutPage;