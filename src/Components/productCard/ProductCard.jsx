import React from "react";
function Card({ title, description, price, imageUrl, mode }) {
  return (
    <div className="p-4 md:w-1/4 drop-shadow-lg">
      <div
        className="h-full border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
        style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
      >
        <div className="flex justify-center cursor-pointer">
          <img className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src={imageUrl} alt="blog" />
        </div>
        <div className="p-5 border-t-2">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '' }}>{title}</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>{description}</h1>
          <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹ {price}</p>
          <div className="flex justify-center">
            <button type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Layout({ mode }) {
  // Sample card data, replace this with your actual data
  const cardData = [
    {
      title: "E-Bharat",
      description: "Men Solid Cotton ",
      price: 804,
      imageUrl: "https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/p/i/o/-original-imagnfuhgfhvptfc.jpeg?q=70&crop=false",
    },
    {
        title: "E-Bharat",
        description: "Formal Blazer ",
        price: 4399,
        imageUrl: "https://rukminim2.flixcart.com/image/832/832/xif0q/blazer/g/l/i/46-arafbz5041-arrow-original-imagz3er7dks64hy.jpeg?q=70&crop=false",
    },
    {
        title: "E-Bharat",
        description: "Woven Kanjivaram",
        price: 999,
        imageUrl: "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/z/s/m/-original-imagvbtnmbxtr3td.jpeg?q=70&crop=false",
    },
    {
        title: "E-Bharat",
        description: "Bollywood Silk Blend",
        price: 3999,
        imageUrl: "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/3/i/m/free-3418s2443j-siril-unstitched-original-imagxff4hf3tge3p.jpeg?q=70&crop=false",
    }
    // Add more card data as needed
  ];

  return (
    <>
      <div>
        <div className="content">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Our Latest Collection</h1>
                <div className="h-1 w-20 bg-pink-600 rounded"></div>
              </div>

              <div className="flex flex-wrap -m-4">
                {cardData.map((card, index) => (
                  <Card key={index} {...card} mode={mode} />
                ))}
              </div>
            </div>
          </section>
        </div>
        
      </div>
    </>
  );
}

export default Layout;
