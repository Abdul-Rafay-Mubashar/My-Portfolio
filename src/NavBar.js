import React from 'react'

export default function NavBar() {
    function to_reload(){
        window.location.reload()
    }
    var option_array = [{ name: 'Home', id: 'Portfolio' }, { name: 'About', id: 'AboutMe' }, { name: 'Skills', id: 'Skills' }, { name: 'Project', id: 'Projects' }, { name: 'Contact', id: 'ContactMe' }]
    function LineOff(index) {
        document.getElementsByClassName('Option_Box_underline')[index].style.width = '0%'
    }
    function Line(index) {
        document.getElementsByClassName('Option_Box_underline')[index].style.width = '40%'
    }
    function Title_Function(a) {
        document.title = 'Abdul Rafay | ' + a
    }
    var i = 0;
    const NaveBar_Button_Function = () => {
        // setTimeout(() => {
        //     document.getElementsByClassName('NavBar_Botton')[0].style.backgroundColor='#FF1C4F'
        // }, 1500);
        if (i === 0) {
            document.getElementsByClassName('Mobile_MenuBar')[0].style.width = '75vw'
            var j = 0;
            while (j < 5) {
                document.getElementsByClassName('Mobile_MenuBar_Option')[j].style.display = 'flex'
                j++
            }
            i = 1
        }
        else if (i === 1) {

            var t = 0;
            while (t < 5) {
                document.getElementsByClassName('Mobile_MenuBar_Option')[t].style.display = 'none'
                t++
            }
            document.getElementsByClassName('Mobile_MenuBar')[0].style.width = '0vw'
            i = 0
        }
    }
    return (
        <>
            <div className='Header_Outline'>
                <div className='Header_Logo' >
                    <a href='https://abdul-rafay-mubashar.github.io/My-Portfolio/' className='Logo_Capital'onClick={to_reload}>
                        R
                    </a>
                    <a href='https://abdul-rafay-mubashar.github.io/My-Portfolio/' className='Logo_Small'onClick={to_reload}>
                        afay
                    </a>
                </div>
                <div className='Header_Option_Section'>
                    <button className='NavBar_Botton' onClick={NaveBar_Button_Function}>
                        <img src='https://cdn-icons-png.flaticon.com/512/56/56763.png' className='NavBar_Button_Pic' alt='Pic' />
                    </button>
                    <div className='Header_Option_Inside'>
                        <div className='Header_Options_Bar'>
                            {option_array.map((name, index) => {
                                return (
                                    <a href={'#' + name.id} className='Option_Box' onMouseOver={() => Line(index)} onMouseLeave={() => LineOff(index)} onClick={() => { Title_Function(name.id) }}>
                                        {name.name}
                                        <div className='Option_Box_underline'>

                                        </div>
                                    </a>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='Header_Outline1'>

            </div>
            <div className='Mobile_MenuBar'>
                <a className='Mobile_MenuBar_Option' href='#Portfolio'>
                    Home
                </a>
                <a className='Mobile_MenuBar_Option' href='#AboutMe'>
                    About
                </a>
                <a className='Mobile_MenuBar_Option' href='#Skills'>
                    Skills
                </a>
                <a className='Mobile_MenuBar_Option' href='#Project'>
                    Project
                </a>
                <a className='Mobile_MenuBar_Option' href='#ContactMe'>
                    Contact
                </a>
            </div>
        </>
    )
}