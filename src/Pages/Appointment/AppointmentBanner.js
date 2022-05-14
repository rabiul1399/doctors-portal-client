import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date, setDate}) => {
    
    return (
        <div   className="hero min-h-screen  bg-hero-local"  >
        <div className="hero-content flex-col lg:flex-row-reverse gap-24 ">
            <img src={chair} className="lg:max-w-md  rounded-lg shadow-2xl" alt=''/>
            <div className='ml-11 shadow-lg'>
               <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}
               
                />   
                
            </div>
        </div>
      

    </div>
    );
};

export default AppointmentBanner;