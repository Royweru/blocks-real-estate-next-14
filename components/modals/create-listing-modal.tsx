"use client"
import React from 'react'
import { Modal } from '../ui/modal'
import useCreateListingModal from '@/hooks/use-create-listing-modal'


export const CreateListingModal = () => {
  const {isOpen,onClose}= useCreateListingModal()
  return ( 
    <Modal
      isOpen={isOpen}
      onChange={onClose}
      title='Hey there ,this is the first step to creating your own listing'
      description=' We are more than glad that oyu decided to be part of our esteemed team. We will take you through a llist of steps needed to succed in your steps to becoming an owner and shareholder in the this great team'
    >
       <div className=' w-full inset-0 overflow-hidden flex flex-col gap-y-4'>
         body and children
       </div>
    </Modal>
  )
}
