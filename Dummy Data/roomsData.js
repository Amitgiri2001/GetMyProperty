const roomsData = [
  {
    id: 1,
    title: "Spacious Studio Apartment",
    description:
      "A cozy studio apartment with a modern kitchen and a balcony overlooking the city.",
    price: "$1000/month",
    location: "Downtown",
    image: require("./roomimg_1.png"),
    amenities: ["Wi-Fi", "Air Conditioning", "Laundry", "Parking"],
    availability: "Available",
  },
  {
    id: 2,
    title: "Luxury Penthouse Suite",
    description:
      "A luxurious penthouse suite with panoramic views, private jacuzzi, and 24/7 concierge service.",
    price: "$3000/month",
    location: "Upper East Side",
    image: require("./roomimg_2.png"), // Example image import
    amenities: ["Wi-Fi", "Air Conditioning", "Gym", "Pool", "Security"],
    availability: "Not Available", // Example of room not being available
  },
  {
    id: 3,
    title: "Cozy One-Bedroom Apartment",
    description:
      "A charming one-bedroom apartment with hardwood floors and a fireplace.",
    price: "$1500/month",
    location: "Brooklyn",
    image: require("./roomimg_3.png"),
    amenities: ["Wi-Fi", "Heating", "Laundry"],
    availability: "Available",
  },
  {
    id: 4,
    title: "Modern Loft with City Views",
    description:
      "A trendy loft with floor-to-ceiling windows and stunning views of the city skyline.",
    price: "$2000/month",
    location: "Midtown",
    image: require("./roomimg_4.png"),
    amenities: ["Wi-Fi", "Air Conditioning", "Parking", "Gym"],
    availability: "Available",
  },
  {
    id: 5,
    title: "Charming Studio in Historic Building",
    description:
      "A charming studio apartment in a historic building with exposed brick walls.",
    price: "$1200/month",
    location: "West Village",
    image: require('./roomimg_5.png'),
    amenities: ["Wi-Fi", "Heating", "Laundry"],
    availability: "Available",
  },
  {
    id: 6,
    title: "Luxury Condo with River Views",
    description:
      "A luxurious condo with panoramic views of the river and top-notch amenities.",
    price: "$3500/month",
    location: "Battery Park City",
    image: require('./roomimg_1.png'),
    amenities: ["Wi-Fi", "Air Conditioning", "Pool", "Gym", "Security"],
    availability: "Not Available",
  },
  {
    id: 7,
    title: "Sunny Two-Bedroom Apartment",
    description:
      "A bright and spacious two-bedroom apartment with plenty of natural light.",
    price: "$1800/month",
    location: "Queens",
    image: require('./roomimg_2.png'),
    amenities: ["Wi-Fi", "Heating", "Parking", "Laundry"],
    availability: "Available",
  },
  {
    id: 8,
    title: "Modern Downtown Loft",
    description:
      "A modern loft apartment in the heart of downtown, perfect for urban living.",
    price: "$2500/month",
    location: "Financial District",
    image: require('./roomimg_3.png'),
    amenities: ["Wi-Fi", "Air Conditioning", "Gym"],
    availability: "Available",
  },
  {
    id: 9,
    title: "Elegant Townhouse with Garden",
    description:
      "An elegant townhouse with a private garden oasis, ideal for outdoor living.",
    price: "$2800/month",
    location: "Harlem",
    image: require('./roomimg_4.png'),
    amenities: ["Wi-Fi", "Heating", "Parking"],
    availability: "Available",
  },
  {
    id: 10,
    title: "Beachfront Villa with Private Beach Access",
    description:
      "A luxurious beachfront villa with direct access to a private beach, perfect for a seaside getaway.",
    price: "$5000/month",
    location: "The Hamptons",
    image: require('./roomimg_5.png'),
    amenities: ["Wi-Fi", "Air Conditioning", "Pool", "Parking", "Security"],
    availability: "Not Available",
  },
  {
    id: 11,
    title: "Spacious Studio Apartment",
    description:
      "A cozy studio apartment with a modern kitchen and a balcony overlooking the city.",
    price: "$1000/month",
    location: "Downtown",
    image: require("./roomimg_1.png"),
    amenities: ["Wi-Fi", "Air Conditioning", "Laundry", "Parking"],
    availability: "Available",
  },
  {
    id: 12,
    title: "Luxury Penthouse Suite",
    description:
      "A luxurious penthouse suite with panoramic views, private jacuzzi, and 24/7 concierge service.",
    price: "$3000/month",
    location: "Upper East Side",
    image: require("./roomimg_2.png"), // Example image import
    amenities: ["Wi-Fi", "Air Conditioning", "Gym", "Pool", "Security"],
    availability: "Not Available", // Example of room not being available
  },
  {
    id: 13,
    title: "Cozy One-Bedroom Apartment",
    description:
      "A charming one-bedroom apartment with hardwood floors and a fireplace.",
    price: "$1500/month",
    location: "Brooklyn",
    image: require("./roomimg_3.png"),
    amenities: ["Wi-Fi", "Heating", "Laundry"],
    availability: "Available",
  },
  {
    id: 14,
    title: "Modern Loft with City Views",
    description:
      "A trendy loft with floor-to-ceiling windows and stunning views of the city skyline.",
    price: "$2000/month",
    location: "Midtown",
    image: require("./roomimg_4.png"),
    amenities: ["Wi-Fi", "Air Conditioning", "Parking", "Gym"],
    availability: "Available",
  },
  {
    id: 15,
    title: "Charming Studio in Historic Building",
    description:
      "A charming studio apartment in a historic building with exposed brick walls.",
    price: "$1200/month",
    location: "West Village",
    image: require('./roomimg_5.png'),
    amenities: ["Wi-Fi", "Heating", "Laundry"],
    availability: "Available",
  },
  {
    id: 16,
    title: "Luxury Condo with River Views",
    description:
      "A luxurious condo with panoramic views of the river and top-notch amenities.",
    price: "$3500/month",
    location: "Battery Park City",
    image: require('./roomimg_1.png'),
    amenities: ["Wi-Fi", "Air Conditioning", "Pool", "Gym", "Security"],
    availability: "Not Available",
  },
  {
    id: 17,
    title: "Sunny Two-Bedroom Apartment",
    description:
      "A bright and spacious two-bedroom apartment with plenty of natural light.",
    price: "$1800/month",
    location: "Queens",
    image: require('./roomimg_2.png'),
    amenities: ["Wi-Fi", "Heating", "Parking", "Laundry"],
    availability: "Available",
  },
  {
    id: 18,
    title: "Modern Downtown Loft",
    description:
      "A modern loft apartment in the heart of downtown, perfect for urban living.",
    price: "$2500/month",
    location: "Financial District",
    image: require('./roomimg_3.png'),
    amenities: ["Wi-Fi", "Air Conditioning", "Gym"],
    availability: "Available",
  },
  {
    id: 19,
    title: "Elegant Townhouse with Garden",
    description:
      "An elegant townhouse with a private garden oasis, ideal for outdoor living.",
    price: "$2800/month",
    location: "Harlem",
    image: require('./roomimg_4.png'),
    amenities: ["Wi-Fi", "Heating", "Parking"],
    availability: "Available",
  },
  {
    id: 20,
    title: "Beachfront Villa with Private Beach Access",
    description:
      "A luxurious beachfront villa with direct access to a private beach, perfect for a seaside getaway.",
    price: "$5000/month",
    location: "The Hamptons",
    image: require('./roomimg_5.png'),
    amenities: ["Wi-Fi", "Air Conditioning", "Pool", "Parking", "Security"],
    availability: "Not Available",
  },
];

export default roomsData;
