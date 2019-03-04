const mongoose = require("./connection.js");
const Categories = require("../models/Categories.js");

const glamInfo = {
    collectionPalletImg: "https://i.pinimg.com/originals/5f/3d/d0/5f3dd0486d82f135c85685d54988e1c6.jpg",
    collectionPalletDescription: "Glam pallet description.",
    storeInfo: ["TJ Maxx", "Pier One", "West Elm"],
    furnitureImg1: "https://2.bp.blogspot.com/--56ZCKUTUJU/Wz4scJVZsZI/AAAAAAAAVno/3yQIHuTqO78I_u8NamSMbnYwSw-6-WsVwCLcBGAs/s1600/glam-pink-living-room-ideas.png",
    furnitureImg2: "https://i.pinimg.com/564x/d3/8e/36/d38e3633aa8b0898d1a36d1fcbbc8129.jpg",
    furnitureImg2: "https://i.pinimg.com/564x/e9/fa/52/e9fa52ac7cb5184d884f547749d7d10b.jpg",
    furnitureDescription: "Furniture description.",
}

const modernInfo = {
    collectionPalletImg: "https://cdn.kitchencabinetkings.com/media/siege/kitchen-color-schemes/kitchen-color-schemes_30_all-black.jpg",
    collectionPalletDescription: "Modern pallet description",
    storeInfo: ["Room and Board", "Direct Furniture Outlet", "Switch Modern"],
    furnitureImg1: "https://i0.wp.com/decoratrend.com/wp-content/uploads/2018/07/Modern-Glam-Living-Room-Decorating-Ideas-08.jpg",
    furnitureImg2: "https://i1.wp.com/trendehouse.com/wp-content/uploads/2018/12/Stunning-Modern-House-Design-Interior-Ideas-10.jpg",
    furnitureImg2: "https://i1.wp.com/trendehouse.com/wp-content/uploads/2018/12/Stunning-Modern-House-Design-Interior-Ideas-37.jpg",
    furnitureDescription: "Modern furniture description.",
}

const rusticInfo = {
    collectionPalletImg: "https://cdn.kitchencabinetkings.com/media/siege/kitchen-color-schemes/kitchen-color-schemes_27_white-brown-and-black.jpg",
    collectionPalletDescription: "rustic pallet description",
    storeInfo: ["Kirkalnds", "Rustic Trades Furniture", "Joss and Main"],
    furnitureImg1: "https://i2.wp.com/www.remodelaholic.com/wp-content/uploads/2015/08/OB-Rustic-Glam.jpg",
    furnitureImg2: "https://i2.wp.com/www.remodelaholic.com/wp-content/uploads/2015/08/rustic-glam-kitchen-island.jpg",
    furnitureImg2: "https://i2.wp.com/www.remodelaholic.com/wp-content/uploads/2015/08/rustic-glam-bathroom.jpg",
    furnitureDescription: "Rustic furniture info.",
}

const traditionalInfo = {
    collectionPalletImg: "https://cdn.kitchencabinetkings.com/media/siege/kitchen-color-schemes/kitchen-color-schemes_24_green-and-brown.jpg",
    collectionPalletDescription: "traditional pallet description",
    storeInfo: ["Ashley Home Furniture", "Birch Lane", "Ethan Allen"],
    furnitureImg1: "https://i0.wp.com/decoratrend.com/wp-content/uploads/2018/07/Modern-Glam-Living-Room-Decorating-Ideas-17.jpg",
    furnitureImg2: "https://i.pinimg.com/564x/f8/60/78/f860781d161a773e3e2a68ac42264198.jpg",
    furnitureImg2: "https://homedesignlover.com/wp-content/uploads/2014/11/16-Newark-Klima.jpg",
    furnitureDescription: "Traditional furniture info.",
}

const frenchInfo = {
    collectionPalletImg: "https://cdn.kitchencabinetkings.com/media/siege/kitchen-color-schemes/kitchen-color-schemes_6_all-white.jpg",
    collectionPalletDescription: "french pallet description",
    storeInfo: ["Joss and Main", "Pier One", "Serena and Lily"],
    furnitureImg1: "http://roomary.info/wp-content/uploads/2018/07/Marvelous-And-Luxury-Living-Room-Decoration-21.jpg",
    furnitureImg2: "http://roomary.info/wp-content/uploads/2018/07/Marvelous-And-Luxury-Living-Room-Decoration-29.jpg",
    furnitureImg2: "http://www.nativeasthma.org/ldk_cdn/el/elegant-living-room-ideas-fotolip-rich-image-and-wallpaper_inspired-living-room.jpg",
    furnitureDescription: "French furniture info.",
}

