import HttpService from './http.service';
import {
  IContactsFormData,
  IFeedbackFormErrorMessages,
} from '@/types/contacts.types';

class AppService extends HttpService {
  constructor() {
    super();
  }

  async createFeedback(
    data: IContactsFormData
  ): Promise<IFeedbackFormErrorMessages | IContactsFormData> {
    const response = await this.post<
      IFeedbackFormErrorMessages | IContactsFormData,
      IContactsFormData
    >(
      {
        url: 'feedback',
        data,
      },
      false
    );

    return response.data;
  }
}

const appService = new AppService();

export default appService;
