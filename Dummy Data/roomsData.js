const roomsData = [
  {
    id: 1,
    title: "Spacious Studio Apartment",
    description: "A cozy studio apartment with a modern kitchen and a balcony overlooking the city.",
    price: "$1000/month",
    location: "Downtown",
    image: [
      require('./roomimg_1.png'),
      require('./roomimg_2.png'),
      require('./roomimg_3.png'),
      require('./roomimg_4.png'),
      require('./roomimg_5.png')
    ],
    amenities: ["Wi-Fi", "Air Conditioning", "Laundry", "Parking"],
    availability: "Available",
  },
  {
    id: 2,
    title: "Luxury Penthouse Suite",
    description: "A luxurious penthouse suite with panoramic views, private jacuzzi, and 24/7 concierge service.",
    price: "$3000/month",
    location: "Upper East Side",
    image: [
      require('./roomimg_2.png'),
      require('./roomimg_3.png'),
      require('./roomimg_4.png'),
      require('./roomimg_5.png'),
      require('./roomimg_1.png')
    ],
    amenities: ["Wi-Fi", "Air Conditioning", "Gym", "Pool", "Security"],
    availability: "Not Available",
  },
  {
    id: 3,
    title: "Charming Loft in Historic District",
    description: "A charming loft with exposed brick walls, high ceilings, and close proximity to cafes and galleries.",
    price: "$1500/month",
    location: "West Village",
    image: [
      require('./roomimg_3.png'),
      require('./roomimg_4.png'),
      require('./roomimg_5.png'),
      require('./roomimg_1.png'),
      require('./roomimg_2.png')
    ],
    amenities: ["Wi-Fi", "Heating", "Workspace", "Pet-friendly"],
    availability: "Available",
  },
  {
    id: 4,
    title: "Modern Apartment with River View",
    description: "A modern apartment with floor-to-ceiling windows offering stunning views of the river.",
    price: "$2000/month",
    location: "Brooklyn",
    image: [
      require('./roomimg_4.png'),
      require('./roomimg_5.png'),
      require('./roomimg_1.png'),
      require('./roomimg_2.png'),
      require('./roomimg_3.png')
    ],
    amenities: ["Wi-Fi", "Air Conditioning", "Gym", "Parking"],
    availability: "Available",
  },
  {
    id: 5,
    title: "Cozy Cottage by the Lake",
    description: "A cozy cottage nestled by the lake, perfect for a weekend getaway.",
    price: "$1200/month",
    location: "Upstate New York",
    image: [
      require('./roomimg_5.png'),
      require('./roomimg_1.png'),
      require('./roomimg_2.png'),
      require('./roomimg_3.png'),
      require('./roomimg_4.png')
    ],
    amenities: ["Lake View", "Fireplace", "Garden", "Pet-friendly"],
    availability: "Available",
  },
  {
    id: 6,
    title: "Sunny Beachfront Condo",
    description: "A sunny beachfront condo with direct access to the beach and stunning ocean views.",
    price: "$2500/month",
    location: "Miami",
    image: [
      require('./roomimg_1.png'),
      require('./roomimg_2.png'),
      require('./roomimg_3.png'),
      require('./roomimg_4.png'),
      require('./roomimg_5.png')
    ],
    amenities: ["Beachfront", "Pool", "Gym", "Parking"],
    availability: "Available",
  },
  {
    id: 7,
    title: "Rustic Cabin in the Woods",
    description: "A rustic cabin surrounded by nature, perfect for outdoor enthusiasts.",
    price: "$800/month",
    location: "Colorado Rockies",
    image: [
      require('./roomimg_2.png'),
      require('./roomimg_3.png'),
      require('./roomimg_4.png'),
      require('./roomimg_5.png'),
      require('./roomimg_1.png')
    ],
    amenities: ["Mountain View", "Fireplace", "Hiking Trails"],
    availability: "Available",
  },
  {
    id: 8,
    title: "City Center Loft with Skyline Views",
    description: "A stylish loft in the heart of the city with panoramic skyline views.",
    price: "$1800/month",
    location: "Downtown",
    image: [
      require('./roomimg_3.png'),
      require('./roomimg_4.png'),
      require('./roomimg_5.png'),
      require('./roomimg_1.png'),
      require('./roomimg_2.png')
    ],
    amenities: ["Wi-Fi", "Air Conditioning", "Workspace", "Parking"],
    availability: "Available",
  },
  {
    id: 9,
    title: "Elegant Townhouse with Garden",
    description: "An elegant townhouse with a private garden oasis, perfect for entertaining guests.",
    price: "$2800/month",
    location: "Upper West Side",
    image: [
      require('./roomimg_4.png'),
      require('./roomimg_5.png'),
      require('./roomimg_1.png'),
      require('./roomimg_2.png'),
      require('./roomimg_3.png')
    ],
    amenities: ["Garden", "Fireplace", "Parking"],
    availability: "Available",
  },
  {
    id: 10,
    title: "Secluded Mountain Retreat",
    description: "A secluded mountain retreat surrounded by forests and hiking trails, ideal for a peaceful getaway.",
    price: "$1500/month",
    location: "Smoky Mountains",
    image: [
      require('./roomimg_5.png'),
      require('./roomimg_1.png'),
      require('./roomimg_2.png'),
      require('./roomimg_3.png'),
      require('./roomimg_4.png')
    ],
    amenities: ["Mountain View", "Fireplace", "Hiking Trails"],
    availability: "Available",
  },
  // Add more room objects as needed
];

export default roomsData;
