import { useNavigate } from 'react-router-dom';

interface NavigateButtonProps {
  route: string;
  children: React.ReactNode;
}

export const NavigateButton = ({ route, children }: NavigateButtonProps) => {
  const navigate = useNavigate();
  return <div onClick={() => navigate(route)}>{children}</div>;
};
