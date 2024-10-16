import { UserType } from "../App";

export default function dataInit() {
  let users = []
  const newUser = { username: "a", password: "a", firstname: "a", lastname: "a", phoneNumber: "a", address: "a", basket: [], messages: [], type: UserType.User }
  const newWorker = { username: "w", password: "w", firstname: "w", lastname: "w", phoneNumber: "w", address: "w", basket: [], messages: [], type: UserType.Worker }
  if (localStorage.getItem("users") == null) {
    users.push(newUser)
    users.push(newWorker)
    localStorage.setItem("users", JSON.stringify(users));
  }

  const products = [
    {
      id: 1,
      type: "Torta",
      name: "Torta 1",
      description: "Najukusnija torta ikad.",
      price: 1000,
      composition: "mleko, so",
      image: "/images/torta1.png",
      comments: [{ username: "neko", text: "Odlicno!" }]
    },
    {
      id: 2,
      type: "Torta",
      name: "Torta 2",
      description: "Najukusnija torta ikad.",
      price: 1200,
      composition: "mleko, so",
      image: "/images/torta2.png",
      comments: []
    },
    {
      id: 3,
      type: "Torta",
      name: "Torta 3",
      description: "Najukusnija torta ikad.",
      price: 1300,
      composition: "mleko, so",
      image: "/images/torta3.png",
      comments: []
    },
    {
      id: 4,
      type: "Torta",
      name: "Torta 4",
      description: "Najukusnija torta ikad.",
      price: 1400,
      composition: "mleko, so",
      image: "/images/torta3.png",
      comments: []
    },
    {
      id: 5,
      type: "Torta",
      name: "Torta 5",
      description: "Najukusnija torta ikad.",
      price: 1500,
      composition: "mleko, so",
      image: "/images/torta2.png",
      comments: []
    },
    {
      id: 6,
      type: "Torta",
      name: "Torta 6",
      description: "Najukusnija torta ikad.",
      price: 1600,
      composition: "mleko, so",
      image: "/images/torta1.png",
      comments: []
    },

    {
      id: 7,
      type: "Kolač",
      name: "Kolač 1",
      description: "Najukusniji kolač ikad.",
      price: 1000,
      composition: "mleko, so",
      image: "/images/kolac1.png",
      comments: []
    },
    {
      id: 8,
      type: "Kolač",
      name: "Kolač 2",
      description: "Najukusniji kolač ikad.",
      price: 1200,
      composition: "mleko, so",
      image: "/images/kolac2.png",
      comments: []
    },
    {
      id: 9,
      type: "Kolač",
      name: "Kolač 3",
      description: "Najukusniji kolač ikad.",
      price: 1300,
      composition: "mleko, so",
      image: "/images/kolac3.png",
      comments: []
    },
    {
      id: 10,
      type: "Kolač",
      name: "Kolač 4",
      description: "Najukusniji kolač ikad.",
      price: 1400,
      composition: "mleko, so",
      image: "/images/kolac3.png",
      comments: []
    },
    {
      id: 11,
      type: "Kolač",
      name: "Kolač 5",
      description: "Najukusniji kolač ikad.",
      price: 1500,
      composition: "mleko, so",
      image: "/images/kolac2.png",
      comments: []
    },
    {
      id: 12,
      type: "Kolač",
      name: "Kolač 6",
      description: "Najukusniji kolač ikad.",
      price: 1600,
      composition: "mleko, so",
      image: "/images/kolac1.png",
      comments: []
    },
  ]
  localStorage.setItem("products", JSON.stringify(products))
  
  const productId = 13
  const orderId = 1
  localStorage.setItem("productId", JSON.stringify(productId))
  localStorage.setItem("orderId", JSON.stringify(orderId))
  
}