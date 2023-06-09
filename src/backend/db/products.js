import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */
import {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
  product17,
  product18,
  product19,
  product20,
  product21,
  product22,
  product23,
  product24,
  product25,
  product26,
  product27,
  psale1,
  psale2,
  psale3,
  product28,
  product29,
  product30,
  product31,
  product32,
  product33,
  product34,
  product35,
  product36,
  product37,
  product38,
  product39,
  product40,
  product41,
  product42,
  product43,
  product44,
  product45,
  product46,
  product47,
  product48,
  product49,
  product50,
  product51,
  product52,
  product53,
  product54,
  product55,
  product56,
  product57,
  product58,
  product59,
  product60,
  product61,
  product62,
  product63,
  product64,
  product65,
  product66,
  product67,
  product68,
} from "../../assets/index.js";

export const products = [
  {
    _id: "1",
    title: "Nike Air Low Premium",
    text: "MEN Running Shoes",
    brand: "nike",
    rating: "5+",
    btn: "Buy Now",
    img: product7,
    price: "6999",
    color: "from-sky-600 to-indigo-600",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "2",
    title: "Nike Air Force Green",
    text: "MEN Running Shoes",
    brand: "nike",
    rating: "5+",
    btn: "Buy Now",
    img: product2,
    price: "9899",
    color: "from-green-500 to-emerald-500",
    shadow: "shadow-lg shadow-green-500",
  },
  {
    _id: "3",
    title: "Nike Addapt BB Rose",
    text: "MEN Running Shoes",
    brand: "nike",
    rating: "5+",
    btn: "Buy Now",
    img: product3,
    price: "1999",
    color: "from-red-500 to-rose-500",
    shadow: "shadow-lg shadow-rose-500",
  },
  {
    _id: "4",
    title: "Nike Air Premium",
    text: "MEN Running Shoes",
    brand: "nike",
    rating: "5+",
    btn: "Buy Now",
    img: product4,
    price: "9999",
    color: "from-orange-500 to-amber-500",
    shadow: "shadow-lg shadow-orange-500",
  },
  {
    _id: "5",
    title: "Nike Adapt BB Pro",
    text: "MEN Running Shoes",
    brand: "nike",
    rating: "5+",
    btn: "Buy Now",
    img: product5,
    price: "999",
    color: "from-gray-900 to-yellow-500",
    shadow: "shadow-lg shadow-yellow-500",
  },
  {
    _id: "6",
    title: "Air Jordan PR3",
    text: "MEN Running Shoes",
    brand: "nike",
    rating: "5+",
    btn: "Buy Now",
    img: product6,
    price: "2999",
    color: "from-blue-500 to-cyan-500",
    shadow: "shadow-lg shadow-cyan-500",
  },
  {
    _id: "7",
    title: "Nike Multi Smart Shoe",
    text: "MEN Running Shoes",
    brand: "nike",
    rating: "5+",
    btn: "Buy Now",
    img: product1,
    price: "5999",
    color: "from-yellow-500 to-yellow-500",
    shadow: "shadow-lg shadow-yellow-500",
  },
  {
    _id: "8",
    title: "Nike Jordan Air Max",
    text: "MEN Running Shoes",
    brand: "nike",
    rating: "5+",
    btn: "Buy Now",
    img: product9,
    price: "4599",
    color: "from-[#936550] to-orange-900",
    shadow: "shadow-lg shadow-orange-800",
  },
  {
    _id: "9",
    title: "Nike Old Max-x",
    text: "MEN Running Shoes",
    brand: "nike",
    rating: "5+",
    btn: "Buy Now",
    img: product10,
    price: "2599",
    color: "from-indigo-700 to-indigo-700",
    shadow: "shadow-lg shadow-indigo-500",
  },
  {
    _id: "10",
    title: "Nike Lime Jordan 11",
    text: "MEN Running Shoes",
    brand: "nike",
    rating: "5+",
    btn: "Buy Now",
    img: product12,
    price: "6969",
    color: "from-green-600 to-lime-500",
    shadow: "shadow-lg shadow-lime-500",
  },
  {
    _id: "11",
    title: "Nike Air Black Max",
    text: "MEN Running Shoes",
    brand: "nike",
    rating: "5+",
    btn: "Buy Now",
    img: product11,
    price: "8599",
    color: "from-slate-900 to-black",
    shadow: "shadow-lg shadow-black",
  },
  {
    _id: "12",
    title: "Nike Zoom Max",
    text: "MEN Running Shoes",
    brand: "nike",
    rating: "5+",
    btn: "Buy Now",
    img: product8,
    price: "10000",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "13",
    title: "Nike Addapt BB 2.0",
    text: "MEN Running Shoes",
    brand: "nike",
    rating: "4.9",
    btn: "Buy Now",
    img: psale2,
    price: "1999",
    color: "from-blue-600 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  // psale1
  {
    _id: "14",
    title: "Nike Martine Rose",
    text: "MEN Running Shoes",
    brand: "nike",
    rating: "4.5",
    btn: "Buy Now",
    img: psale1,
    price: "1299",
    color: "from-red-500 to-rose-500",
    shadow: "shadow-lg shadow-rose-500",
  },
  {
    _id: "15",
    title: "Nike Smart Shoe 2.0",
    text: "MEN Running Shoes",
    brand: "nike",
    rating: "5+",
    btn: "Buy Now",
    img: psale3,
    price: "1099",
    color: "from-violet-500 to-indigo-500",
    shadow: "shadow-lg shadow-violet-500",
  },

  // more data

  //puma starts
  {
    _id: "16",
    title: "Runtamed Plus",
    text: "Women's Sneakers",
    brand: "puma",
    category: ["women", "trending"],
    rating: "4+",
    btn: "Buy Now",
    img: product13,
    price: "4599",
    color: "from-sky-600 to-indigo-600",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "17",
    title: "Mercedes AMG Petronas",
    text: "MEN's Sneakers",
    category: ["men"],
    brand: "puma",
    rating: "3+",
    btn: "Buy Now",
    img: product14,
    price: "3999",
    color: "from-green-500 to-emerald-500",
    shadow: "shadow-lg shadow-green-500",
  },
  {
    _id: "18",
    title: "Puma x LAMELO BALL MB.02",
    text: "MEN's Basketball Shoes",
    brand: "puma",
    category: ["men", "trending"],
    rating: "3+",
    btn: "Buy Now",
    img: product15,
    price: "9999",
    color: "from-red-500 to-rose-500",
    shadow: "shadow-lg shadow-rose-500",
  },
  {
    _id: "19",
    title: "One8 Virat Kohli Shuffle V3",
    text: "MEN Sneakers",
    brand: "puma",
    category: ["women", "sports"],
    rating: "2+",
    btn: "Buy Now",
    img: product16,
    price: "7599",
    color: "from-orange-500 to-amber-500",
    shadow: "shadow-lg shadow-orange-500",
  },
  {
    _id: "20",
    title: "Slipstream Lo Super Comic",
    text: "Unisex Sneakers",
    brand: "puma",
    category: ["women", "men", "trending"],
    rating: "1+",
    btn: "Buy Now",
    img: product17,
    price: "6999",
    color: "from-gray-900 to-yellow-500",
    shadow: "shadow-lg shadow-yellow-500",
  },
  {
    _id: "21",
    title: "Air Jordan PR3",
    text: "MEN Running Shoes",
    brand: "puma",
    category: ["men", "sports"],
    rating: "4+",
    btn: "Buy Now",
    img: product18,
    price: "4899",
    color: "from-blue-500 to-cyan-500",
    shadow: "shadow-lg shadow-cyan-500",
  },

  // puma ends
  {
    _id: "22",
    title: "Adidas Superstar Shoes",
    text: "MEN Sneakers",
    brand: "adidas",
    category: ["men", "trending"],
    rating: "4+",
    btn: "Buy Now",
    img: product19,
    price: "3499",
    color: "from-yellow-500 to-yellow-500",
    shadow: "shadow-lg shadow-yellow-500",
  },
  {
    _id: "23",
    title: "NMD_R1 SHOES",
    text: "MEN Running Shoes",
    brand: "adidas",
    category: ["men", "trending", "sports"],
    rating: "2+",
    btn: "Buy Now",
    img: product20,
    price: "2499",
    color: "from-[#936550] to-orange-900",
    shadow: "shadow-lg shadow-orange-800",
  },
  {
    _id: "24",
    title: "OZTRAL SHOES",
    text: "Unisex Sneakers",
    brand: "adidas",
    category: ["women", "men"],
    rating: "3+",
    btn: "Buy Now",
    img: product21,
    price: "2999",
    color: "from-indigo-700 to-indigo-700",
    shadow: "shadow-lg shadow-indigo-500",
  },
  {
    _id: "25",
    title: "FORUM MID",
    text: "MEN Basketball Shoes",
    brand: "nike",
    category: ["men", "sports", "trending"],
    rating: "1+",
    btn: "Buy Now",
    img: product22,
    price: "8999",
    color: "from-green-600 to-lime-500",
    shadow: "shadow-lg shadow-lime-500",
  },
  {
    _id: "26",
    title: "FORUM 84 HIGH SHOES",
    text: "MEN Originals",
    brand: "nike",
    category: ["men", "trending"],
    rating: "4+",
    btn: "Buy Now",
    img: product23,
    price: "5499",
    color: "from-slate-900 to-black",
    shadow: "shadow-lg shadow-black",
  },
  {
    _id: "27",
    title: "NMD_S1 SHOES",
    text: "Men Originals",
    brand: "adidas",
    category: ["men", "trending"],
    rating: "4+",
    btn: "Buy Now",
    img: product24,
    price: "9499",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "28",
    title: "SK8-HI",
    text: "Women Originals",
    brand: "vans",
    category: ["women", "trending"],
    rating: "3+",
    btn: "Buy Now",
    img: product25,
    price: "10000",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "29",
    title: "SK8-HI CANVAS/SUED",
    text: "Men Originals",
    category: ["men", "trending"],
    brand: "vans",
    rating: "3+",
    btn: "Buy Now",
    img: product26,
    price: "3000",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "30",
    title: "SENTRY SK8-HI WC",
    text: "Men Originals",
    brand: "converse",
    category: ["men", "trending"],
    rating: "2+",
    btn: "Buy Now",
    img: product27,
    price: "1499",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "31",
    title: "NMD_S1 SHOES",
    text: "Men Originals",
    brand: "converse",
    category: ["men", "trending"],
    rating: "4+",
    btn: "Buy Now",
    img: product24,
    price: "1199",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "32",
    title: "Nike Air Force 1 '07 FlyEase",
    text: "Men Originals",
    brand: "nike",
    category: ["men", "trending"],
    rating: "4+",
    btn: "Buy Now",
    img: product28,
    link: "https://www.nike.com/in/t/air-force-1-07-flyease-shoes-LKXPhZ/FD1146-100",
    price: "9999",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "33",
    title: "Air Jordan Low SE",
    text: "Men Originals",
    brand: "nike",
    category: ["men", "trending"],
    rating: "3+",
    btn: "Buy Now",
    img: product29,
    link: "https://www.nike.com/in/t/air-jordan-low-se-shoes-KKFsH5/DX4334-300",
    price: "6499",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "34",
    title: "Nike Dunk High Retro Premium",
    text: "Men Originals",
    brand: "nike",
    category: ["men", "trending"],
    rating: "3+",
    btn: "Buy Now",
    img: product30,
    link: "https://www.nike.com/in/t/dunk-high-retro-shoes-c4lpG4/DV7216-001",
    price: "8999",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "35",
    title: "Nike Air Force 1 Mid '07",
    text: "Men Sneakers",
    brand: "nike",
    category: ["men", "trending"],
    rating: "4+",
    btn: "Buy Now",
    img: product32,
    link: "https://www.nike.com/in/t/dunk-high-retro-shoes-c4lpG4/DV7216-001",
    price: "9177",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "36",
    title: "Nike Air Force 1 '07",
    text: "Men Originals",
    brand: "nike",
    category: ["men", "trending"],
    rating: "3+",
    btn: "Buy Now",
    img: product33,
    link: "https://www.nike.com/in/t/dunk-high-retro-shoes-c4lpG4/DV7216-001",
    price: "6999",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "37",
    title: "Nike Air Force 1 '07 LV8",
    text: "Men Sneakers",
    brand: "nike",
    category: ["men", "sports", "trending"],
    rating: "3+",
    btn: "Buy Now",
    img: product34,
    link: "https://www.nike.com/in/t/dunk-high-retro-shoes-c4lpG4/DV7216-001",
    price: "9999",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "38",
    title: "Nike Air Zoom G.T. Jump",
    text: "Basketball Sneakers",
    brand: "nike",
    category: ["men", "sports", "women", "trending"],
    rating: "3+",
    btn: "Buy Now",
    img: product35,
    link: "https://www.nike.com/in/t/dunk-high-retro-shoes-c4lpG4/DV7216-001",
    price: "7499",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "39",
    title: "Air Jordan 1 Mid",
    text: "Men's Sneakers",
    brand: "nike",
    category: ["men", "sports", "trending"],
    rating: "4+",
    btn: "Buy Now",
    img: product36,
    link: "https://www.nike.com/in/t/dunk-high-retro-shoes-c4lpG4/DV7216-001",
    price: "8599",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "40",
    title: "Nike Dunk High Retro",
    text: "Men's Sneakers",
    brand: "nike",
    category: ["men", "sports", "trending"],
    rating: "4+",
    btn: "Buy Now",
    img: product37,
    link: "https://www.nike.com/in/t/dunk-high-retro-shoes-c4lpG4/DV7216-001",
    price: "7207",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "41",
    title: "Nike Air Force 1 Low x UNDEFEATED",
    text: "Men's Sneakers",
    brand: "nike",
    category: ["men", "sports", "women", "trending"],
    rating: "4+",
    btn: "Buy Now",
    img: product38,
    link: "https://www.nike.com/in/t/dunk-high-retro-shoes-c4lpG4/DV7216-001",
    price: "3299",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "42",
    title: "Nike Tech Hera",
    text: "Women's Sneakers",
    brand: "nike",
    category: ["sports", "women", "trending"],
    rating: "4+",
    btn: "Buy Now",
    img: product39,
    link: "https://www.nike.com/in/t/dunk-high-retro-shoes-c4lpG4/DV7216-001",
    price: "9695",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "43",
    title: "Air Jordan 1 Mid SE",
    text: "Women's Sneakers",
    brand: "nike",
    category: ["women", "trending"],
    rating: "4+",
    btn: "Buy Now",
    img: product40,
    link: "https://www.nike.com/in/t/dunk-high-retro-shoes-c4lpG4/DV7216-001",
    price: "8495",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "44",
    title: "Air Jordan 1 Elevate Low",
    text: "Women's Shoes",
    brand: "nike",
    category: ["women", "trending", "sports"],
    rating: "4+",
    btn: "Buy Now",
    img: product41,
    link: "https://www.nike.com/in/t/dunk-high-retro-shoes-c4lpG4/DV7216-001",
    price: "8327",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "45",
    title: "Nike Metcon 8 AMP",
    text: "Women's Training Shoes",
    brand: "nike",
    category: ["women", "trending", "sports"],
    rating: "4+",
    btn: "Buy Now",
    img: product42,
    link: "https://www.nike.com/in/t/metcon-8-amp-training-shoes-Jr5Kzw/DV9013-200",
    price: "3327",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "46",
    title: "Nike Dunk Low Next Nature",
    text: "Women's Training Shoes",
    brand: "nike",
    category: ["women", "sports"],
    rating: "2+",
    btn: "Buy Now",
    img: product43,
    link: "https://www.nike.com/in/t/metcon-8-amp-training-shoes-Jr5Kzw/DV9013-200",
    price: "8895",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "47",
    title: "Nike AF-1 Shadow",
    text: "Women's Sneakers",
    brand: "nike",
    category: ["women", "sports"],
    rating: "3+",
    btn: "Buy Now",
    img: product44,
    link: "https://www.nike.com/in/t/metcon-8-amp-training-shoes-Jr5Kzw/DV9013-200",
    price: "8327",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "48",
    title: "Nike Zoom SuperRep 4 Next Nature",
    text: "Women's HIIT Class Shoes",
    brand: "nike",
    category: ["women", "sports"],
    rating: "3+",
    btn: "Buy Now",
    img: product45,
    link: "https://www.nike.com/in/t/metcon-8-amp-training-shoes-Jr5Kzw/DV9013-200",
    price: "8327",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "49",
    title: "WEB BOOST SHOES",
    text: "Women's Sports Shoes",
    brand: "adidas",
    category: ["women", "sports"],
    rating: "2+",
    btn: "Buy Now",
    img: product46,
    link: "https://www.adidas.co.in/web-boost-shoes/HR0085.html",
    price: "4999",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "50",
    title: "OZELLE CLOUDFOAM",
    text: "Women's Sports Shoes",
    brand: "adidas",
    category: ["women", "trending", "sports"],
    rating: "2+",
    btn: "Buy Now",
    img: product47,
    link: "https://www.adidas.co.in/web-boost-shoes/HR0085.html",
    price: "7999",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "51",
    title: "FORUM 84 HI SHOES",
    text: "Women's Sneakers",
    brand: "adidas",
    category: ["women", "trending"],
    rating: "4+",
    btn: "Buy Now",
    img: product48,
    link: "https://www.adidas.co.in/web-boost-shoes/HR0085.html",
    price: "7999",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "52",
    title: "ASTIR SN SHOES",
    text: "Women's Sneakers",
    brand: "adidas",
    category: ["women", "trending"],
    rating: "4+",
    btn: "Buy Now",
    img: product49,
    link: "https://www.adidas.co.in/web-boost-shoes/HR0085.html",
    price: "6499",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "53",
    title: "NIZZA BONEGA MID SHOES",
    text: "Women's Lifestyle",
    brand: "adidas",
    category: ["women", "trending"],
    rating: "3+",
    btn: "Buy Now",
    img: product50,
    link: "https://www.adidas.co.in/web-boost-shoes/HR0085.html",
    price: "8499",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "54",
    title: "Future Rider Pastel Women's Sneakers",
    text: "PUMA White-Spring Lavender",
    brand: "puma",
    category: ["women", "sports", "trending"],
    rating: "2+",
    btn: "Buy Now",
    img: product51,
    link: "https://www.adidas.co.in/web-boost-shoes/HR0085.html",
    price: "5219",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "54",
    title: "Mayze UT Women's Sneakers",
    text: "PUMA White-Rose Quartz",
    brand: "puma",
    category: ["women", "sports", "trending"],
    rating: "2+",
    btn: "Buy Now",
    img: product52,
    link: "https://www.adidas.co.in/web-boost-shoes/HR0085.html",
    price: "8999",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "55",
    title: "Mayze UT Women's Sneakers",
    text: "PUMA White-PUMA Black",
    brand: "puma",
    category: ["women", "sports", "trending"],
    rating: "4+",
    btn: "Buy Now",
    img: product53,
    link: "https://www.adidas.co.in/web-boost-shoes/HR0085.html",
    price: "9999",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "56",
    title: "Slipstream Lo Canvas",
    text: "PUMA White-Warm White-Hero Blue",
    brand: "puma",
    category: ["women",'men', "trending"],
    rating: "4+",
    btn: "Buy Now",
    img: product54,
    link: "https://www.adidas.co.in/web-boost-shoes/HR0085.html",
    price: "1299",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "57",
    title: "Mayze Lucky Charm Women's Sneakers",
    text: "PUMA White",
    brand: "puma",
    category: ["women", "trending"],
    rating: "4+",
    btn: "Buy Now",
    img: product55,
    link: "https://www.adidas.co.in/web-boost-shoes/HR0085.html",
    price: "1099",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "58",
    title: "Rider FV Brighter Days Women's Sneakers",
    text: "PUMA White",
    brand: "puma",
    category: ["women", "trending"],
    rating: "1+",
    btn: "Buy Now",
    img: product56,
    link: "https://www.adidas.co.in/web-boost-shoes/HR0085.html",
    price: "1999",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "59",
    title: "RS-X Preppy",
    text: "PUMA White-Warm White-Pearl Pink",
    brand: "puma",
    category: ["women", "sports", "trending"],
    rating: "2+",
    btn: "Buy Now",
    img: product57,
    link: "https://www.adidas.co.in/web-boost-shoes/HR0085.html",
    price: "1299",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "60",
    title: "Rebound Rugged",
    text: "Puma Black-Puma Black-Puma Team Gold",
    brand: "puma",
    category: ["women", "sports", "trending"],
    rating: "2+",
    btn: "Buy Now",
    img: product58,
    link: "https://www.adidas.co.in/web-boost-shoes/HR0085.html",
    price: "2999",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "61",
    title: "KIDS SK8-HI ZIP",
    text: "Vans Unisex Sneakers",
    brand: "vans",
    category: ["women", "men", "sports", "trending"],
    rating: "2+",
    btn: "Buy Now",
    img: product59,
    link: "https://www.adidas.co.in/web-boost-shoes/HR0085.html",
    price: "2999",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "62",
    title: "SK8-HI TAPERED",
    text: "Vans Women's Sneakers",
    brand: "vans",
    category: ["women", "sports", "trending"],
    rating: "1+",
    btn: "Buy Now",
    img: product60,
    link: "https://www.adidas.co.in/web-boost-shoes/HR0085.html",
    price: "2999",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "63",
    title: "SKATE SK8-HI PRIDE SHOE",
    text: "Vans Unisex Sneakers",
    brand: "vans",
    category: ["women", "men", "sports", "trending"],
    rating: "3+",
    btn: "Buy Now",
    img: product61,
    link: "https://www.adidas.co.in/web-boost-shoes/HR0085.html",
    price: "2999",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "64",
    title: "SK8-HI SHOE",
    text: "Vans Women's Sneakers",
    brand: "vans",
    category: ["women", "sports", "trending"],
    rating: "3+",
    btn: "Buy Now",
    img: product62,
    link: "https://www.adidas.co.in/web-boost-shoes/HR0085.html",
    price: "2999",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "65",
    title: "SK8-HI STACKFORM PRIDE SHOE",
    text: "Vans Sneakers",
    brand: "vans",
    category: ["women", "men", "sports", "trending"],
    rating: "4+",
    btn: "Buy Now",
    img: product63,
    link: "https://www.adidas.co.in/web-boost-shoes/HR0085.html",
    price: "2999",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "66",
    title: "SK8-HI COMFYCUSH",
    text: "Vans Unisex Sneakers",
    brand: "vans",
    category: ["women", "men", "sports", "trending"],
    rating: "4+",
    btn: "Buy Now",
    img: product64,
    link: "https://www.adidas.co.in/web-boost-shoes/HR0085.html",
    price: "2999",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "67",
    title: "SK8-HI SENTRY WC SHOE",
    text: "Vans Unisex Sneakers",
    brand: "vans",
    category: ["women", "men", "sports", "trending"],
    rating: "4+",
    btn: "Buy Now",
    img: product65,
    link: "https://www.adidas.co.in/web-boost-shoes/HR0085.html",
    price: "2999",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "68",
    title: "SK8-HI TAPERED GARDEN PARTY SHOE",
    text: "Vans Women's Sneakers",
    brand: "vans",
    category: ["women", "sports", "trending"],
    rating: "4+",
    btn: "Buy Now",
    img: product66,
    link: "https://www.adidas.co.in/web-boost-shoes/HR0085.html",
    price: "2999",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "69",
    title: "TODDLER SK8-HI REISSUE SIDE ZIP",
    text: "Vans Women's Sneakers",
    brand: "vans",
    category: ["women", "sports", "trending"],
    rating: "4+",
    btn: "Buy Now",
    img: product67,
    link: "https://www.adidas.co.in/web-boost-shoes/HR0085.html",
    price: "2999",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    _id: "70",
    title: "SK8-HI REISSUE SIDE ZIP SUEDE/CANVAS SHOE",
    text: "Vans Unisex Sneakers",
    brand: "vans",
    category: ["women","men", "sports", "trending"],
    rating: "3+",
    btn: "Buy Now",
    img: product68,
    link: "https://www.adidas.co.in/web-boost-shoes/HR0085.html",
    price: "2999",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
];
