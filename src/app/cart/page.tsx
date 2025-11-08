import { Suspense } from "react";
import CartContent from "./CartContent";

export default function CartPage() {
  return (
    <Suspense
      fallback={<div className="p-10 text-center">Loading cart details...</div>}
    >
      <CartContent />
    </Suspense>
  );
}
