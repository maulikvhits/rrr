import { Box } from '@mui/material'
import React from 'react'
import { Button } from 'react-bootstrap'



export default function PrimaryButton(props) {
  return (
    <>
      <Box className='primary-btn-main'>
        <Button className={props.className} onClick={props.onClick}>{props.btnLabel}</Button>
      </Box>


      {/* use this button like below demo */}
      {/* <PrimaryButton btnLabel="View Button"/> */}
    </>
  )
}