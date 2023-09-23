import React from 'react'

export default function SeeMore() {
    function Seemore() {
        document.getElementsByClassName('RollBack_Button')[0].style.display = 'flex'
        document.getElementsByClassName('SeeMore_Button')[0].style.display = 'none'
        document.getElementsByClassName('Skill_Outline')[0].style.height = '173vh'
        setTimeout(() => {
            document.getElementsByClassName('Skill_Outline')[0].style.height = 'auto'
        }, 1200);
    }
    function RollBack() {
        document.getElementsByClassName('RollBack_Button')[0].style.display = 'none'
        document.getElementsByClassName('SeeMore_Button')[0].style.display = 'flex'
        var element = document.querySelector('.Skill_Outline');
        var computedStyle = window.getComputedStyle(element);
        var heightInPx = computedStyle.getPropertyValue('height');
        var viewportHeight = (parseFloat(heightInPx) / window.innerHeight) * 100;
        console.log('Height in vh:', viewportHeight + 'vh');
        document.getElementsByClassName('Skill_Outline')[0].style.height = viewportHeight + 'vh'
        var num = viewportHeight
        var cle = setInterval(() => {
            if (num < 76) {
                clearInterval(cle)
            }
            else {
                console.log(num)
                num = num - 3
                document.getElementsByClassName('Skill_Outline')[0].style.height = num + 'vh'
            }
        }, 1);
    }
  return (
    <div className='SeeMore_OutLine'>
      <button className='SeeMore_Button' onClick={Seemore}>
        See More
      </button>
      <button className='RollBack_Button' onClick={RollBack}>
        Roll Back
      </button>
    </div>
  )
}
