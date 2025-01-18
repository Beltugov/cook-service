import img from "../../assets/Card.png"

export const SET_LIKE = 'SET_LIKE'

const initialStore = [
  {
    type: "Закуски",
    items: [
      {
        id: 1,
        img: img,
        title: "Картофель с луком и белыми грибами",
        gram: "320г",
        calories: "1 040 ккал",
        price: 430,
        description: "Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.",
        isLiked: false,
      },
      {
        id: 2,
        img: img,
        title: "Картофель с луком и белыми грибами",
        gram: "320г",
        calories: "1 040 ккал",
        price: 430,
        description: "Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.",
      },
      {
        id: 3,
        img: img,
        title: "Картофель с луком и белыми грибами",
        gram: "320г",
        calories: "1 040 ккал",
        price: 430,
        description: "Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.",
      },
      {
        id: 4,
        img: img,
        title: "Картофель с луком и белыми грибами",
        gram: "320г",
        calories: "1 040 ккал",
        price: 430,
        description: "Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.",
      },
      {
        id: 5,
        img: img,
        title: "Картофель с луком и белыми грибами",
        gram: "320г",
        calories: "1 040 ккал",
        price: 430,
        description: "Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.",
      },
      {
        id: 6,
        img: img,
        title: "Картофель с луком и белыми грибами",
        gram: "320г",
        calories: "1 040 ккал",
        price: 430,
        description: "Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.",
      },
    ]
  },
  {
    type: "Салаты",
    items: [
      {
        id: 1,
        img: img,
        title: "Картофель с луком и белыми грибами",
        gram: "320г",
        calories: "1 040 ккал",
        price: 430,
        description: "Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.",

      },
      {
        id: 2,
        img: img,
        title: "Картофель с луком и белыми грибами",
        gram: "320г",
        calories: "1 040 ккал",
        price: 430,
        description: "Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.",

      },
      {
        id: 3,
        img: img,
        title: "Картофель с луком и белыми грибами",
        gram: "320г",
        calories: "1 040 ккал",
        price: 430,
        description: "Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.",

      },
    ]
  },
  {
    type: "Горячее",
    items: [
      {
        id: 1,
        img: img,
        title: "Картофель с луком и белыми грибами",
        gram: "320г",
        calories: "1 040 ккал",
        price: 430,
        description: "Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.",

      },
      {
        id: 2,
        img: img,
        title: "Картофель с луком и белыми грибами",
        gram: "320г",
        calories: "1 040 ккал",
        price: 430,
        description: "Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.",

      },
      {
        id: 3,
        img: img,
        title: "Картофель с луком и белыми грибами",
        gram: "320г",
        calories: "1 040 ккал",
        price: 430,
        description: "Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.",

      },
      {
        id: 4,
        img: img,
        title: "Картофель с луком и белыми грибами",
        gram: "320г",
        calories: "1 040 ккал",
        price: 430,
        description: "Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.",
      },
    ]
  },
]

const itemReducer = (state = initialStore, action) => {
  switch (action.type) {
    case (SET_LIKE):
      return state.map((elem) => {
        if (elem.type === action.payload.type) {
          elem.items.map((item) => {
            if (item.id === action.payload.id) {
              item.isLiked = !item.isLiked
            }
            return item
          })
        }
        return elem
      })
    default:
      return state
  }
}

export default itemReducer