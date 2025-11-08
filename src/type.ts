import { z } from "zod";
// product
export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: { [key: string]: string };
};

export type ProductsType = ProductType[];
// cart
export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsType = CartItemType[];
// shipping
export const shippingFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  email: z.string().email({ message: "email is required" }),
  phone: z
    .string()
    .min(7, { message: "Phone number must be at least 7 characters long" })
    .max(18, { message: "Phone number must be at most 18 characters long" }),
  address: z
    .string()
    .min(3, { message: "Address must be at least 3 characters long" }),
  city: z
    .string()
    .min(3, { message: "City must be at least 3 characters long" }),
});

export type shippingFormInputs = z.infer<typeof shippingFormSchema>;
// payment
export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, "Card holder is required!"),
  cardNumber: z
    .string()
    .min(3, "Card Number is required!")
    .max(16, "Card Number is required!"),
  expirationDate: z.string(),
  // .regex(
  //   /^(0[1-9]|1[0-2])\/\d{2}$/,
  //   "Expiration date must be in MM/YY format!"
  // ),
  cvv: z.string().min(3, "CVV is required!").max(3, "CVV is required!"),
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;

// ليه عملت كدا عشان اوفر  ع نفسي كتابة الكود كدا طلعت الاسكيما بتاعتي من الفالديشين بتاع الكود

// zustend type
export type CartStoreStsate = {
  cartItems: CartItemsType;
  hasHydrated: boolean;
};

export type CartStoreActionsType = {
  addToCart: (product: CartItemType) => void;
  removeFromCart: (product: CartItemType) => void;
  clearCart: () => void;
};
