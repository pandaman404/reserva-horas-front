import { v4 as uuidv4 } from 'uuid';

interface AvailableHoursCardProps {
  doctorName: string;
  doctorImage: string;
  area: string;
  medicalCenter: string;
  day: Date;
  hours: string[];
  handleSelectedAppointment: (data: any) => void;
}

export const AvailableHoursCard = ({
  doctorName,
  doctorImage,
  area,
  medicalCenter,
  day,
  hours,
  handleSelectedAppointment,
}: AvailableHoursCardProps) => {
  return (
    <article className='grid grid-cols-2 place-items-center border-b border-gray-300 py-5'>
      <div className='col-span-2 mb-5 flex flex-col items-center md:col-span-1 md:mb-0'>
        <div className='avatar'>
          <div className='w-24 rounded-full ring ring-gray-300 ring-offset-2 ring-offset-base-100'>
            <img src={doctorImage} alt={doctorName} />
          </div>
        </div>
        <h4 className='font-semibold'>Dr.{doctorName}</h4>
        <h5>{area}</h5>
      </div>
      <div className='col-span-2 flex w-full flex-col gap-2 md:col-span-1 md:col-start-2 md:row-start-1'>
        {hours.map((hour: string) => {
          return (
            <button
              key={uuidv4()}
              className='flex w-full justify-between rounded bg-[#009FE3] px-5 py-2 text-base-100'
              onClick={() =>
                handleSelectedAppointment({ doctor: doctorName, day, hour })
              }
            >
              <span>{medicalCenter}</span>
              <span className='font-bold'>{hour}</span>
            </button>
          );
        })}
      </div>
    </article>
  );
};
