import umbrella from '../assets/umbrella.svg';

interface LogoUmbrellaProps {
    size?: number;
}

const UmbrellaIcon = ({ size = 40 }: LogoUmbrellaProps) => {
    return <img src={umbrella} alt='Umbrella' height={size} width={size} />;
};

export default UmbrellaIcon;
