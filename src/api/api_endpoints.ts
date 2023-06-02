export const getAccessToken = (token: string) => ({
    headers: {
        Authorization: "Bearer " + token
    }
});

// Current logged in user
export const CURRENT_USER = "/staffs/getCurrentStaff";

// Login
export const LOGIN = "/staffs/loginStaff";

export const getLoginBody = (email: string, password: string) => ({
    staffEmail: email,
    staffPassword: password
});

// Product
export const GET_ALL_PRODUCTS = "/products/getAllProducts";

export const GET_PRODUCT = (id: string) => `/products/getProductById/${id}`;

export const CREATE_PRODUCT = "/products/createProduct";

export const UPDATE_PRODUCT = (id: string) => `/products/updateProduct/${id}`;

export const DELETE_PRODUCT = (id: string) => `/products/deleteProduct/${id}`;

export const ACTIVE_INACTIVE_PRODUCT = (id: string) => `/products/activeOrInactiveProduct/${id}`;

export const getProductId = (id: string) => ({
    params: {
        productId: id
    }
});

export const getProductBody = (name: string, description: string, price: number, category: string, subcategory: string, supplier: string) => ({
    productName: name,
    productDescription: description,
    productPrice: price,
    productCategoryId: category,
    productSubcategoryId: subcategory,
    productSupplierId: supplier
});

// Product Image
export const GET_ALL_PRODUCT_IMAGES = (id: string) => `/products/getAllProductImagesByColor/${id}`;

export const GET_ALL_PRODUCT_IMAGES_BY_COLOR = (id: string, productColorId: string) => `/products/getAllProductImagesByColor/${id}/${productColorId}`;

export const SAVE_PRODUCT_IMAGE = (id: string) => `/products/saveProductImage/${id}`;

export const DELETE_PRODUCT_IMAGE = (id: string) => `/products/deleteProductImage/${id}`;


// Product Color
export const GET_ALL_PRODUCT_COLORS = (id: string) => `/products/getAllProductColors/${id}`;

export const ADD_PRODUCT_COLOR = (id: string) => `/products/addProductColor/${id}`;

export const getProductColorBody = (colorId: string) => ({
    colorId: colorId
});

// Product Dimension
export const GET_DIMENSION = (id: string) => `/products/getProductDimension/${id}`;

export const ADD_DIMENSION = (id: string) => `/products/addProductDimension/${id}`;

export const UPDATE_DIMENSION = (id: string) => `/products/updateProductDimension/${id}`;

export const getDimensionBody = (length: number, width: number, height: number, weight: number) => ({
    productLength: length,
    productWidth: width,
    productHeight: height,
    productWeight: weight
});

// Category
export const GET_ALL_CATEGORIES = "/categories/getAllCategories";

export const GET_CATEGORY = (id: string) => `/categories/getCategoryById/${id}`;

export const getCategoryId = (id: string) => ({
    params: {
        categoryId: id
    }
});

// Subcategory
export const GET_ALL_SUBCATEGORIES = "/subcategories/getAllSubcategories";

export const GET_SUBCATEGORY = (id: string) => `/subcategories/getSubcategoryById/${id}`;

export const getSubcategoryId = (id: string) => ({
    params: {
        subcategoryId: id
    }
});

// Supplier
export const GET_ALL_SUPPLIERS = "/suppliers/getAllSuppliers";

export const GET_SUPPLIER = (id: string) => `/suppliers/getSupplierById/${id}`;

export const getSupplierId = (id: string) => ({
    params: {
        supplierId: id
    }
});

// Color
export const GET_ALL_COLORS = "/colors/getAllColors";

// Attachment
export const PREVIEW_ATTACHMENT = (id: string) => `/attachments/previewAttachment/${id}`;