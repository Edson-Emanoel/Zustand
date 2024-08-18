import { create } from "zustand";

// 
const initialItems = [
      {
            id: "1",
            name: 'PS4',
            price: 1500.00
      },
      {
            id: "2",
            name: 'PS4',
            price: 1500.00
      },
      {
            id: "3",
            name: 'PS4',
            price: 1500.00
      },
      {
            id: "4",
            name: 'PS4',
            price: 1500.00
      },
      {
            id: "5",
            name: 'PS4',
            price: 1500.00
      }
];

type Item = {
      id: string;
      name: string;
      price: number;
}

type CartStore = {
      avaibleItems: Item[];
      cart: Item[];
      addToCart: (item: Item) => void;
      removeFromCart: (id: string) => void;
}

export const useCartStore = create<CartStore>((set) => {
      return{
            cart: [],
            avaibleItems: initialItems,
            addToCart: (item) => set((state) => ({ cart: [...state.cart, item ] })),
            removeFromCart: (id) => set((state) => ({ cart: state.cart.filter(item => item.id !== id) })),
      }
})