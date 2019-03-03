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
    categoriesImg: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.aprar.net%2F7%2F2015%2F12%2Fminimalist-modern-design-cheap-designs-for-apartments-with-gre-wall-and-white-shelves-on-the-wall-with-grey-seat-beside-glasses-coffee-table-inisde-room.jpg&imgrefurl=http%3A%2F%2Fwww.aprar.net%2Fcheap-designs-for-apartments%2Fminimalist-modern-design-cheap-designs-for-apartments-with-gre-wall-and-white-shelves-on-the-wall-with-grey-seat-beside-glasses-coffee-table-inisde-room%2F&docid=CehIWnMjk2Cg8M&tbnid=n_ZrEp4a3gC1_M%3A&vet=1&w=1608&h=1080&bih=693&biw=1442&ved=2ahUKEwjDnaCuleXgAhVChuAKHTTcASEQxiAoBXoECAEQGQ&iact=c&ictx=1",
    category: "Rustic",
    description: "Beautiful, feminine, and clean design with shimmering accents at the heart of this style.",
})

const classic = new Categories({
    categoriesImg: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.aprar.net%2F7%2F2015%2F12%2Fminimalist-modern-design-cheap-designs-for-apartments-with-gre-wall-and-white-shelves-on-the-wall-with-grey-seat-beside-glasses-coffee-table-inisde-room.jpg&imgrefurl=http%3A%2F%2Fwww.aprar.net%2Fcheap-designs-for-apartments%2Fminimalist-modern-design-cheap-designs-for-apartments-with-gre-wall-and-white-shelves-on-the-wall-with-grey-seat-beside-glasses-coffee-table-inisde-room%2F&docid=CehIWnMjk2Cg8M&tbnid=n_ZrEp4a3gC1_M%3A&vet=1&w=1608&h=1080&bih=693&biw=1442&ved=2ahUKEwjDnaCuleXgAhVChuAKHTTcASEQxiAoBXoECAEQGQ&iact=c&ictx=1",
    category: "Classic",
    description: "Beautiful, feminine, and clean design with shimmering accents at the heart of this style.",
})

const French = new Categories({
    categoriesImg: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.aprar.net%2F7%2F2015%2F12%2Fminimalist-modern-design-cheap-designs-for-apartments-with-gre-wall-and-white-shelves-on-the-wall-with-grey-seat-beside-glasses-coffee-table-inisde-room.jpg&imgrefurl=http%3A%2F%2Fwww.aprar.net%2Fcheap-designs-for-apartments%2Fminimalist-modern-design-cheap-designs-for-apartments-with-gre-wall-and-white-shelves-on-the-wall-with-grey-seat-beside-glasses-coffee-table-inisde-room%2F&docid=CehIWnMjk2Cg8M&tbnid=n_ZrEp4a3gC1_M%3A&vet=1&w=1608&h=1080&bih=693&biw=1442&ved=2ahUKEwjDnaCuleXgAhVChuAKHTTcASEQxiAoBXoECAEQGQ&iact=c&ictx=1",
    category: "Modern",
    description: "Beautiful, feminine, and clean design with shimmering accents at the heart of this style.",
})
const Eclectic = new Categories({
    categoriesImg: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.aprar.net%2F7%2F2015%2F12%2Fminimalist-modern-design-cheap-designs-for-apartments-with-gre-wall-and-white-shelves-on-the-wall-with-grey-seat-beside-glasses-coffee-table-inisde-room.jpg&imgrefurl=http%3A%2F%2Fwww.aprar.net%2Fcheap-designs-for-apartments%2Fminimalist-modern-design-cheap-designs-for-apartments-with-gre-wall-and-white-shelves-on-the-wall-with-grey-seat-beside-glasses-coffee-table-inisde-room%2F&docid=CehIWnMjk2Cg8M&tbnid=n_ZrEp4a3gC1_M%3A&vet=1&w=1608&h=1080&bih=693&biw=1442&ved=2ahUKEwjDnaCuleXgAhVChuAKHTTcASEQxiAoBXoECAEQGQ&iact=c&ictx=1",
    category: "Modern",
    description: "Beautiful, feminine, and clean design with shimmering accents at the heart of this style.",
})