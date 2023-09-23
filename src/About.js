import React, { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    const textElement = document.querySelector('.My_Intro_Box2a');
    const textElement1 = document.querySelector('.My_Intro_Box1a');
    const textElement2 = document.querySelector('.My_Intro_Box3a');

    const resetAnimation = () => {
      textElement.style.animation = 'none';
      textElement1.style.animation = 'none';
      textElement2.style.animation = 'none';

      // Trigger a reflow by accessing offsetHeight
      // const _ = textElement.offsetHeight;
      textElement.style.animation = 'typing 4s steps(11) infinite';
      textElement1.style.animation = 'typing 4s steps(11) infinite';
      textElement2.style.animation = 'typing 4s steps(11) infinite';
    };

    // Start the animation
    resetAnimation();
  }, []);
  return (
    <div className='About_Outline' id='Portfolio'>
      <div className='About_My_Self'>
        <div className='About_My_Self_Box'>
          <div className='Profession_Type'>
              Mern Web Developer
          </div>
          <div className='My_Intro'>
            <div className='My_Intro_Box1'>
              <div className='My_Intro_Box1a'>
                Hi, I`m
              </div>
            </div>
            <div className='For_Space'></div>
            <div className='My_Intro_Box2'>
              <div className='My_Intro_Box2a'>
                Abdul Rafay
              </div>
            </div>
          </div>
          <div className='My_Intro'>
            <div className='My_Intro_Box3'>
              <div className='My_Intro_Box3a'>
                From Pakistan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
