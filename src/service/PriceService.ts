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

interface PricesResponse {
    success: boolean;
    prices: Price[];
}

interface PriceResponse {
    success: boolean;
    price: Price;
}

interface ErrorResponse {
    success: false;
    message: string;
}

const BASE_URL = 'http://127.0.0.1:8001';

export const PriceService = {
    getAllPrices: async (): Promise<PricesResponse | ErrorResponse> => {
        try {
            const response = await axios.get<PricesResponse>(`${BASE_URL}/price/all`);
            return response.data;
        } catch (error) {
            console.error('Error fetching prices:', error);
            return { success: false, message: 'Error fetching prices' };
        }
    },

    getPriceById: async (id: number): Promise<PriceResponse | ErrorResponse> => {
        try {
            const response = await axios.get<PriceResponse>(`${BASE_URL}/price/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching price with ID ${id}:`, error);
            return { success: false, message: `Error fetching price with ID ${id}` };
        }
    },

    getPriceByProductId: async (productId: number): Promise<PricesResponse | ErrorResponse> => {
        try {
            const response = await axios.get<PricesResponse>(`${BASE_URL}/price/product/${productId}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching price for product with ID ${productId}:`, error);
            return { success: false, message: `Error fetching price for product with ID ${productId}` };
        }
    },

    deletePriceById: async (id: number): Promise<ErrorResponse | { success: true }> => {
        try {
            const response = await axios.delete<ErrorResponse | { success: true }>(`${BASE_URL}/price/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting price with ID ${id}:`, error);
            return { success: false, message: `Error deleting price with ID ${id}` };
        }
    },

    createPrice: async (data: Partial<Price>): Promise<PriceResponse | ErrorResponse> => {
        try {
            const response = await axios.post<PriceResponse>(`${BASE_URL}/price/create`, data);
            return response.data;
        } catch (error) {
            console.error('Error creating price:', error);
            return { success: false, message: 'Error creating price' };
        }
    },
};
