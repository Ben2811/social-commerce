import { useState } from "react";
import { categories } from "../data/categories";

function CategoryPage() {
    const [selected, setSelected] = useState(null);

  return (
    <div>
      <h2>Danh mục sản phẩm</h2>

      <ul>
        {categories.map((c) => (
          <li key={c.id}
            onClick={() => setSelected(c.name)}
            style={{ 
              cursor: "pointer",
            fontWeight: selected === c.name ? "bold" : "normal",
          color: selected ===c.name ? "blue" : "black",
         }}
            >{c.name}
            </li>
        ))}
      </ul>
      {selected && <p>Đang xem danh mục: {selected}</p>}
    </div>
  );
}

export default CategoryPage;
