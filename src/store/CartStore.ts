import { CartStoreActionsType, CartStoreStsate } from "@/type";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useCartStore = create<CartStoreStsate & CartStoreActionsType>()(
  persist(
    (set) => ({
      cartItems: [],
      hasHydrated: false,
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cartItems.findIndex(
            (item) =>
              item.id === product.id &&
              item.selectedSize === product.selectedSize &&
              item.selectedColor === product.selectedColor
          );
          console.log(existingItem);

          if (existingItem !== -1) {
            const updatedItems = [...state.cartItems];
            updatedItems[existingItem].quantity += product.quantity || 1;
            return { cartItems: updatedItems };
          }

          return {
            cartItems: [...state.cartItems, ...[product]],
          };
        }),
      removeFromCart: (product) =>
        set((state) => ({
          cartItems: state.cartItems.filter(
            (item) =>
              !(
                item.id === product.id &&
                item.selectedSize === product.selectedSize &&
                item.selectedColor === product.selectedColor
              )
          ),
        })),
      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true;
        }
      },
    }
  )
);

export default useCartStore;
