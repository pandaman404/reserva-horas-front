export interface Doctor {
  id: DoctorId;
  name: {
    first: string;
    last: string;
  };
  image: string;
  specialty: string;
  medicalCenter: string;
}

export type DoctorId = string;
