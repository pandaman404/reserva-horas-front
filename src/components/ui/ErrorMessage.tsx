interface ErrorMessageProps {
  text: string;
}

export const ErrorMessage = ({ text }: ErrorMessageProps) => {
  return <span className='text-error'>{text}</span>;
};
