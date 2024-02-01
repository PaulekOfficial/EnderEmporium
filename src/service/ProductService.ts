import axios from 'axios';

interface Price {
    id: number;
    product_id: number;
    netto: number;
    brutto: number;
    vat: number;
    created_at: string;
    updated_at: string;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    description_image: string;
    image: string;
    created_at: string;
    updated_at: string;
    prices?: Price[];
}

export interface ProductResponse {
    success: boolean;
    product: Product;
}

export interface ProductsResponse {
    success: boolean;
    products: Product[];
}

export interface ErrorResponse {
    success: false;
    message: string;
}

const BASE_URL = 'http://127.0.0.1:8001';

export const ProductService = {
    createProduct: async (productData: Partial<Product>): Promise<ProductResponse> => {
        try {
            const response = await axios.post<ProductResponse>(`${BASE_URL}/product/create`, productData);
            return response.data;
        } catch (error) {
            console.error('Error creating product:', error);
            throw error;
        }
    },

    getAllProducts: async (): Promise<ProductsResponse> => {
        try {
            const response = await axios.get<ProductsResponse>(`${BASE_URL}/product/all`);
            return response.data;
        } catch (error) {
            console.error('Error fetching all products:', error);
            throw error;
        }
    },

    getProductById: async (id: number): Promise<ProductResponse | ErrorResponse> => {
        try {
            const response = await axios.get<ProductResponse | ErrorResponse>(`${BASE_URL}/product/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error getting product with ID ${id}:`, error);
            return { success: false, message: `Error deleting product with ID ${id}` };
        }
    },

    updateProduct: async (id: number, productData: Partial<Product>): Promise<ProductResponse | ErrorResponse> => {
        try {
            const response = await axios.put<ProductResponse>(`${BASE_URL}/product/${id}`, productData);
            return response.data;
        } catch (error) {
            console.error(`Error updating product with ID ${id}:`, error);
            return { success: false, message: `Error updating product with ID ${id}` };
        }
    },

    deleteProduct: async (id: number): Promise<ErrorResponse | { success: true }> => {
        try {
            const response = await axios.delete<ErrorResponse | { success: true }>(`${BASE_URL}/product/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting product with ID ${id}:`, error);
            return { success: false, message: `Error deleting product with ID ${id}` };
        }
    },
};
