import ProductList from "@/components/ProductList";
import Image from "next/image";
import { ToastContainer } from "react-toastify";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const categories = (await searchParams).category;
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="featured" fill />
      </div>
      <ProductList categories={categories} params="homepage" />
    </div>
  );
};

export default Homepage;

// ---

// ### 🧩 `({ searchParams }: { searchParams: Promise<{ category: string }> })`

// * بتستقبل **الـquery params** اللي في الـURL، زي `?category=shoes`
// * `searchParams` فيها كل القيم دي (مثلاً `{ category: "shoes" }`)
// * مكتوبة كـ **Promise**، عشان كده بنستخدم `await searchParams`
// * الهدف: نعرف المستخدم اختار أي فئة (category) ونستخدمها في الصفحة

// 💡 مثال:
// `/ ?category=shoes` → `searchParams.category = "shoes"`

// ---
