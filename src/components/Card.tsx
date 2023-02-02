import React, { FC, useState } from "react"
import { Info } from "../interfaces"

interface Props {
  info: Info
}
const Card: FC<Props> = ({ info }) => {
  const [open, setOpen] = useState<Boolean>(true)
  return (
    <div className='bg-white w-full m-2 rounded-2xl p-10 flex flex-col items-center'>
      <div className='flex w-full justify-around items-center'>
        <p className='w-1/5'>{info.username}</p>
        <div className='flex flex-col w-1/5'>
          <p className='font-extrabold'>Contact:</p>
          <p className='font-light'>{info.name}</p>
        </div>
        <div className='flex flex-col w-1/5'>
          <p className='font-extrabold'>Street:</p>
          <p className='font-light'>{info.address.street}</p>
        </div>
        <div className='flex flex-col w-1/5'>
          <p className='font-extrabold'>City:</p>
          <p className='font-light'>{info.address.city}</p>
        </div>
        <button
          className='w-1/5 btn btn-outline btn-secondary'
          onClick={() => setOpen(!open)}
        >
          {open ? "View Details" : "Hide Details"}
        </button>
      </div>
      {!open && (
        <>
          <div className='w-full flex flex-col  mt-4'>
            <div className='flex flex-col w-full p-4'>
              <p className='font-extrabold'>Catch Phrase:</p>
              <p className='font-light'>{info.company.catchPhrase}</p>
            </div>
            <div className='w-full flex flex-wrap mt-2'>
              <div className='flex flex-col w-1/2 p-4'>
                <p className='font-extrabold'>Address:</p>
                <p className='font-light'>{info.address.street}</p>
              </div>

              <div className='flex flex-col w-1/2 p-4'>
                <p className='font-extrabold'>Company:</p>
                <p className='font-light'>{info.company.name}</p>
              </div>

              <div className='flex flex-col w-1/2 p-4'>
                <p className='font-extrabold'>City:</p>
                <p className='font-light'>{info.address.city}</p>
              </div>

              <div className='flex flex-col w-1/2 p-4'>
                <p className='font-extrabold'>Contact Person:</p>
                <p className='font-light'>{info.name}</p>
              </div>

              <div className='flex flex-col w-1/2 p-4'>
                <p className='font-extrabold'>Emails:</p>
                <p className='font-light'>{info.email}</p>
              </div>

              <div className='flex flex-col w-1/2 p-4'>
                <p className='font-extrabold'>Zipcode:</p>
                <p className='font-light'>{info.address.zipcode}</p>
              </div>

              <div className='flex flex-col w-1/2 p-4'>
                <p className='font-extrabold'>Website:</p>
                <p className='font-light'>{info.website}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Card
