import { Link } from "gatsby"
import React from "react"
import Heading from "./Heading"

const InfoBlock = ({ heading }) => {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              odit consequatur eum quibusdam, temporibus cumque cupiditate modi
              hic vitae beatae eaque aliquid, totam ipsum eveniet a officia fuga
              minima, omnis nihil quaerat at fugit. Illum iusto recusandae, est,
              quidem facilis deserunt consequuntur commodi, alias mollitia
              laborum deleniti error voluptatum molestias?
            </p>
            <Link to="/about">
              <button className="btn btn-lg btn-warning">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoBlock
