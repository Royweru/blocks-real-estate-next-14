import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './dialog'


interface ModalProps{
    title?:string,
    description?:string,
    isOpen:boolean,
    onChange:()=>void,
    children:React.ReactNode
}
export const Modal:React.FC<ModalProps> = ({
    title,
    description,
    isOpen,
    onChange,
    children
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
        <DialogContent>
            <DialogHeader className=' flex flex-col gap-y-3'>
                <DialogTitle className=' font-bold text-xl font-mono text-emerald-500'>
                  {title}
                </DialogTitle>
                <DialogDescription className=' text-neutral-400 font-medium text-sm'>
                    {description}
                </DialogDescription>
            </DialogHeader>
            {children}
        </DialogContent>
    </Dialog>
  )
}
