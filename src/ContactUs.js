import React, { useEffect } from 'react'
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {
    const [Email, setEmail] = useState(null)
    const [Name, setName] = useState(null)
    const [Msg, setMsg] = useState(null)
    const [ErrorMsg, setErrorMsg] = useState(null)

    const [Valid, setValid] = useState(null)
    const [Check, setCheck] = useState(null)
    const Email_Validator = (Emails) => {
        console.log(Emails)
        if (Emails === null || Emails === '') {
            return
        }
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        setValid(emailPattern.test(Emails))
        // if (Valid === false || Valid===null) {
        //     setErrorMsg('Invalid Email Formate')
        //     setCheck(1)
        // }
        // else if(Valid === true) {
        //     const templateParams = {
        //         to_name: `${Name} - ${new Date().toLocaleDateString()}`,
        //         from_name: Email,
        //         message: Msg,
        //     };

        //     emailjs.send('service_eq4g9hd', 'template_ji8gk5b', templateParams, 'e3gBqg5QmzwiqLsvu')
        //         .then((result) => {
        //             console.log(result.text);
        //         }, (error) => {
        //             console.log(error.text);
        //             setErrorMsg('Unexpexted Error')
        //             setCheck(1)
        //         });

        //     setErrorMsg('Submitted')
        //     setEmail(null)
        //     setName(null)
        //     setMsg(null)
        //     setCheck(true)
        //     document.getElementsByClassName('Name_Input')[0].value = ''
        //     document.getElementsByClassName('Name_Input')[1].value = ''
        //     document.getElementsByClassName('Msg_Input')[0].value = ''

        // }
        // console.log(ErrorMsg)
    }
    useEffect(()=>{
        if(Valid===null)
        {
            return
        }
        if (Valid === false) {
            setErrorMsg('Invalid Email Formate')
            setCheck(1)
        }
        else if(Valid === true) {
            const templateParams = {
                to_name: `${Name} - ${new Date().toLocaleDateString()}`,
                from_name: Email,
                message: Msg,
            };

            emailjs.send('service_5r8tq5o', 'template_ji8gk5b', templateParams, 'e3gBqg5QmzwiqLsvu')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                    setErrorMsg('Unexpexted Error')
                    setCheck(1)
                });

            setErrorMsg('Submitted')
            setEmail(null)
            setName(null)
            setMsg(null)
            setCheck(true)
            document.getElementsByClassName('Name_Input')[0].value = ''
            document.getElementsByClassName('Name_Input')[1].value = ''
            document.getElementsByClassName('Msg_Input')[0].value = ''

        }
        console.log(ErrorMsg)
    },[Valid])
    function downloadFile() {
        const fileName = 'Rafay`s CV.pdf'; // Replace with your file name
        const filePath = process.env.PUBLIC_URL + '/' + fileName;
        const link = document.createElement('a');

        link.href = filePath;
        link.target = '_blank'; // Opens the file in a new tab (optional)
        link.download = fileName; // Specify the filename for download
        link.click();
    }
    useEffect(() => {
        console.log(ErrorMsg)
        if (ErrorMsg === null) {
            return
        }
        else if (ErrorMsg === 'Invalid Email Formate') {
            console.log(Check)
            setCheck(1)
            setTimeout(() => {
                document.getElementsByClassName('Red_Notification_Outline_Inside')[0].style.opacity=1
            }, 500);
        }
        else if (ErrorMsg === 'Fill All Field') {
            console.log('Reached')
            setCheck(1)
            setTimeout(() => {
                document.getElementsByClassName('Red_Notification_Outline_Inside')[0].style.opacity=1
            }, 500);
        }
        else if (ErrorMsg === 'Submitted') {
            setCheck(0)
            setTimeout(() => {
            document.getElementsByClassName('Green_Notification_Outline_Inside')[0].style.opacity=1
        }, 500);
        }
    }, [ErrorMsg])
    function name(e) {
        document.getElementsByClassName('Name_Input')[0].style.border = 'none'
        setName(e.target.value)
    }
    function email(e) {
        document.getElementsByClassName('Name_Input')[1].style.border = 'none'
        setEmail(e.target.value)
    }
    function msg(e) {
        document.getElementsByClassName('Msg_Input')[0].style.border = 'none'
        setMsg(e.target.value)
    }
    function Red(){
        setTimeout(() => {

        document.getElementsByClassName('Red_Notification_Outline_Inside')[0].style.opacity=0
    }, 500);
    setTimeout(() => {

        setCheck(null)
        setErrorMsg(null)
    }, 1000);

    }
    function Green(){
        setTimeout(() => {

        document.getElementsByClassName('Green_Notification_Outline_Inside')[0].style.opacity=0
    }, 500);
    setTimeout(() => {

        setCheck(null)
        setErrorMsg(null)
    }, 1500);

    }
    function submit() {
        // setCheck(null)
        // setErrorMsg(null)
        if ((Email === null || Name === null || Msg === null) || (Email === '' || Name === '' || Msg === '')) {
            setErrorMsg('Fill All Field')
            console.log(Msg, Name, Email)
            // setCheck(false)
            console.log(ErrorMsg)
            return
        }
        console.log(Msg, Name, Email)
        Email_Validator(Email)
    }
    return (
        <>
            {Check === 1 ?
                <div className='Green_Notification_Outline'>
                    <div className='Red_Notification_Outline_Inside'>
                        <div className='Green_Notification_Outline_Inside_Part1'>
                            {ErrorMsg}
                        </div>
                        <div className='Green_Notification_Outline_Inside_Part2'>
                            <div className='Green_Notification_Cross'>
                                <div className='Cross_Box' onClick={Red}>
                                    <img className='Cross_Img' alt='Pic' src='https://www.pngmart.com/files/17/Wrong-Cross-PNG-File.png'>

                                    </img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : Check === 0 ?
                    <div className='Green_Notification_Outline'>
                        <div className='Green_Notification_Outline_Inside'>
                            <div className='Green_Notification_Outline_Inside_Part1'>
                                {ErrorMsg}
                            </div>
                            <div className='Green_Notification_Outline_Inside_Part2'>
                                <div className='Green_Notification_Cross'>
                                    <div className='Cross_Box' onClick={Green}>
                                        <img className='Cross_Img' alt='Pic' src='https://www.pngmart.com/files/17/Wrong-Cross-PNG-File.png'>

                                        </img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : null
            }
            {/* <GreenError/> */}

            <div className='ContactUs_Outline' id='ContactMe'>
                <div className='ContactUs_Container'>
                    <div className='ContactUs_Container_Part1'>
                        <div className='AboutMe_Description_Container_Heading'>
                            Contact Me
                        </div>
                        <div className='Email_Bar'>
                            <div className='Email_Pic'>
                                <img src='https://cdn-icons-png.flaticon.com/512/60/60543.png' className='Email' alt='Pic' />
                            </div>
                            <div className='Email_Content'>
                                Rafayabdul9888@gmail.com
                            </div>
                        </div>
                        <div className='Email_Bar'>
                            <div className='Email_Pic'>
                                <img src='https://icon-library.com/images/call-icon-png/call-icon-png-3.jpg' className='Email' alt='Pic' />

                            </div>
                            <div className='Email_Content'>
                                +92 333 4755884
                            </div>
                        </div>
                        <div className='SocialMedia_Container'>
                            <a className='Logo_Shape' href='https://www.linkedin.com/in/abdul-rafay-46a749269/'>
                                <img src='https://cdn-icons-png.flaticon.com/512/61/61109.png' alt='Pic' className='Logos'></img>
                            </a>
                            <a className='Logo_Shape' href='https://github.com/Abdul-Rafay-Mubashar'>
                                <img src='https://cdn-icons-png.flaticon.com/512/38/38401.png' alt='Pic' className='Logos'></img>
                            </a>
                            <a className='Logo_Shape' href='https://www.instagram.com/rafay201/'>
                                <img src='https://www.svgrepo.com/show/364604/instagram-logo-fill.svg' alt='Pic' className='Logos'></img>
                            </a>
                            <a className='Logo_Shape' href='https://www.facebook.com/profile.php?id=100007258696606&mibextid=ZbWKwL'>
                                <img src='https://cdn-icons-png.flaticon.com/512/20/20673.png' alt='Pic' className='Logos'></img>
                            </a>
                        </div>
                        <div className='DownLoad_CV_Outline'>
                            <button className='SeeMore_Button1' onClick={downloadFile}>
                                DownLoad CV
                            </button>
                        </div>
                    </div>
                    <div className='ContactUs_Container_Part2'>
                        <div className='Name_Outline'>
                            <input type='text' className='Name_Input' placeholder='Your Name' onChange={name} />
                            {/* <p>This Field Is Compulsory</p> */}
                        </div>
                        <div className='Email_Outline'>
                            <input type='text' className='Name_Input' placeholder='Your Email' onChange={email} />
                        </div>
                        <div className='Msg_Outline'>
                            <textarea className='Msg_Input' placeholder='Your Message' onChange={msg} />
                        </div>
                        <div className='Submit_OutLine'>
                            <button className='SeeMore_Button1' onClick={submit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
