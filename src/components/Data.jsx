import sables from '../images/sables.png'
import glamour from '../images/glamour.png'
import aromat from '../images/aromat.png'
import kafe from '../images/kafe.png'


const MenuItems = [
    {
      id: 1,
      itemId: "Restaurant1",
      name: "Pardes Restaurant",
      name1: "work time 9:30am a 10:00pm",
      name2: "Before you 4$",
      imgSrc: sables,
    },
    {
      id: 2,
      itemId: "Restaurant2",
      name: "Glamour Kafe",
      name1: "work time 9:30am a 10:00pm",
      name2: "Before you 13$",
      imgSrc: glamour,
    },
    {
      id: 3,
      itemId: "Restaurant3",
      name: "Aromat Bakery",
      name1: "work time 9:30am a 10:00pm",
      name2: "Before you 3$",
      imgSrc: aromat,
    },
    {
      id: 4,
      itemId: "Restaurant4",
      name: "Last night Restaurant & kafe",
      name1: "work time 9:30am a 10:00pm",
      name2: "Before you 5$",
      imgSrc: kafe,
    },
  ];
  
  const Items = [
    {
      id: 1,
      itemId: "Restaurant1",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger1.png?alt=media&token=319dfbe9-462b-46ea-8f38-6ca7a20319e0",
      name: "Burger Bistro",
      ratings: 5,
      price: "7.5",
    },
    {
      id: 2,
      itemId: "Restaurant1",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger2.png?alt=media&token=b256ed7a-fe35-4051-9bf5-24f39b79f2b2",
      name: "Smokin' Burger",
      ratings: 5,
      price: "12",
    },
    {
      id: 3,
      itemId: "Restaurant1",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2",
      name: "Euphoria Burger",
      ratings: 5,
      price: "12",
    },
    {
      id: 4,
      itemId: "Restaurant1",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger4.png?alt=media&token=f219c72c-22b5-484a-9135-34bbb84e7faa",
      name: "Sassy Burger",
      ratings: 5,
      price: "12",
    },
    {
      id: 5,
      itemId: "Restaurant1",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger5.png?alt=media&token=e8963c79-af46-4f33-a28d-059f98f464e3",
      name: "Jazz Burger",
      ratings: 5,
      price: "12",
    },
    {
      id: 6,
      itemId: "Restaurant1",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger6.png?alt=media&token=f2b8febd-f0f8-48d7-9e1a-72d26b7bb36b",
      name: "Healthy Buns",
      ratings: 5,
      price: "12",
    },
    {
      id: 7,
      itemId: "Restaurant2",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza1.png?alt=media&token=7ffbc681-5d86-4429-888b-9597f3e800e8",
      name: "Margherita",
      ratings: 5,
      price: "12",
    },
    {
      id: 8,
      itemId: "Restaurant2",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza2.png?alt=media&token=e9b65d7f-bd12-4c33-b172-729f1dfcf461",
      name: "Peppy Paneer",
      ratings: 5,
      price: "12",
    },
    {
      id: 9,
      itemId: "Restaurant2",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza3.png?alt=media&token=4dea85ad-c36d-405a-adcd-a9dfd0c63a6a",
      name: "Double Cheese",
      ratings: 5,
      price: "12",
    },
    {
      id: 10,
      itemId: "Restaurant2",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza4.png?alt=media&token=1e5259ff-3431-4c76-830e-80e9d7dcc01e",
      name: "Farm House",
      ratings: 4,
      price: "12",
    },
    {
      id: 11,
      itemId: "Restaurant2",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza5.png?alt=media&token=42bafbe4-f993-4aeb-93ee-57ea04b7cf1b",
      name: "Veg Extrava",
      ratings: 4,
      price: "12",
    },
    {
      id: 12,
      itemId: "Restaurant2",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza6.png?alt=media&token=72a1e335-68d0-4b1c-8bbd-f28c656ce3b5",
      name: "Deluxe Veggie",
      ratings: 4,
      price: "12",
    },
    {
      id: 13,
      itemId: "Restaurant3",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog1.png?alt=media&token=658e67d8-9284-4ba4-93ad-778dad99ce9c",
      name: "Hot Dog",
      ratings: 4,
      price: "12",
    },
    {
      id: 14,
      itemId: "Restaurant3",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog2.png?alt=media&token=20c79a23-546f-48ef-a0fb-d6801e22273c",
      name: "Hot Dog",
      ratings: 4,
      price: "12",
    },
    {
      id: 15,
      itemId: "Restaurant3",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog3.png?alt=media&token=f0f0024f-0c1f-48ff-b589-b7f484ab5c96",
      name: "Hot Dog",
      ratings: 4,
      price: "12",
    },
    {
      id: 16,
      itemId: "Restaurant3",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog4.png?alt=media&token=0c0e6531-db79-42b8-94f9-78a6d618f20c",
      name: "Hot Dog",
      ratings: 4,
      price: "12",
    },
    {
      id: 17,
      itemId: "Restaurant3",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog5.png?alt=media&token=95f8330f-dc35-4029-b125-d9cf01e3e345",
      name: "Hot Dog",
      ratings: 4,
      price: "12",
    },
    {
      id: 18,
      itemId: "Restaurant3",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog6.png?alt=media&token=d371d7dd-c23e-465a-87ec-605c7ed3bc02",
      name: "Hot Dog",
      ratings: 3,
      price: "12",
    },
    {
      id: 19,
      itemId: "Restaurant4",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco1.png?alt=media&token=b78c8e68-c1a6-4e43-8c43-6ef9f23aa59f",
      name: "Taco",
      ratings: 3,
      price: "7.5",
    },
    {
      id: 20,
      itemId: "Restaurant4",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco2.png?alt=media&token=a6e8d72e-f288-48dc-9f26-8322774f5216",
      name: "Taco",
      ratings: 3,
      price: "7.5",
    },
    {
      id: 21,
      itemId: "Restaurant4",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco3.png?alt=media&token=daa2cf5b-36b7-426a-9f2c-73ae70e62634",
      name: "Taco",
      ratings: 3,
      price: "7.5",
    },
    {
      id: 22,
      itemId: "Restaurant4",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco4.png?alt=media&token=5d067124-870f-4ea8-afe1-5bd4f94ca20c",
      name: "Taco",
      ratings: 3,
      price: "9",
    },
    {
      id: 23,
      itemId: "Restaurant4",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco5.png?alt=media&token=910f236f-2149-46cf-9b74-7d1ee0323c93",
      name: "Taco",
      ratings: 3,
      price: "9",
    },
    {
      id: 24,
      itemId: "Restaurant4",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco6.png?alt=media&token=91214a30-cad0-434d-9339-3c658150ccab",
      name: "Taco",
      ratings: 3,
      price: "9",
    },
  ];
  
  export { MenuItems, Items };