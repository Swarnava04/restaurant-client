import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Chef from "./components/Chef/Chef";
import Awards from "./components/Awards/Awards";
import Ambiance from "./components/Ambiance/Ambiance";
import Sustainability from "./components/Sustainability/Sustainability";
import Events from "./components/Events/Events";
import OnlinePresence from "./components/OnlinePresence/OnlinePresenece";
import Menu from "./components/Menu/Menu";
import Reviews from "./components/Reviews/Reviews";
import "./App.css";
import { axiosClient } from "./utils/axiosClient";
const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get(`/api/restaurantData`);
        console.log("The object is", response);

        const data = response.data;

        setData(data);
        console.log("The json data is:-", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // const staticData = {
  //   restaurant: {
  //     name: "Epicurean Symphony",
  //     chef: {
  //       name: "Chef Isabella Culinary Maestro",
  //       bio: "An internationally renowned chef with a flair for creating culinary masterpieces that transcend borders.",
  //       signature_dish: "Mango Tango Fusion",
  //     },
  //     awards: [
  //       {
  //         year: 2023,
  //         organization: "Michelin Guide",
  //         award: "Three Michelin Stars",
  //       },
  //       {
  //         year: 2022,
  //         organization: "James Beard Foundation",
  //         award: "Outstanding Chef of the Year",
  //       },
  //       {
  //         year: 2021,
  //         organization: "World's 50 Best Restaurants",
  //         award: "Top 5 Restaurants Worldwide",
  //       },
  //     ],
  //     ambiance: {
  //       description:
  //         "Epicurean Symphony offers a sophisticated and cozy ambiance, with contemporary decor and soft lighting, creating the perfect setting for an unforgettable dining experience.",
  //     },
  //     sustainability: {
  //       initiatives: [
  //         {
  //           name: "Farm-to-Table",
  //           description:
  //             "We source our ingredients locally to support farmers and ensure the freshest, seasonal produce in our dishes.",
  //         },
  //         {
  //           name: "Waste Reduction",
  //           description:
  //             "We prioritize reducing food waste through careful portioning, composting, and recycling practices.",
  //         },
  //         {
  //           name: "Ocean-Friendly Seafood",
  //           description:
  //             "We are committed to serving sustainably sourced seafood to promote the health of our oceans and marine life.",
  //         },
  //       ],
  //     },
  //     events: {
  //       upcoming_events: [
  //         {
  //           name: "Culinary Artistry Showcase",
  //           date: "2023-12-15",
  //           description:
  //             "Join us for a night of culinary artistry as Chef Isabella presents her latest creations in an exclusive tasting event.",
  //         },
  //         {
  //           name: "Wine and Dine Pairing Night",
  //           date: "2024-01-20",
  //           description:
  //             "Indulge in an evening of exquisite wine and food pairings, curated by our sommelier and Chef Isabella.",
  //         },
  //       ],
  //     },
  //     online_presence: {
  //       website: "https://www.epicureansymphony.com",
  //       social_media: {
  //         facebook: "https://www.facebook.com/epicureansymphony",
  //         instagram: "https://www.instagram.com/epicureansymphony",
  //         twitter: "https://www.twitter.com/epicureansymph",
  //       },
  //     },
  //     menu: {
  //       categories: [
  //         {
  //           name: "Artisanal Appetizers",
  //           items: [
  //             {
  //               name: "Mango Tango Ceviche",
  //               description:
  //                 "Fresh ceviche with mango, avocado, and citrus-infused seafood medley.",
  //               price: 32.99,
  //             },
  //             {
  //               name: "Truffle Butter Escargot",
  //               description:
  //                 "Escargot baked in truffle butter, served with garlic-infused baguette.",
  //               price: 28.99,
  //             },
  //           ],
  //         },
  //         {
  //           name: "Global Fusion Entrees",
  //           items: [
  //             {
  //               name: "Saffron-Spiced Chicken Tikka Masala",
  //               description:
  //                 "Tender chicken tikka in a rich saffron-infused tomato curry, served with basmati rice.",
  //               price: 42.99,
  //             },
  //             {
  //               name: "Chimichurri-Infused Argentinian Ribeye",
  //               description:
  //                 "Grilled ribeye steak marinated in zesty chimichurri sauce, served with sweet potato puree.",
  //               price: 56.99,
  //             },
  //           ],
  //         },
  //         {
  //           name: "Epicurean Indulgences",
  //           items: [
  //             {
  //               name: "Passion Fruit Cheesecake",
  //               description:
  //                 "Creamy cheesecake with a tropical twist of passion fruit, topped with mango coulis.",
  //               price: 18.99,
  //             },
  //             {
  //               name: "Chocolate Hazelnut Decadence",
  //               description:
  //                 "Decadent chocolate hazelnut mousse layered with hazelnut praline, served with espresso gelato.",
  //               price: 24.99,
  //             },
  //           ],
  //         },
  //       ],
  //       seasonal_menu: {
  //         name: "Seasonal Symphony",
  //         items: [
  //           {
  //             name: "Butternut Squash Sage Risotto",
  //             description:
  //               "Creamy risotto with roasted butternut squash, sage, and Parmesan cheese.",
  //             price: 36.99,
  //           },
  //           {
  //             name: "Mango Coconut Basil Sorbet",
  //             description:
  //               "Refreshing sorbet with the tropical combination of mango, coconut, and fresh basil.",
  //             price: 14.99,
  //           },
  //         ],
  //       },
  //     },
  //     reviews: [
  //       {
  //         customer_name: "CulinaryExplorer",
  //         rating: 5,
  //         comment:
  //           "Epicurean Symphony takes gastronomy to new heights. Chef Isabella's creations are a culinary masterpiece.",
  //       },
  //       {
  //         customer_name: "FoodieConnoisseur",
  //         rating: 4.5,
  //         comment:
  //           "An epicurean delight! The fusion of flavors in every dish is simply extraordinary.",
  //       },
  //       {
  //         customer_name: "GourmetGlobetrotter",
  //         rating: 5,
  //         comment:
  //           "Exceptional service, world-class cuisine, and a dining experience that lingers on the palate.",
  //       },
  //     ],
  //   },
  // };

  return (
    <div className="App">
      <Header restaurantName={data?.restaurant?.name} />
      <Chef chef={data?.restaurant?.chef} />
      <Awards awards={data?.restaurant?.awards} />
      <Ambiance ambiance={data?.restaurant?.ambiance} />
      <Sustainability
        initiatives={data?.restaurant?.sustainability?.initiatives}
      />
      <Events upcomingEvents={data?.restaurant?.events?.upcoming_events} />
      <OnlinePresence
        website={data?.restaurant?.online_presence.website}
        socialMedia={data?.restaurant?.online_presence.social_media}
      />
      <Menu
        categories={data?.restaurant?.menu.categories}
        seasonalMenu={data?.restaurant?.menu?.seasonal_menu}
      />
      <Reviews reviews={data?.restaurant?.reviews} />
    </div>
    // <div>hello</div>
  );
};
export default App;
