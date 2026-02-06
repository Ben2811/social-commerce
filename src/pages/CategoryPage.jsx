import { categories } from "../data/categories";

function CategoryPage() {
  return (
    <div>
      <h2>Danh mục sản phẩm</h2>

      <ul>
        {categories.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryPage;