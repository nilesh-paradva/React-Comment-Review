import { useState } from "react";
import Linkedin from "../linkedin/Linkedin";


const CommentReview = () => {
    const [formData, setFormData] = useState({
        UserName: '',
        message: '',
        select: ''
    });

    const [fieldError, setFieldError] = useState({});
    const [submittedData, setSubmittedData] = useState([]);

    const validateField = (name, value) => {
        const isValid = {
            UserName: /^[A-Za-z ]{2,}$/.test(value),
            message: /^[A-Za-z !@~`$%^&*()_+-{}"':;?>< ]{2,}$/.test(value),
            select: value !== ''
        };

        setFieldError({ ...fieldError, [name]: isValid[name] ? null : <span className="text-red-700 font-semibold">Invalid {name}</span> })
        return isValid[name];
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name, value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValidForm = Object.keys(formData).every(field => validateField(field, formData[field]));

        if (!isValidForm) {
            // console.log("Form not submitted:", formData);
            return alert("Form not submitted")
        }

        const starRating = "⭐".repeat(Number(formData.select)); // icon show
        const randomId = Math.floor(Math.random() * 10); // id store
        const dataToSubmit = { ...formData, select: starRating, Id : randomId};
        setSubmittedData(prev => [...prev, dataToSubmit]);

        setFormData({ UserName: '', message: '', select: '' });
        setFieldError({});
    };


    return (
        <div className="container w-[1320px] mx-auto">
            <div className="w-12/12 flex items-center justify-center py-28">
                <div className="w-6/12">
                    <Linkedin/>
                    <div className="comment-review border-2 p-4 rounded-lg shadow-2xl">
                        {/* <h1 className="text-center font-bold text-3xl mb-4">Comment Review Section</h1> */}
                        <form onSubmit={handleSubmit}>
                            {['UserName', 'message'].map(field => (
                                <div className={`${field} mb-4`} key={field}>
                                    <label htmlFor={field} className="font-bold mb-2 me-2 inline-block">{field}:</label>{fieldError[field]}
                                    {field === 'message' ? (<textarea name={field} className="outline-none border-2 w-full rounded-lg px-3 py-2 resize-none" placeholder={`Enter your ${field.toLowerCase()}`} value={formData[field]} onChange={handleChange} />) : (<input type="text" placeholder={`Enter your ${field.toLowerCase()}`} name={field} className="w-full border-2 px-3 py-2 outline-none rounded-lg" value={formData[field]} onChange={handleChange} />)}
                                </div>
                            ))}
                            <div className="rating mb-4">
                                <label htmlFor="select" className="font-bold mb-2 me-2">Rating:</label>
                                <select name="select" className="outline-none border-2 px-2 py-1 rounded-lg" value={formData.select} onChange={handleChange}>
                                    <option value="">Select</option>
                                    {[1, 2, 3, 4, 5].map(num => (<option key={num} value={num}>{"⭐".repeat(num)}</option>))}
                                </select>
                                {fieldError.select}
                            </div>
                            <div className="btn text-center mt-4">
                                <button type="submit" className="font-bold text-1xl px-3 py-2 rounded-lg bg-blue-700 text-white">Send</button>
                            </div>
                        </form>
                        <div className="submitted-data mt-4">
                            <h2 className="text-xl font-bold">Submitted Comments :-</h2>
                            <ul>
                                {submittedData.map((data, index) => (
                                    <li key = {index} className="border-2 p-2 my-2 rounded-lg font-bold">
                                        <div className="profile-name flex items-center justify-between">
                                            <div className="name-profile flex items-center">
                                                <div className="profile p-5 border-2 inline-block rounded-full bg-gray-400 me-[0.8rem]"></div>
                                                <span>{data.UserName}</span>
                                            </div>
                                            <div className="time-setting flex items-center">
                                                <span className="ps-2 pe-2">{data.Id === 0 ? '1' : data.Id} Hours Ago</span>
                                                <a href="#"><i class="fa-solid fa-ellipsis-vertical"></i></a>
                                            </div>
                                        </div>
                                        <div className="message flex items-center justify-between">
                                            <p className="ps-[3.5rem] text-[#876f6f]">{data.message}</p>
                                            <span>{data.select}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentReview;
