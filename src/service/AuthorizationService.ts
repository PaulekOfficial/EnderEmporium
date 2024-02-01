import axios from 'axios';

interface User {
    id: number;
    username: string;
    email: string;
    enabled: boolean;
}

interface AuthResult {
    success: boolean;
    token?: string;
    user?: User;
    message?: string;
}

interface ErrorResponse {
    success: false;
    message: string;
}

const BASE_URL = 'http://127.0.0.1:8001';

const AuthorizationService = {
    login: async (email: string, password: string): Promise<AuthResult | ErrorResponse> => {
        try {
            const response = await axios.post<AuthResult | ErrorResponse>(`${BASE_URL}/authorization/login`, { email, password });
            const data = response.data;
            if (!data.success) {
                return data;
            }

            const authResult = data as AuthResult;
            const { user, token } = authResult;

            localStorage.setItem('token', token);
            return { success: true, user, token };
        } catch (error) {
            console.error('Login failed:', error);
            return { success: false, message: 'Login failed' };
        }
    },

    register: async (
        userData: { username: string; email: string; password: string; enabled: boolean }
    ): Promise<AuthResult | ErrorResponse> => {
        try {
            const response = await axios.post<AuthResult | ErrorResponse>(`${BASE_URL}/authorization/register`, userData);
            return response.data;
        } catch (error) {
            console.error('Registration failed:', error.response);
            const response = error.response;

            if (response && response.data && response.data.message) {
                return { success: false, message: response.data.message };
            } else {
                return { success: false, message: 'Registration failed' };
            }
        }
    },

    logout: async (): Promise<AuthResult> => {
        try {
            await axios.get(`${BASE_URL}/authorization/logout`);
            localStorage.removeItem('token');
            return { success: true };
        } catch (error) {
            console.error('Logout failed:', error);
            return { success: false, message: 'Logout failed' };
        }
    },

    getToken: (): string | null => {
        return localStorage.getItem('token');
    },

    isAuthenticated: (): boolean => {
        return !!localStorage.getItem('token');
    },
};

export default AuthorizationService;
