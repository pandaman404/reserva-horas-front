import { ApiResponse } from '@/@types/api';
import { StatusCodes } from 'http-status-codes';
import axios from 'axios';

const baseUrl = 'https://api.jsonbin.io/v3/b/6678dc50e41b4d34e4080747';
const accessKey =
  '$2a$10$I.9CISo2jcSdHsEA7d3dgeoAQ9vo5e/87.NDsgyTgNpgcSSgdZzE.';

export const getMedicalData = async () => {
  try {
    const response = await axios.get(baseUrl, {
      headers: {
        'X-ACCESS-KEY': accessKey,
      },
    });

    const { record }: ApiResponse = response.data;

    return record;
  } catch (error) {
    // https://axios-http.com/docs/handling_errors
  }
};
