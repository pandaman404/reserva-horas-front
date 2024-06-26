import { type ApiResponseAppointments } from '@/@types/api';
import { type Appointment } from '@/@types/appointment';
import { type MedicalCenterId } from '@/@types/medicalCenter';
import { type MedicalSpecialtyId } from '@/@types/medicalSpecialty';
import axios from 'axios';

const baseUrl = 'https://api.jsonbin.io/v3/b/667c72caacd3cb34a85dcf2c';
const accessKey = '$2a$10$I.9CISo2jcSdHsEA7d3dgeoAQ9vo5e/87.NDsgyTgNpgcSSgdZzE.';

export const getAvailableAppointmentsByParams = async (
  specialty: MedicalSpecialtyId,
  medicalCenter: MedicalCenterId,
) => {
  try {
    const response = await axios.get(baseUrl, {
      headers: {
        'X-ACCESS-KEY': accessKey,
      },
    });

    const { record }: ApiResponseAppointments = response.data;

    const availableAppointments: Appointment[] = [];

    for (const appointment of record.appointments) {
      if (appointment.available && appointment.specialty === specialty && appointment.medicalCenter === medicalCenter) {
        appointment.created_at = new Date(appointment.created_at);
        appointment.day = new Date(appointment.day);
        availableAppointments.push(appointment);
      }
    }

    const sortedAvailableAppointments = availableAppointments.sort(
      (a, b) => new Date(a.day).getTime() - new Date(b.day).getTime(),
    );

    return sortedAvailableAppointments;
  } catch (error) {
    // https://axios-http.com/docs/handling_errors
  }
};
