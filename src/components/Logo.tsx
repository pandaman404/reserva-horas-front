import UmbrellaIcon from './UmbrellaIcon';

const Logo = () => {
    return (
        <div className='font-logo flex max-w-fit gap-1 pt-10 text-white'>
            <UmbrellaIcon />
            <div className='flex flex-col tracking-wide'>
                <span className='text-lg leading-none'>Spencer Memorial</span>
                <span className='text-xl leading-none'>Hospital</span>
            </div>
        </div>
    );
};

export default Logo;
