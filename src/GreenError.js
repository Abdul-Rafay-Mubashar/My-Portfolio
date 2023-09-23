import React from 'react'

export default function GreenError(props) {
  return (
    <div className='Green_Notification_Outline'>
        <div className='Green_Notification_Outline_Inside'>
            <div className='Green_Notification_Outline_Inside_Part1'>
                {props.msg}
            </div>
            <div className='Green_Notification_Outline_Inside_Part2'>
                <div className='Green_Notification_Cross'>
                    <div className='Cross_Box'>
                        <img className='Cross_Img'alt='Pic' src='https://www.pngmart.com/files/17/Wrong-Cross-PNG-File.png'>
                        
                        </img>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
