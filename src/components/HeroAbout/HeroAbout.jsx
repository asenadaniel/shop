import React from 'react'

function HeroAbout() {
  return (
    <div className="relative flex items-center justify-center h-[90vh] md:h-[70vh] bg-cover bg-center bg-no-repeat object-cover"
      style={{ backgroundImage: "url('./image35.jpg')" }}>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-[5%] md:px-[4%] xl:px-[3%] 2xl:px-[2%] ">
        <div className="relative z-10  text-white ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
            Eriqueenah's Online Green Grocery Shop
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
            Eriqueenah is the leading online organic grocery delivery service in Nigeria. Order online from hundreds of fruits and vegetables and receive same-day delivery. Visit your favorite online green grocery store and get the best food shopping offers compared to any other online supermarket in Nigeria. This online grocery store in Lagos is great for grocery shopping and home delivery service. Online grocery shopping should be easy and that's what we do effortlessly at Eriqueenah - we ensure that in our online grocery store, you not only get great and organic produce but also the kind of excellent service and healthy standards you expect in an online food store. Shop with us to get the best prices and discounts on farm produce when you do your online grocery shopping in Lagos or from anywhere in Nigeria.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroAbout
