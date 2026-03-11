
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import Step_1_Form_Component from '../components/Step_1_Form_Component';
import Step_2_Form_Component from '../components/Step_2_Form_Component';
import Step_3_Form_Component from '../components/Step_3_Form_Component';
import Step_4_Form_Component from '../components/Step_4_Form_Component';

export const HireFlow = () => {
    return (
        <>
            {/* HireFlow Heading */}
            <div className="m-10 flex flex-col gap-4 items-center justify-center">
                <h1 className="text-3xl font-medium text-blue-800">HireFlow Form</h1>
                <p className="text-sm font-medium text-blue-900">Fill the HireFlow Form to get Hired.</p>
            </div>

            {/* Navigation Buttons */}
            <div className="m-10 flex gap-4 items-center justify-between">
                <button className="p-2 bg-teal-400 rounded flex items-center">
                    <IoIosArrowBack />
                    Go Back
                </button>
                <button className="p-2 bg-teal-400 rounded flex items-center">
                    Next
                    <IoIosArrowForward />
                </button>
            </div>

            {/* Dynamic Form Steps */}
            <div className='max-w-2xl mx-auto'>
                <Step_1_Form_Component/>
                <Step_2_Form_Component/>
                <Step_3_Form_Component/>
                <Step_4_Form_Component/>
            </div>
        </>
    )
};