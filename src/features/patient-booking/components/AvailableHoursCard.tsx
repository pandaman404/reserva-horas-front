import { Appointment } from '@/@types/booking';

interface AvailableHoursCardProps extends Appointment {
  handleSelectedAppointment: (data: Partial<Appointment>) => void;
}

export const AvailableHoursCard = ({
  doctorName,
  doctorImage,
  area,
  medicalCenter,
  day,
  availableHours,
  handleSelectedAppointment,
}: AvailableHoursCardProps) => {
  console.log(availableHours);
  return (
    <article className='grid grid-cols-2 place-items-center border-b border-gray-300 py-5'>
      <div className='col-span-2 mb-5 flex flex-col items-center md:col-span-1 md:mb-0'>
        <div className='avatar mb-2'>
          <div className='w-24 rounded-full ring ring-gray-300 ring-offset-2 ring-offset-base-100'>
            <img src={doctorImage} alt={doctorName} />
          </div>
        </div>
        <h4 className='font-semibold'>Dr. {doctorName}</h4>
        <h5>{area}</h5>
      </div>
      <div className='col-span-2 flex w-full flex-col gap-2 md:col-span-1 md:col-start-2 md:row-start-1'>
        {availableHours.map((availableHour: string) => {
          return (
            <button
              key={crypto.randomUUID()}
              className='flex w-full justify-between rounded bg-secondary px-5 py-2 text-base-100'
              onClick={() =>
                handleSelectedAppointment({
                  doctorName,
                  day,
                  selectedHour: availableHour,
                })
              }
            >
              <span>{medicalCenter}</span>
              <span className='font-bold'>{availableHour}</span>
            </button>
          );
        })}
      </div>
    </article>
  );
};
