import React from 'react';
import TestimonialTemplate from '../../Utils/TestimonialTemplate/TestimonialTemplate';

const App = () => {
  const testimonials = [
    {
      name: "Anna Trevor",
      designation: "Customer",
      review: "Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.",
      image: "images/client.jpg",
    },
    {
      name: "John Doe",
      designation: "Customer",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.",
      image: "images/client.jpg",
    },
    {
      name: "Jane Smith",
      designation: "Customer",
      review: "Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: "images/client.jpg",
    },
  ];

  return (
    <div>
      <TestimonialTemplate testimonials={testimonials} />
    </div>
  );
};

export default App;
