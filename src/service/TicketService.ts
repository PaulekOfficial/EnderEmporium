import axios from 'axios';

export interface TicketFormData {
    name: string;
    email: string;
    message: string;
}

interface ErrorResponse {
    success: false;
    message: string;
}

const BASE_URL = 'http://127.0.0.1:8001';

class TicketService {
    async createTicket(ticketData: TicketFormData): Promise<TicketFormData | ErrorResponse> {
        try {
            const response = await axios.post<TicketFormData | ErrorResponse>(`${BASE_URL}/ticket/create`, ticketData);
            return response.data;
        } catch (error) {
            console.error('Error creating ticket:', error);
            return { success: false, message: 'Error while sending tickiet' };
        }
    }
}

export default new TicketService();
