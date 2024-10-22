import LinkedinImage from "../../assets/images/linkedin-image/linkedin.png"

const Linkedin = () => {
    return (
        <>
            <div className="linkedin-banner p-3 rounded-lg">
                <div className="profile-part flex items-center justify-between mb-3">
                    <div className="profile flex items-center">
                        <div className="profile-image p-7 border-2 rounded-full inline-block bg-[#9ca3af]"></div>
                        <p className="font-bold ps-2">Nilesh</p>
                    </div>
                    <div className="close">
                        <a href="#"><i className="fa-solid fa-ellipsis text-[20px]"></i></a>
                        <a href="#" className="ms-3"><i className="fa-solid fa-xmark text-[20px]"></i></a>
                    </div>
                </div>
                <div className="discription">
                    <p className="text-[#232323]">🌟 Thrilled to be Recognized as Best Performer of the Month for September! 🌟 I am truly honored to receive the Best Performer of the Month award at Red & White Education Private Limited! 🎉 This recognition is not just a personal achievement but a testament to the incredible teamwork and collaboration within our organization. 🤝<span className="ps-2 text-[#be7975] cursor-pointer">...more</span></p>
                    <img src={LinkedinImage} alt="" />
                </div>
            </div>
        </>
    )

}

export default Linkedin