const mongoose = require("./connection.js");
const Categories = require("../models/Categories.js");

const glam = new Categories({
    categoriesImg: "https://secureservercdn.net/ip-ad.mwp2.iad2.secureserver.net/ogu.8d6.godaddywp.com/wp-content/uploads/2018/05/modern-glam-decor-how-to-decorate.jpg",
    category: "Glam",
    description: "Beautiful, feminine, and clean design with shimmering accents is at the heart of this style.",
})

const modern = new Categories({
    categoriesImg: "https://www.luxdeco.com/styleguide/wp-content/uploads/2015/02/Luxury-modern-interior-designer-MR-Architecture-and-Decor.jpg",
    category: "Modern",
    description: "Minimalism, clean straight lines, neutral colors, and geometry all encompass the modern aesthetic.",
})

const rustic = new Categories({
    categoriesImg: "http://www.banana-film.com/wp-content/uploads/2018/06/rustic-living-room-ideas-new-38-unique-rustic-home-decorating-ideas-gallery-kitchen-design-of-rustic-living-room-ideas.jpg",
    category: "Rustic",
    description: "Rustic style emphasizes rugged, natural beauty. It embraces nature-inspired textures, simple and earthy colors, and ultimately an unpretentious, organic warmth.",
})

const traditional = new Categories({
    categoriesImg: "http://www.decorationforhouse.com/wp-content/uploads/2014/07/15-stunning-tuscan-living-room-designs-1.jpg",
    category: "Traditional",
    description: "Traditional design is a timeless go-to style that exudes easy elegance and comfort and is a great route for those who appreciate antiques, classic art, symmetry, and design rich with history.",
})

const french = new Categories({
    categoriesImg: "https://res.cloudinary.com/monefiles/image/fetch/w_630,h_420,c_fill/http://www.poandpo.com/hs1114/french_interior_design.jpg",
    category: "French",
    description: "Inspired by the stunning homes of Provence, French country design often incorporates ruffles, distressed woodwork, mixed patterns, and both vibrant and subdued hues.",
})
const eclectic = new Categories({
    categoriesImg: "https://www.decoraid.com/wp-content/uploads/2018/08/eclectic-interior-design-style.jpg",
    category: "Eclectic",
    description: "Eclectic is a popular adjective in interior design parlance, meaning a decor that comprises heterogeneous elements — a mixture of textures, time periods, styles, trends, and colors.",
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