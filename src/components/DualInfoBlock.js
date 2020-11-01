import { Link } from "gatsby"
import React from "react"
import Heading from "./Heading"

const DualInfoBlock = ({ heading }) => {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              unde mollitia quo dolorem molestiae saepe ipsam. Eaque officiis
              eveniet voluptas labore incidunt quam quidem earum ut aliquam!
              Soluta, praesentium tenetur harum deserunt vitae hic ullam, sunt
              iure dolorem optio, fuga facilis autem rem! Iste, perferendis?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Officiis, iusto aliquam! Cum magnam asperiores hic! Veritatis
              placeat eaque rem cupiditate excepturi culpa ipsa, atque deleniti
              ducimus, blanditiis facere at explicabo. Quod ut expedita tempore.
              In, iure reprehenderit accusantium consequatur maxime ullam
              perferendis voluptates labore vitae? Commodi assumenda voluptatem
              laudantium, recusandae accusantium consequuntur et
            </p>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Just Gatsby</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Incidunt cum debitis sunt
                  accusamus! Voluptas minus sit nemo possimus, facere vitae!
                  lorem70
                </p>
                <Link to="/about" className="btn btn-warning btn-block">
                  More Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DualInfoBlock
