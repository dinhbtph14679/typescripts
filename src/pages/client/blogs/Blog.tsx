import React from 'react'

type Props = {}

const Blog = (props: Props) => {
  return (
    <body className="body-wrapper">
        <section className="page-title bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <h3>Blogs</h3>
            </div>
          </div>
        </div>
      </section>
        <section className="blog section">
            <div className="container">
                <div className="row pl-5 ml-5">
                    <div className="col-md-10 offset-md-1 col-lg-9 offset-lg-0">
                        <article>
                            <div className="image">
                                <img src="../../../public/image/bg_1.jpg"/>
                            </div>
                            <h3>Donec id dolor in erat imperdiet.</h3>
                            <ul className="list-inline">
                                <li className="list-inline-item">by <a href="">Admin</a></li>
                                <li className="list-inline-item">Nov 22,2016</li>
                            </ul>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores iusto tempore voluptatum blanditiis impedit alias magni ullam facilis perspiciatis magnam!</p>
                            <a href="" className="btn btn-transparent">Read More</a>
                        </article>
                        <article>
                            <div className="image">
                            <img src="../../../public/image/bg_1.jpg"/>
                            </div>
                            <h3>Donec id dolor in erat imperdiet.</h3>
                            <ul className="list-inline">
                                <li className="list-inline-item">by <a href="">Admin</a></li>
                                <li className="list-inline-item">Nov 22,2016</li>
                            </ul>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores iusto tempore voluptatum blanditiis impedit alias magni ullam facilis perspiciatis magnam!</p>
                            <a href="" className="btn btn-transparent">Read More</a>
                        </article>
                        <article>
                            <div className="image">
                                <img src="../../../public/image/bg_1.jpg"/>
                            </div>
                            <h3>Donec id dolor in erat imperdiet.</h3>
                            <ul className="list-inline">
                                <li className="list-inline-item">by <a href="">Admin</a></li>
                                <li className="list-inline-item">Nov 22,2016</li>
                            </ul>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores iusto tempore voluptatum blanditiis impedit alias magni ullam facilis perspiciatis magnam!</p>
                            <a href="" className="btn btn-transparent">Read More</a>
                        </article>
                        <article>
                            <div className="image">
                            <img src="../../../public/image/bg_1.jpg"/>
                            </div>
                            <h3>Donec id dolor in erat imperdiet.</h3>
                            <ul className="list-inline">
                                <li className="list-inline-item">by <a href="">Admin</a></li>
                                <li className="list-inline-item">Nov 22,2016</li>
                            </ul>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores iusto tempore voluptatum blanditiis impedit alias magni ullam facilis perspiciatis magnam!</p>
                            <a href="" className="btn btn-transparent">Read More</a>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    </body>
  )
}

export default Blog