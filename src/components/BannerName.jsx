import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const BannerName = () => {
  return (
    <>
    <div className='bannerContent'>
      {<LocationOnOutlinedIcon />}
      <h6>DELIVER TO</h6>
      </div>
      <div className='bannerContent-location'>
      <p>882 Well St, New-York</p> {<ArrowDropDownOutlinedIcon />}
      </div>
    </>
  )
}

export default BannerName