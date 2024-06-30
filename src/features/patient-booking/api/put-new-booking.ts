import { ApiResponseAppointments } from '@/@types/api';
import { Appointment } from '@/@types/appointment';
import axios from 'axios';

const baseUrl = 'https://api.jsonbin.io/v3/b/667c72caacd3cb34a85dcf2c';
const masterKey = '$2a$10$uirhBw.OxktSVeu.802TgeSz9wL3NAKxGrhoe16CjLnWMMATf7aZi';
const accessKey = '$2a$10$I.9CISo2jcSdHsEA7d3dgeoAQ9vo5e/87.NDsgyTgNpgcSSgdZzE.';

export const putNewBooking = async (newBooking: Appointment) => {
  try {
    const response = await axios.get(baseUrl, {
      headers: {
        'X-ACCESS-KEY': accessKey,
      },
    });

    const { record }: ApiResponseAppointments = response.data;

    const availableAppointmentIndex: number = record.appointments.findIndex(
      (appointment) => appointment.available && appointment.id === newBooking.id,
    );

    console.log('availableAppointmentIndex');
    console.log(availableAppointmentIndex);

    if (availableAppointmentIndex === -1) throw new Error('Error realizando reserva');

    const updatedAppointments: Appointment[] = record.appointments;
    updatedAppointments[availableAppointmentIndex] = newBooking;
    updatedAppointments[availableAppointmentIndex].available = false;

    console.log('updatedAppointments');
    console.log(updatedAppointments);

    const response2 = await axios.put(
      baseUrl,
      { appointments: updatedAppointments },
      {
        headers: {
          'X-MASTER-KEY': masterKey,
          'X-ACCESS-KEY': accessKey,
          'Content-Type': 'application/json',
        },
      },
    );

    return response2;
  } catch (error) {
    console.log(error);
  }
};
