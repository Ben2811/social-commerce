export { AdminSidebar } from "./components/AdminSidebar";

export { ProductsHeader } from "./components/products/ProductsHeader";
export { ProductsTable } from "./components/products/ProductsTable";
export { ProductsActions } from "./components/products/ProductsActions";
export { DeleteProductDialog } from "./components/products/DeleteProductForm";


export { managementItems, contentItems, supportLink, settingsLink } from "./constants/sidebar-menu";

export { PRODUCT_COLUMNS } from "./constants/products";


export { adminProductsService } from "./services/products.service";


export {
  useAdminProducts,
  useUpdateAdminProductStatus,
  useDeleteAdminProduct,
} from "./hooks/useAdminProducts";


export type {
  AdminProduct,
  AdminVariant,
  UpdateAdminProductStatusInput,
} from "./types/product";