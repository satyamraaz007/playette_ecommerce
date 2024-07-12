import React from 'react';
import PropTypes from 'prop-types';

const TestimonialTemplate = ({ testimonials }) => {
  return (
    <section className="client_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Customer's Testimonial</h2>
        </div>
        <div id="carouselExample3Controls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="box col-lg-10 mx-auto">
                  <div className="img_container">
                    <div className="img-box">
                      <div className="img_box-inner">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                    </div>
                  </div>
                  <div className="detail-box">
                    <h5>{testimonial.name}</h5>
                    <h6>{testimonial.designation}</h6>
                    <p>{testimonial.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel_btn_box">
            <a className="carousel-control-prev" href="#carouselExample3Controls" role="button" data-slide="prev">
              <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExample3Controls" role="button" data-slide="next">
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

TestimonialTemplate.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      designation: PropTypes.string.isRequired,
      review: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TestimonialTemplate;
