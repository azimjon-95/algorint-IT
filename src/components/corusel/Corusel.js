import React from 'react'
import './style.css'
import { data } from '../../utils/CarouselData'

const Corusel = () => {
    return (
        <div>
            <div data-aos="fade-up" className="onlinekurs">
                <p>Video materiallar</p>
                <div className="div_kurslar">
                    {
                        data?.map((value, inx) => {
                            return (
                                <div key={inx} data-aos="fade-up" className="online_kurs"
                                    style={{ backgroundImage: `url(${value.img})` }}
                                >
                                    <a className='video_link' href={value?.link}>
                                        {value?.title}
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default Corusel
