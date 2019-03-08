const mongoose = require("./connection.js");
const { Categories } = require("../models/Categories.js");
const { Design } = require('../models/Categories')
const { Flair } = require('../models/Categories.js')

const princessRoom = new Flair({
    flairName: "Princess Room",
    flairImg: "https://i.pinimg.com/564x/14/7e/cf/147ecf48085257fe273aec901cd3085a.jpg",
    flairDescription: "Rose painted walls, tee-pee beds, golden or lavendar light displays, and mosaic pillows bring this room together perfectly. This is a beautiful room perfect for a little princess.",
    storeInfo: ["Restoration Hardware", "Pottery Barn Kids", "West Elm"],
    flairFurnitureImg1: "https://i.pinimg.com/564x/53/3f/c9/533fc9c86efa05fde6717e752102dfb2.jpg",
    flairFurnitureImg2: "https://i.pinimg.com/564x/9d/04/36/9d04363df5cecd51d12e51e7986baad2.jpg",
    flairFurnitureImg3: "https://i.pinimg.com/564x/03/24/8d/03248ddfbfb3d2382b9dcc388f4c6709.jpg",
    flairFurnitureDescription: " You want to incorporate tufted furniture, mosaic vases, white flowers, crown bedding accents, and angel wing frames to truly make this room stand out. Pastel pink pillows would also make the perfect accents to compliment the main furniture pieces. "
})


const glamInfo = new Design({
    category: "Glam",
    collectionPalletImg: "https://cdn.kitchencabinetkings.com/media/siege/kitchen-color-schemes/kitchen-color-schemes_6_all-white.jpg",
    collectionPalletDescription: "Golden shimmers, pink pastels, purple lavender, and white marble, these are all of the hallmarks of Glam. For a more cohesive look, maintain color pairing within hexagon color families: pastels with pastels, neutrals with neutrals, and shimmers with shimmers.",
    storeInfo: ["TJ Maxx", "Pier One", "West Elm"],
    furnitureImg1: "https://i.pinimg.com/564x/b1/25/57/b12557e4d135cb736872b667298ce68a.jpg",
    furnitureImg2: "https://i.pinimg.com/564x/f1/fe/f8/f1fef822c95649c29f21e76572a95d98.jpg",
    furnitureImg3: "https://i.pinimg.com/564x/e9/fa/52/e9fa52ac7cb5184d884f547749d7d10b.jpg",
    furnitureDescription: "Pink pastel wing frames, white fur carpet, acrylic chairs, mosiac vases, and gold accented furniture perfectly define the glam furniture elements. The glam room wouldn't be complete without a nice Chanel painting with a cream ottoman. Go big and glam with this room, it will turn out beautifully.",
    glamFlair: [princessRoom]
})

const modernInfo = new Design({
    category: "Modern",
    collectionPalletImg: "https://cdn.kitchencabinetkings.com/media/siege/kitchen-color-schemes/kitchen-color-schemes_30_all-black.jpg",
    collectionPalletDescription: "Bold dark colors, contrasted with warm neutral tones is hallmark of Modern design. Dark color elements compliment their lighter counterparts well. The finishing design will be a room for the modern extraordinair.",
    storeInfo: ["Room and Board", "Direct Furniture Outlet", "Switch Modern"],
    furnitureImg1: "https://i2.wp.com/trendehouse.com/wp-content/uploads/2018/12/Stunning-Modern-House-Design-Interior-Ideas-18.jpg",
    furnitureImg2: "https://i1.wp.com/trendehouse.com/wp-content/uploads/2018/12/Stunning-Modern-House-Design-Interior-Ideas-10.jpg",
    furnitureImg3: "https://i1.wp.com/trendehouse.com/wp-content/uploads/2018/12/Stunning-Modern-House-Design-Interior-Ideas-37.jpg",
    furnitureDescription: "Think geometry. Rectangles, triangles, squares, and circles, use these geometric designs to find inspiration for your furniture. Leather accents paired with concrete figures would work really well in a modern home. Light neutral tables are best with dark leather couches, and dark marble tables are best with acrylic seats.",
})

const rusticInfo = new Design({
    category: "Rustic",
    collectionPalletImg: "https://cdn.kitchencabinetkings.com/media/siege/kitchen-color-schemes/kitchen-color-schemes_11_pink-and-white.jpg",
    collectionPalletDescription: "Dusty rose, copperfield, oatmeal, silver, and a hint of gold define the beauty of rustic design to bring a natural organic aesthetic with a hint of glam that is perfect for one wanting to acheive the perfect balance between nature, and glam.",
    storeInfo: ["Kirkalnds", "Rustic Trades Furniture", "Joss and Main"],
    furnitureImg1: "https://i0.wp.com/trendehouse.com/wp-content/uploads/2019/01/The-Best-Rustic-Interior-Design-Ideas-To-Bring-Unique-Look-03.jpg",
    furnitureImg2: "https://i2.wp.com/www.remodelaholic.com/wp-content/uploads/2015/08/rustic-glam-kitchen-island.jpg",
    furnitureImg3: "https://i2.wp.com/www.remodelaholic.com/wp-content/uploads/2015/08/rustic-glam-bathroom.jpg",
    furnitureDescription: "Think about what defines the rustic aesthetic. Nature, natural light, organic creams, wooden beams, and neutral earthy tones. You want to keep your furniture colors in the same color family as a forest. You want to ensure your tables are oatmeal, accents are light, and you pick pieces that will open your room, not close it off.",
})

