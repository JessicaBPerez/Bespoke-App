const mongoose = require("./connection.js");
const Categories = require("../models/Categories.js");

const glam = new Categories({
    categoriesImg: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiht4L9kOXgAhXCneAKHa-ADH8QjRx6BAgBEAU&url=https%3A%2F%2Fbuyerselect.com%2Fhome-decor%2Fmodern-glam-decor%2F&psig=AOvVaw2wxN8W_S7tRvbY9v3Su0xZ&ust=1551673642835762",
    category: "Glam",
    description: "Beautiful, feminine, and clean design with shimmering accents at the heart of this style.",
})