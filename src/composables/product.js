import { computed, reactive, ref } from "vue";

export const useProduct = () => {
  const products = [
    {
      id: 1,
      title: "Кукуруза консервированная Bonduelle 425мл",
      price: 487,
      image: "img/bonduelle.png",
    },
    {
      id: 2,
      title: `Голень индейки "Дамдi Ет" замороженная в вакууме  275 г`,
      price: 1065,
      image: "img/meat.png",
    },
    {
      id: 3,
      title: `Колбаса варёно-копчёная "Дамдi Ет" Премьерская в вакууме`,
      price: 5187,
      image: "img/kolbasa.png",
    },
    {
      id: 4,
      title: "Мед натуральный с соком грейпфрута",
      price: 487,
      image: "img/honey.png",
    },
  ];

  const cart = reactive(JSON.parse(localStorage.getItem("cart")) || []);

  const addCart = (id, qty) => {
    cart.push({ price: qty * products[id - 1].price, qty: qty });
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const totalCart = computed(() => {
    return {
      totalCount: cart.reduce((acc, cur) => acc + cur.qty, 0),
      totalPrice: cart.reduce((acc, cur) => acc + cur.price, 0),
    };
  });

  return {
    products,
    totalCart,
    addCart,
  };
};