const traditionalInfo = new Design({
    category: "Traditonal",
    collectionPalletImg: "https://cdn.kitchencabinetkings.com/media/siege/kitchen-color-schemes/kitchen-color-schemes_24_green-and-brown.jpg",
    collectionPalletDescription: "Reds, avacodo, pueblo, cinnamon, browns, and beiges define the color scheme of traditional design.",
    storeInfo: ["Ashley Home Furniture", "Birch Lane", "Ethan Allen"],
    furnitureImg1: "https://i.pinimg.com/564x/dd/79/ce/dd79ce32befb05f1045347ac739c83d2.jpg",
    furnitureImg2: "https://i.pinimg.com/564x/f0/45/ae/f045ae06851b6803890d76d63ae22150.jpg",
    furnitureImg3: "https://i.pinimg.com/564x/fb/98/f2/fb98f2c7121135fb69a987f26f29a2df.jpg",
    furnitureDescription: "With traditional design, you cannot go wrong with espresso colored furniture. You don't have to limit your furniture to one single color scheme, paisly print, scroll light fixtures, and a hint of marble in our table table pieces would also add that extra flair of unexpected touches to a normally conservative and traditional space.",
})

const frenchInfo = new Design({
    category: "French",
    collectionPalletImg: "https://cdn.kitchencabinetkings.com/media/siege/kitchen-color-schemes/kitchen-color-schemes_6_all-white.jpg",
    collectionPalletDescription: "Regal golds, iron, pinks, turquiose and creams are the color pallets of royalty. Stay within a light colorframe to truly represent the style of French design. A hint of velvet turquoise would be the perfect accent to the color schemes somewhere in the room.",
    storeInfo: ["Joss and Main", "Pier One", "Serena and Lily"],
    furnitureImg1: "http://roomary.info/wp-content/uploads/2018/07/Marvelous-And-Luxury-Living-Room-Decoration-21.jpg",
    furnitureImg2: "http://roomary.info/wp-content/uploads/2018/07/Marvelous-And-Luxury-Living-Room-Decoration-29.jpg",
    furnitureImg3: "https://i.pinimg.com/564x/51/46/28/51462878e8c4263db87dd86d4174a87a.jpg",
    furnitureDescription: "Think tufted seats, victorian artifacts, damask print, chandeliers, and fringe pillows are perfect for the French design. Think DaVinci figures, light curtains, and candelabras.",
})

const eclecticInfo = new Design({
    category: "Eclectic",
    collectionPalletImg: "https://cdn.kitchencabinetkings.com/media/siege/kitchen-color-schemes/kitchen-color-schemes_7_blue-and-orange.jpg",
    collectionPalletDescription: "Carrot, riverbed, venice blue, yellow, dare to be BOLD and daring for this pallete scheme. Contrast blues with bold yellows, greens with bright purples and sprinkles of orange throughout. Be unafraid of the eccentricity of this pallet, eccentricity is what defines this design.",
    storeInfo: ["Rejuvenation", "Zin Home", "Houzz"],
    furnitureImg1: "https://i2.wp.com/decoratrend.com/wp-content/uploads/2018/07/Modern-Glam-Living-Room-Decorating-Ideas-13.jpg",
    furnitureImg2: "https://i2.wp.com/decoratrend.com/wp-content/uploads/2018/07/Modern-Glam-Living-Room-Decorating-Ideas-33.jpg?",
    furnitureImg3: "https://www.jonathanadler.com/on/demandware.static/-/Sites-catalog-master/default/dw0f26d47d/hi-res/ushi-res/Web_FA16_HainesEmerald_TurnerVitrine_ElectrumSconce.jpg",
    furnitureDescription: "I recommend velvet green seats, gold accent lighting, Andy Warhol paintings, metal spheres, and eccentric statues.",
})




const glam = new Categories({
    categoriesImg: "http://bamstudio.co/wp-content/uploads/2018/04/glam-living-room-ideas-old-glamour-home-decor-home-design-and-idea-old-home-decor-interior-decor-home-rustic-glam-living-room-ideas.jpg",
    category: "Glam",
    description: "Beautiful, feminine, and clean design with pastel undertones and soft shimmering accents are at the heart of glam. Perfect for those that value elgance, grace, and sophistication.",
    designItems: [glamInfo]
})

const modern = new Categories({
    categoriesImg: "https://www.luxdeco.com/styleguide/wp-content/uploads/2015/02/Luxury-modern-interior-designer-MR-Architecture-and-Decor.jpg",
    category: "Modern",
    description: "Minimalism, clean straight lines, neutral colors, and geometry all encompass the Modern aesthetic. For those that value simplicity, space, and and ambition.",
    designItems: [modernInfo]
})

const rustic = new Categories({
    categoriesImg: "http://lemonaidapp.co/wp-content/uploads/2018/02/rustic-bedroom-decor-decorating-ideas-innovative-rustic-bedroom-ideas-rustic-bedrooms-design-ideas-log-homes-modern-rustic-bedroom-decor.jpg",
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
    .then(() => Categories.create([glam, modern, rustic, traditional, french, eclectic]))
Design.remove({})
    .then(() => Design.create([glamInfo, modernInfo, rusticInfo, traditionalInfo, frenchInfo, eclecticInfo]))
Flair.remove({})
    .then(() => Flair.create([princessRoom]))
    .then(() => {
        console.log("seeded successfully");
        mongoose.connection.close();
    })
    .catch(err => console.log(err, "error!"));