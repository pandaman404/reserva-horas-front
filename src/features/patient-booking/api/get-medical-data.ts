import type { ApiResponseGetMedicalData } from '@/@types/api';
import { axiosClient } from '@/lib/axios-client';

export async function getMedicalData() {
  try {
    const axiosResponse = await axiosClient.get('/medicalData');
    const { data } = axiosResponse.data as ApiResponseGetMedicalData;
    return data;
  } catch (error) {
    console.error(error);
  }
}
