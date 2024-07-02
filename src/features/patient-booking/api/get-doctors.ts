import { type ApiResponseDoctors } from '@/@types/api';
import axios from 'axios';

const baseUrl = 'https://api.jsonbin.io/v3/b/667c7334acd3cb34a85dcf4e';
const accessKey = '$2a$10$I.9CISo2jcSdHsEA7d3dgeoAQ9vo5e/87.NDsgyTgNpgcSSgdZzE.';

export const getDoctors = async () => {
  try {
    const response = await axios.get(baseUrl, {
      headers: {
        'X-ACCESS-KEY': accessKey,
      },
    });

    const { record }: ApiResponseDoctors = response.data;

    return record.doctors;
  } catch (error) {
    console.log(error);
  }
};
