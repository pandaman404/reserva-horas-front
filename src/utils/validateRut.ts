import { Rut } from '@/@types/user';

const REGEX = /^[0-9]{7,9}-[0-9kK]{1}$/; // Formato rut 11111111-1
const SERIE = [2, 3, 4, 5, 6, 7];

function confirmRutIsValid(rut: Rut): boolean {
  if (!REGEX.test(rut)) {
    return false;
  }
  return validateVerificationDigit(rut);
}

function validateVerificationDigit(rut: Rut): boolean {
  const rutPart1: string[] = rut.split('-')[0].split('').reverse();
  const rutPart2: string = rut.split('-')[1].toUpperCase();

  let i = 0;
  let sum = 0;
  while (i <= rutPart1.length - 1) {
    if (i >= SERIE.length) {
      sum += Number(rutPart1[i]) * Number(SERIE[i % SERIE.length]);
    } else {
      sum += Number(rutPart1[i]) * Number(SERIE[i]);
    }
    i++;
  }

  const result = Math.trunc(sum / 11) * 11;
  let verificationDigit: number | string = 11 - Math.abs(sum - result);

  if (verificationDigit === 11) {
    verificationDigit = 0;
  }
  if (verificationDigit === 10) {
    verificationDigit = 'K';
  }

  return rutPart2 === verificationDigit.toString();
}

export function validateRutFormat(rut: string): boolean | string {
  return (
    confirmRutIsValid(rut) ||
    'Porfavor ingrese un rut válido con formato 11111111-1'
  );
}
