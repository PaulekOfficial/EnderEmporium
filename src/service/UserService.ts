import axios from 'axios';

interface User {
    id: number;
    username: string;
    email: string;
    enabled: boolean;
}

interface UsersResponse {
    success: boolean;
    users: User[];
}

interface UserResponse {
    success: boolean;
    user?: User;
    message?: string;
}

interface ErrorResponse {
    success: false;
    message: string;
}

const BASE_URL = 'http://127.0.0.1:8001'; // Replace with your actual API base URL

const UserService = {
    getAllUsers: async (): Promise<UsersResponse | ErrorResponse> => {
        try {
            const response = await axios.get<UsersResponse>(`${BASE_URL}/user/all`);
            return response.data;
        } catch (error) {
            console.error('Error fetching all users:', error);
            return { success: false, message: 'Error fetching all users' };
        }
    },

    getUserById: async (id: number): Promise<UserResponse> => {
        try {
            const response = await axios.get<UserResponse>(`${BASE_URL}/user/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching user with ID ${id}:`, error);
            return { success: false, message: `Error fetching user with ID ${id}` };
        }
    },

    deleteUserById: async (id: number): Promise<ErrorResponse | { success: true }> => {
        try {
            const response = await axios.delete<ErrorResponse | { success: true }>(`${BASE_URL}/user/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting user with ID ${id}:`, error);
            return { success: false, message: `Error deleting user with ID ${id}` };
        }
    },

    updateUserById: async (id: number, data: any): Promise<UserResponse | ErrorResponse> => {
        try {
            const response = await axios.put<UserResponse>(`${BASE_URL}/user/${id}`, data);
            return response.data;
        } catch (error) {
            console.error(`Error updating user with ID ${id}:`, error);
            return { success: false, message: `Error updating user with ID ${id}` };
        }
    },

    activateUserById: async (id: number): Promise<UserResponse | ErrorResponse> => {
        try {
            const response = await axios.put<UserResponse>(`${BASE_URL}/user/enable/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error enabling user with ID ${id}:`, error);
            return { success: false, message: `Error enabling user with ID ${id}` };
        }
    },

    deactivateUserById: async (id: number): Promise<UserResponse | ErrorResponse> => {
        try {
            const response = await axios.put<UserResponse>(`${BASE_URL}/user/deactivate/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error deactivate user with ID ${id}:`, error);
            return { success: false, message: `Error deactivate user with ID ${id}` };
        }
    },
};

export default UserService;
