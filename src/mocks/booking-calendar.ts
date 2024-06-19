import { addDays } from 'date-fns';

export const availableDays = [
  addDays(new Date(), 1),
  addDays(new Date(), 2),
  addDays(new Date(), 5),
  addDays(new Date(), 8),
];

export const appointments = [
  {
    doctorName: 'Rebecca Chambers',
    doctorImage:
      'https://thatarklayplace.com/wp-content/uploads/2020/11/RebeccaChambers_Vendetta.jpg',
    area: 'Medicina General',
    medicalCenter: 'Hospital Raccoon City',
    day: addDays(new Date(), 1),
    availableHours: ['10:20', '16:00'],
    selectedHour: null,
  },
  {
    doctorName: 'William Birkin',
    doctorImage:
      'https://www.residentevildatabase.com/wp-content/uploads/2023/12/william-birkin.jpg',
    area: 'Medicina General',
    medicalCenter: 'Hospital Raccoon City',
    day: addDays(new Date(), 1),
    availableHours: ['10:00', '10:20', '10:40', '11:00', '12:50', '15:00'],
    selectedHour: null,
  },
];
