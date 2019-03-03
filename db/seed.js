const mongoose = require("./connection.js");
const Categories = require("../models/Categories.js");

const glam = new Categories({
    categoriesImg: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiht4L9kOXgAhXCneAKHa-ADH8QjRx6BAgBEAU&url=https%3A%2F%2Fbuyerselect.com%2Fhome-decor%2Fmodern-glam-decor%2F&psig=AOvVaw2wxN8W_S7tRvbY9v3Su0xZ&ust=1551673642835762",
    category: "Glam",
    description: "Beautiful, feminine, and clean design with shimmering accents at the heart of this style.",
})

const modern = new Categories({
    categoriesImg: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.aprar.net%2F7%2F2015%2F12%2Fminimalist-modern-design-cheap-designs-for-apartments-with-gre-wall-and-white-shelves-on-the-wall-with-grey-seat-beside-glasses-coffee-table-inisde-room.jpg&imgrefurl=http%3A%2F%2Fwww.aprar.net%2Fcheap-designs-for-apartments%2Fminimalist-modern-design-cheap-designs-for-apartments-with-gre-wall-and-white-shelves-on-the-wall-with-grey-seat-beside-glasses-coffee-table-inisde-room%2F&docid=CehIWnMjk2Cg8M&tbnid=n_ZrEp4a3gC1_M%3A&vet=1&w=1608&h=1080&bih=693&biw=1442&ved=2ahUKEwjDnaCuleXgAhVChuAKHTTcASEQxiAoBXoECAEQGQ&iact=c&ictx=1",
    category: "Modern",
    description: "Minimalism, clean straight lines, neutral colors, geometry all encompass the modern aesthetic.",
})

const rustic = new Categories({
    categoriesImg: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwMROv5A9_1I%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwMROv5A9_1I&docid=icCHzY6xn_geRM&tbnid=hLaZVuqOn6ppxM%3A&vet=1&w=1280&h=720&bih=693&biw=1442&ved=2ahUKEwivgvXLmeXgAhVGc98KHZapAEAQxiAoA3oECAEQFw&iact=c&ictx=1",
    category: "Rustic",
    description: "Beautiful, feminine, and clean design with shimmering accents at the heart of this style.",
})

const traditional = new Categories({
    categoriesImg: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiqhb3jmuXgAhUKh-AKHTPXA_oQjRx6BAgBEAU&url=https%3A%2F%2Fwww.leovandesign.com%2F2014%2F02%2Ftraditional-interior-design-style.html&psig=AOvVaw38RXM7hhJuV8Ne-9sC6-HL&ust=1551676255515358",
    category: "Traditional",
    description: "Beautiful, feminine, and clean design with shimmering accents at the heart of this style.",
})

const French = new Categories({
    categoriesImg: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj6rt7lm-XgAhVjg-AKHeeuC2AQjRx6BAgBEAU&url=http%3A%2F%2Fwww.poandpo.com%2Fdesign-art-and-nice-stuff%2Finterior-design-de-france-14-11-2014%2F&psig=AOvVaw3ke6B6r_tXhg2bObpy09Fo&ust=1551676512830420",
    category: "French",
    description: "Beautiful, feminine, and clean design with shimmering accents at the heart of this style.",
})
const Eclectic = new Categories({
    categoriesImg: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.aprar.net%2F7%2F2015%2F12%2Fminimalist-modern-design-cheap-designs-for-apartments-with-gre-wall-and-white-shelves-on-the-wall-with-grey-seat-beside-glasses-coffee-table-inisde-room.jpg&imgrefurl=http%3A%2F%2Fwww.aprar.net%2Fcheap-designs-for-apartments%2Fminimalist-modern-design-cheap-designs-for-apartments-with-gre-wall-and-white-shelves-on-the-wall-with-grey-seat-beside-glasses-coffee-table-inisde-room%2F&docid=CehIWnMjk2Cg8M&tbnid=n_ZrEp4a3gC1_M%3A&vet=1&w=1608&h=1080&bih=693&biw=1442&ved=2ahUKEwjDnaCuleXgAhVChuAKHTTcASEQxiAoBXoECAEQGQ&iact=c&ictx=1",
    category: "Modern",
    description: "Beautiful, feminine, and clean design with shimmering accents at the heart of this style.",
})