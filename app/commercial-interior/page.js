import React from 'react'
import ProductSlider from '../Component/ProductSlider'

const page = () => {
     const kitchenImages = [
  {
    src: "./interior-design.jpg",
    alt: "Modern modular kitchen interior",
  },
  {
    src: "./interiorProject1.jpg",
    alt: "Luxury modular kitchen design",
  },
  {
    src: "./InteriorProject2.jpg",
    alt: "Contemporary modular kitchen",
  },
  {
    src: "./living-room.jpg",
    alt: "Premium modular kitchen",
  },
];

  return (
    <ProductSlider images={kitchenImages} title={"Commercial Interior"} des={'A kitchen is more than just a cooking space; it&apos;s where memories are made, stories are shared, and moments are cherished. We create modular kitchens that combine convenience, functionality and timeless elegance.'} />
  )
}

export default page