const eclecticInfo = {
    collectionPalletImg: "https://cdn.kitchencabinetkings.com/media/siege/kitchen-color-schemes/kitchen-color-schemes_7_blue-and-orange.jpg",
    collectionPalletDescription: "Eclectic pallet description",
    storeInfo: ["Rejuvenation", "Zin Home", "Houzz"],
    furnitureImg1: "https://i2.wp.com/decoratrend.com/wp-content/uploads/2018/07/Modern-Glam-Living-Room-Decorating-Ideas-13.jpg",
    furnitureImg2: "https://i2.wp.com/decoratrend.com/wp-content/uploads/2018/07/Modern-Glam-Living-Room-Decorating-Ideas-33.jpg?",
    furnitureImg2: "https://www.jonathanadler.com/on/demandware.static/-/Sites-catalog-master/default/dw0f26d47d/hi-res/ushi-res/Web_FA16_HainesEmerald_TurnerVitrine_ElectrumSconce.jpg",
    furnitureDescription: "Eclectic furniture info.",
}




const glam = new Categories({
    categoriesImg: "https://secureservercdn.net/ip-ad.mwp2.iad2.secureserver.net/ogu.8d6.godaddywp.com/wp-content/uploads/2018/05/modern-glam-decor-how-to-decorate.jpg",
    category: "Glam",
    description: "Beautiful, feminine, and clean design with shimmering accents is at the heart of this style.",
    designItems: [glamInfo]
})

const modern = new Categories({
    categoriesImg: "https://www.luxdeco.com/styleguide/wp-content/uploads/2015/02/Luxury-modern-interior-designer-MR-Architecture-and-Decor.jpg",
    category: "Modern",
    description: "Minimalism, clean straight lines, neutral colors, and geometry all encompass the modern aesthetic.",
    designItems: [modernInfo]
})

const rustic = new Categories({
    categoriesImg: "http://www.banana-film.com/wp-content/uploads/2018/06/rustic-living-room-ideas-new-38-unique-rustic-home-decorating-ideas-gallery-kitchen-design-of-rustic-living-room-ideas.jpg",
    category: "Rustic",
    description: "Rustic style emphasizes rugged, natural beauty. It embraces nature-inspired textures, simple and earthy colors, and ultimately an unpretentious, organic warmth.",
    designItems: [rusticInfo]
})

const traditional = new Categories({
    categoriesImg: "http://www.decorationforhouse.com/wp-content/uploads/2014/07/15-stunning-tuscan-living-room-designs-1.jpg",
    category: "Traditional",
    description: "Traditional design is a timeless go-to style that exudes easy elegance and comfort and is a great route for those who appreciate antiques, classic art, symmetry, and design rich with history.",
    designItems: [traditionalInfo]
})

const french = new Categories({
    categoriesImg: "https://res.cloudinary.com/monefiles/image/fetch/w_630,h_420,c_fill/http://www.poandpo.com/hs1114/french_interior_design.jpg",
    category: "French",
    description: "Inspired by the stunning homes of Provence, French country design often incorporates ruffles, distressed woodwork, mixed patterns, and both vibrant and subdued hues.",
    designItems: [frenchInfo]
})
const eclectic = new Categories({
    categoriesImg: "https://www.decoraid.com/wp-content/uploads/2018/08/eclectic-interior-design-style.jpg",
    category: "Eclectic",
    description: "Eclectic is a popular adjective in interior design parlance, meaning a decor that comprises heterogeneous elements — a mixture of textures, time periods, styles, trends, and colors.",
    designItems: [eclecticInfo]
})

//Removes any duplicate categories and re-seeds
Categories.remove({})
    //.then(() => Food.remove({}))
    .then(() => Categories.create([glam, modern, rustic, traditional, french, eclectic]))
    //.then(() => Food.insertMany([pizza, injera, padThai, fishTaco]))
    .then(() => {
        console.log("seeded successfully");
        mongoose.connection.close();
    })
    .catch(err => console.log(err, "error!"));