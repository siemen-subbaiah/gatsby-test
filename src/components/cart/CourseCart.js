import React from "react"
import Heading from "../Heading"
import Img from "gatsby-image"

const CourseCart = ({ mycourses }) => {
  return (
    <section className="py-5">
      <div className="container">
        <Heading title="Courses" />
        <div className="row">
          {mycourses.edges.map(edge => {
            return (
              <div
                className="col-11 col-md-6 d-flex my-3 mx-auto"
                key={edge.node.id}
              >
                <Img fixed={edge.node.image.fixed} />
                <div className="flex-grow-1 px-3">
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-0">{edge.node.title}</h6>
                    <h6 className="mb-0 text-success">₹{edge.node.price}</h6>
                  </div>
                  <p className="text-muted">
                    <small>{edge.node.description}</small>
                  </p>
                  <button
                    data-item-id={edge.node.id}
                    data-item-price={edge.node.price}
                    data-item-url="https://www.xnxx.com"
                    data-item-description={edge.node.description}
                    data-item-image={edge.node.image.fixed.src}
                    data-item-name={edge.node.title}
                    className="btn btn-warning snipcart-add-item"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CourseCart
