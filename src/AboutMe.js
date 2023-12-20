import React from 'react'

export default function AboutMe() {
    function Experience() {
        document.getElementsByClassName('AboutMe_Option_Box_underline2')[0].style.width = '55%'
        document.getElementsByClassName('AboutMe_Option_Box_underline1')[0].style.width = '0%'
        document.getElementsByClassName('Education_Box')[0].style.display='none'
        document.getElementsByClassName('Experience_Box')[0].style.display='block'
        var i=0.1;
        var cle=setInterval(() => {
            document.getElementsByClassName('Experience_Box')[0].style.opacity=i
            i=i+0.1
            console.log(i)

            if(i>1){
                clearInterval(cle)
            }
        }, 100);
        document.getElementsByClassName('Education_Box')[0].style.opacity='0'
    }
    function Education() {
        document.getElementsByClassName('AboutMe_Option_Box_underline2')[0].style.width = '0%'
        document.getElementsByClassName('AboutMe_Option_Box_underline1')[0].style.width = '55%'
        document.getElementsByClassName('Experience_Box')[0].style.display='none'
        document.getElementsByClassName('Education_Box')[0].style.display='block'
        // document.getElementsByClassName('Education_Box')[0].style.opacity='1'
        var i=0.1
        var cle=setInterval(() => {
            document.getElementsByClassName('Education_Box')[0].style.opacity=i
            i=i+0.1
            console.log(i)
            if(i>1){
                console.log('Ok')
                clearInterval(cle)
            }
        }, 100);
        document.getElementsByClassName('Experience_Box')[0].style.opacity='0'

    }

    return (
        <div className='AboutMe_Outline' id='AboutMe'>
            <div className='AboutMe_Outline_Part1'>
                <div className='AboutMe_Pic_Faram'>

                </div>
            </div>
            <div className='AboutMe_Outline_Part2'>
                <div className='AboutMe_Description_Container'>
                    <div className='AboutMe_Description_Container_Heading'>
                        About Me
                    </div>
                    <div className='About_Description'>
                        I am an enthusiastic, self-motivated, reliable,
                        responsible and hard working person. I am a mature
                        team worker and adaptable to all challenging
                        situations. I am able to work well both in a team
                        environment as well as using own initiative
                    </div>
                    <div className='AboutMe_Option_Bar'>
                        <div className='About_Option_Box' onClick={Education} >
                            Education
                            <div className='AboutMe_Option_Box_underline1'>

                            </div>
                        </div>
                        <div className='About_Option_Box' onClick={Experience} >
                            Experience
                            <div className='AboutMe_Option_Box_underline2'>

                            </div>
                        </div>
                    </div>
                    <div className='Education_And_Experience_Box'>
                        <div className='Education_Box'>
                            <div className='Education_Heading'>
                                BS-Software Engineering
                            </div>
                            <div className='Education_Discription'>
                                University Of Management And Technology
                            </div>
                            <div className='Education_Period'>

                            </div>
                            <div className='Education_Heading'>
                                Intermediate
                            </div>
                            <div className='Education_Discription'>
                                Forman Christian College
                            </div>
                            <div className='Education_Period'>

                            </div>
                            <div className='Education_Heading'>
                                Matric
                            </div>
                            <div className='Education_Discription'>
                                Cathedral High School
                            </div>
                            <div className='Education_Period'>

                            </div>
                        </div>
                        <div className='Experience_Box'>
                        <div className='Education_Heading'>
                                Mern Web Developer
                            </div>
                            <div className='Education_Discription'>
                                6 Months Of Experience
                            </div>
                            <div className='Education_Period'>
                                
                            </div>
                            <div className='Education_Heading'>
                                React Front End Web Developer
                            </div>
                            <div className='Education_Discription'>
                                1 Year Of Experience
                            </div>
                            <div className='Education_Period'>

                            </div>
                            <div className='Education_Heading'>
                                C++ Programmer
                            </div>
                            <div className='Education_Discription'>
                                2.5 Years Of Experience
                            </div>
                            <div className='Education_Period'>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
