import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import PropTypes from 'prop-types';

export default function Preview(props) {
  const refcomponent = useRef();
  const handlePrint = useReactToPrint({
    content: () => refcomponent.current,
  });
  return (
    <>
    <div className="w-1/2 flex flex-col justify-center items-center">
      <div ref={refcomponent} className="w-a4 h-a4">
        <div  className="bg-gray-100 font-sans ">
        <div  className="container mx-auto py-8 px-4">
            <div  className="bg-white p-6 rounded-lg shadow-lg">
                <h1  className="text-3xl font-semibold">{props.Data.FirstName?props.Data.FirstName:"John"} {props.Data.LastName?props.Data.LastName:"Rhodes"}</h1>
                <p  className="text-gray-600">{props.Data.Position?props.Data.Position:"Web Developer"}</p>

                <hr  className="my-4"/>

                <h2  className="text-xl font-semibold mb-2">Summary</h2>
                <p  className="text-gray-700">Experienced web developer with a passion for creating responsive and user-friendly
                    websites. Proficient in HTML, CSS, JavaScript, and various web development frameworks.</p>
              {/* Experience */}
                <h2  className="text-xl font-semibold mt-4 mb-2">Experience</h2>
                <div  className="mb-4">
                    <h3  className="text-lg font-semibold">{props.Data.Position?props.Data.Position:"Web Developer"}, {props.Data.Company?props.Data.Company:"ABC Company"}</h3>
                    <p  className="text-gray-700">Developed and maintained company website, implementing responsive design and
                        optimizing performance. Collaborated with the design team to create visually appealing web pages.
                    </p>
                    <p  className="text-gray-600">{props.Data.jobstartdate?props.Data.jobstartdate:"06-07-2020 - "} {props.Data.jobenddate?props.Data.jobenddate:"Current"}</p>
                </div>
              {/* Education */}
                <h2  className="text-xl font-semibold mt-4 mb-2">Education</h2>
                <div  className="mb-4">
                    <h3  className="text-lg font-semibold">{props.Data.Course?props.Data.Course:"Degree Name"}</h3>
                    <p  className="text-gray-700">{props.Data.schoolname?props.Data.schoolname:"University Name"}</p>
                    <p  className="text-gray-600">{props.Data.startDatescl?props.Data.startDatescl:"06-07-2020 - "}{props.Data.endDatescl?props.Data.endDatescl:"06-07-2024"}</p>
                </div>

                <h2  className="text-xl font-semibold mt-4 mb-2">Contact</h2>
                <ul  className="list-disc list-inside text-gray-700">
                    <li>{props.Data.email?props.Data.email:"abc@gmail.com"}</li>
                    <li>{props.Data.PhoneNumber?props.Data.PhoneNumber:"+91 834897385"}</li>
                </ul>
            </div>
        </div>

        </div>
      </div>
        <button
          className=" m-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
    </>
  );
}


Preview.propTypes = {
  FirstName: PropTypes.string,
  LastName: PropTypes.string,
  PhoneNumer: PropTypes.number,
  email: PropTypes.string,
  schoolname: PropTypes.string,
  Course: PropTypes.string,
  Field: PropTypes.string,
  startDatescl: PropTypes.string,
  endDatescl: PropTypes.string,
}