import React, { useState, useEffect } from 'react';
import "./ReadAdmins.css";

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcBusinesswoman, FcBusinessman } from 'react-icons/fc';
import axios from '../../api'


function ReadAdmins() {
  const [backAdminsData, setBackAdminsData] = useState([])
  const [eyeOpen, setEyeOpen] = useState(false)
  useEffect(() => {
    axios.get('/admins')
      .then(res => {
        setBackAdminsData(res.data?.innerData)
      })
      .catch(err => console.log(err))
  }, []);

  const deleteAdmin = (adminId) => {
    axios.delete(`admins/${adminId}`)
      .then(res => {

      })
      .catch(err => console.log(err))
  }

  const optional = () => {
    setEyeOpen(e => !e)
  }
  return (
    <div className='readadmins_container'>
      <h2 className='readadmins_container_title'>Adminlar ro'yxati</h2>
      <div className="readadmins_gridcont">
        {
          backAdminsData.map((item) => <div key={item?._id} className="admins_card">
            <div className="admin_imgcont">
              {
                item?.gender === "male" ? <FcBusinessman /> : <FcBusinesswoman />
              }
            </div>
            <p className='admins_name'>{item?.firstname} {item?.lastname}</p>
            <div className='admins_collection'>
              <div className="admins_item">Yoshi:    <i> {item?.age} yosh</i></div>
              <div className="admins_item">Jinsi:    <i> {item?.gender === "male" ? 'Erkak' : "Ayol"}</i></div>
              <div className="admins_item">Telefon:  <i> +{item.phoneNumber}</i></div>
              <div className="admins_item">Username: <i>{eyeOpen ? item?.username : <b>########</b>}  </i></div>
              <div className="admins_item">Password: <i>{eyeOpen ? item?.password : <b>########</b>}  </i></div>

              <button onClick={optional}>{
                eyeOpen ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
              }</button>
            </div>

            <div className="controls_btn">
              <button onClick={() => deleteAdmin(item?._id)} >Delete</button>
              <button >Update</button>
            </div>
          </div>)
        }
      </div>
    </div >
  )
}

export default ReadAdmins