const mongoose = require("./connection.js");
const { Categories } = require("../models/Categories.js");
const { Design } = require('../models/Categories')
const { Flair } = require('../models/Categories.js')

const princessRoom = new Flair({
    flairName: "Princess Room",
    flairImg: "https://i.pinimg.com/564x/14/7e/cf/147ecf48085257fe273aec901cd3085a.jpg",
    flairDescription: "This room is fit for a princess!",
    storeInfo: ["Restoration Hardware", "Pottery Barn Kids", "West Elm"],
    flairFurnitureImg1: "https://i.pinimg.com/564x/53/3f/c9/533fc9c86efa05fde6717e752102dfb2.jpg",
    flairFurnitureImg2: "https://i.pinimg.com/564x/9d/04/36/9d04363df5cecd51d12e51e7986baad2.jpg",
    flairFurnitureImg3: "https://i.pinimg.com/564x/03/24/8d/03248ddfbfb3d2382b9dcc388f4c6709.jpg",
    flairFurnitureDescription: " Tufted cribs, flower pained walls, One of a kind room fit for a baby princess."
})


const glamInfo = new Design({
    category: "Glam",
    collectionPalletImg: "https://cdn.kitchencabinetkings.com/media/siege/kitchen-color-schemes/kitchen-color-schemes_6_all-white.jpg",
    collectionPalletDescription: "Glam pallet description.",
    storeInfo: ["TJ Maxx", "Pier One", "West Elm"],
    furnitureImg1: "https://i.pinimg.com/564x/b1/25/57/b12557e4d135cb736872b667298ce68a.jpg",
    furnitureImg2: "https://i.pinimg.com/564x/f1/fe/f8/f1fef822c95649c29f21e76572a95d98.jpg",
    furnitureImg3: "https://i.pinimg.com/564x/e9/fa/52/e9fa52ac7cb5184d884f547749d7d10b.jpg",
    furnitureDescription: "Furniture description.",
    glamFlair: [princessRoom]
})

const modernInfo = new Design({
    category: "Modern",
    collectionPalletImg: "https://cdn.kitchencabinetkings.com/media/siege/kitchen-color-schemes/kitchen-color-schemes_30_all-black.jpg",
    collectionPalletDescription: "Modern pallet description",
    storeInfo: ["Room and Board", "Direct Furniture Outlet", "Switch Modern"],
    furnitureImg1: "https://i2.wp.com/trendehouse.com/wp-content/uploads/2018/12/Stunning-Modern-House-Design-Interior-Ideas-18.jpg",
    furnitureImg2: "https://i1.wp.com/trendehouse.com/wp-content/uploads/2018/12/Stunning-Modern-House-Design-Interior-Ideas-10.jpg",
    furnitureImg3: "https://i1.wp.com/trendehouse.com/wp-content/uploads/2018/12/Stunning-Modern-House-Design-Interior-Ideas-37.jpg",
    furnitureDescription: "Modern furniture description.",
})

const rusticInfo = new Design({
    category: "Rustic",
    collectionPalletImg: "https://cdn.kitchencabinetkings.com/media/siege/kitchen-color-schemes/kitchen-color-schemes_11_pink-and-white.jpg",
    collectionPalletDescription: "rustic pallet description",
    storeInfo: ["Kirkalnds", "Rustic Trades Furniture", "Joss and Main"],
    furnitureImg1: "https://i0.wp.com/trendehouse.com/wp-content/uploads/2019/01/The-Best-Rustic-Interior-Design-Ideas-To-Bring-Unique-Look-03.jpg",
    furnitureImg2: "https://i2.wp.com/www.remodelaholic.com/wp-content/uploads/2015/08/rustic-glam-kitchen-island.jpg",
    furnitureImg3: "https://i2.wp.com/www.remodelaholic.com/wp-content/uploads/2015/08/rustic-glam-bathroom.jpg",
    furnitureDescription: "Rustic furniture info.",
})

const traditionalInfo = new Design({
    category: "Traditonal",
    collectionPalletImg: "https://cdn.kitchencabinetkings.com/media/siege/kitchen-color-schemes/kitchen-color-schemes_24_green-and-brown.jpg",
    collectionPalletDescription: "traditional pallet description",
    storeInfo: ["Ashley Home Furniture", "Birch Lane", "Ethan Allen"],
    furnitureImg1: "https://i.pinimg.com/564x/dd/79/ce/dd79ce32befb05f1045347ac739c83d2.jpg",
    furnitureImg2: "https://i.pinimg.com/564x/f0/45/ae/f045ae06851b6803890d76d63ae22150.jpg",
    furnitureImg3: "https://i.pinimg.com/564x/fb/98/f2/fb98f2c7121135fb69a987f26f29a2df.jpg",
    furnitureDescription: "Traditional furniture info.",
})

const frenchInfo = new Design({
    category: "French",
    collectionPalletImg: "https://cdn.kitchencabinetkings.com/media/siege/kitchen-color-schemes/kitchen-color-schemes_6_all-white.jpg",
    collectionPalletDescription: "french pallet description",
    storeInfo: ["Joss and Main", "Pier One", "Serena and Lily"],
    furnitureImg1: "http://roomary.info/wp-content/uploads/2018/07/Marvelous-And-Luxury-Living-Room-Decoration-21.jpg",
    furnitureImg2: "http://roomary.info/wp-content/uploads/2018/07/Marvelous-And-Luxury-Living-Room-Decoration-29.jpg",
    furnitureImg3: "https://i.pinimg.com/564x/51/46/28/51462878e8c4263db87dd86d4174a87a.jpg",
    furnitureDescription: "French furniture info.",
})

const eclecticInfo = new Design({
    category: "Eclectic",
    collectionPalletImg: "https://cdn.kitchencabinetkings.com/media/siege/kitchen-color-schemes/kitchen-color-schemes_7_blue-and-orange.jpg",
    collectionPalletDescription: "Eclectic pallet description",
    storeInfo: ["Rejuvenation", "Zin Home", "Houzz"],
    furnitureImg1: "https://i2.wp.com/decoratrend.com/wp-content/uploads/2018/07/Modern-Glam-Living-Room-Decorating-Ideas-13.jpg",
    furnitureImg2: "https://i2.wp.com/decoratrend.com/wp-content/uploads/2018/07/Modern-Glam-Living-Room-Decorating-Ideas-33.jpg?",
    furnitureImg3: "https://www.jonathanadler.com/on/demandware.static/-/Sites-catalog-master/default/dw0f26d47d/hi-res/ushi-res/Web_FA16_HainesEmerald_TurnerVitrine_ElectrumSconce.jpg",
    furnitureDescription: "Eclectic furniture info.",
})




const glam = new Categories({
    categoriesImg: "https://i.pinimg.com/564x/68/89/b4/6889b4780aba519b3ad2417738548240.jpg",
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
    categoriesImg: "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1400/https://www.decorsnob.com/wp-content/uploads/Dreena-Collection-3pc-Set-Sofa-Loveseat-Chair-2.jpg",
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
    .then(() => Design.create([glamInfo, modernInfo, rusticInfo, traditionalInfo, frenchInfo, eclecticInfo]))
Flair.remove({})
    .then(() => Flair.create([princessRoom]))
    //.then(() => Food.insertMany([pizza, injera, padThai, fishTaco]))
    .then(() => {
        console.log("seeded successfully");
        mongoose.connection.close();
    })
    .catch(err => console.log(err, "error!"));