
const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 px-6 py-20 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl">
          About E-Shop
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-gray-300">
          Welcome to E-Shop, your trusted online shopping platform where
          quality products and a simple shopping experience come together.
        </p>
      </section>

      {/* About Content */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Who We Are
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              E-Shop is an online shopping platform created to make shopping
              easy, convenient and accessible. We provide a wide range of
              products with a focus on quality and customer satisfaction.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Our goal is to provide customers with a smooth shopping
              experience, from discovering products to placing an order.
            </p>
          </div>

          {/* Right */}
          <div className="rounded-2xl bg-white p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900">
              Why Choose E-Shop?
            </h3>

            <div className="mt-6 space-y-5">
              <div>
                <h4 className="font-semibold text-gray-900">
                  Quality Products
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  We focus on providing reliable and quality products.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Easy Shopping
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Browse products and shop with a simple and user-friendly
                  experience.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Customer Satisfaction
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Customer satisfaction is one of our main priorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Mission
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Our mission is to make online shopping simple, reliable and
            enjoyable. We want to connect customers with useful products
            while providing a smooth and convenient shopping experience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

