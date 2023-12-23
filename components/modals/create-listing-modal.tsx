"use client"
import React from 'react'
import { Dialog,
  DialogHeader,
  DialogFooter,
  DialogDescription,
  DialogContent, 
  DialogTitle 
} from '../ui/dialog'
import useCreateListingModal from '@/hooks/use-create-listing-modal'


export const CreateListingModal = () => {
  const {isOpen,onClose}= useCreateListingModal()
  return ( 
    <Dialog open={isOpen} onOpenChange={onClose}>
         <DialogContent className=' inset-0 p-o bg-gray-200'>
           <DialogHeader>
             <DialogTitle className=' text-xl font-bold text-black'>
               This is the create listing dialog welcome!
             </DialogTitle>
             <DialogDescription>
               Make sure you are alive
             </DialogDescription>
           </DialogHeader>
           This is the body!
         </DialogContent>
    </Dialog>
  )
}
