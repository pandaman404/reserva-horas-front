import { type ApiResponseAppointments } from '@/@types/api';
import { type Appointment } from '@/@types/appointment';
import axios from 'axios';

const baseUrl = 'https://api.jsonbin.io/v3/b/667c72caacd3cb34a85dcf2c';
const accessKey = '$2a$10$I.9CISo2jcSdHsEA7d3dgeoAQ9vo5e/87.NDsgyTgNpgcSSgdZzE.';

export const getAppointmentsByRut = async (rut: string) => {
  try {
    const response = await axios.get(baseUrl, {
      headers: {
        'X-ACCESS-KEY': accessKey,
      },
    });

    const { record }: ApiResponseAppointments = response.data;
    const patientAppointments: Appointment[] = [];
    const currentDate = new Date();

    for (const appointment of record.appointments) {
      if (appointment.patientRut === rut) {
        appointment.created_at = new Date(appointment.created_at);
        appointment.day = new Date(appointment.day);
        if (appointment.day >= currentDate) {
          patientAppointments.push(appointment);
        }
      }
    }

    const sortedPatientAppointments = patientAppointments.sort(
      (a, b) => new Date(a.day).getTime() - new Date(b.day).getTime(),
    );

    return sortedPatientAppointments;
  } catch (error) {
    console.log(error);
  }
};
