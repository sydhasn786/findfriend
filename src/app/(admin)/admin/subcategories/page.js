import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import Image from 'next/image'
  import { Button } from '@/components/ui/button'
import AddSubCategory from '@/components/AddSubCategory/AddSubCategory'

export default function Categories() {
    const subcategoriesdata = [
        {
          title:"Cricket",
          category:"sports",
          description:"All your spports events",
          thumbnail:"https://images.unsplash.com/photo-1732640452152-8cca8e1d68ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNjB8fHxlbnwwfHx8fHw%3D",
           
        },
        {
            title:"Football",
            category:"sports",
            description:"All your sports events",
            thumbnail:"https://images.unsplash.com/photo-1732640452152-8cca8e1d68ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNjB8fHxlbnwwfHx8fHw%3D",
             
          },
        {
          title:"Badminton",
          description:"Kight flying",
          thumbnail:"https://images.unsplash.com/photo-1732640452152-8cca8e1d68ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNjB8fHxlbnwwfHx8fHw%3D",
        },
    ]




  return (
    <div className="min-h-screen container mx-auto ">

        <div className='flex justify-between'>
            <h1>Sub Categories</h1>
           <AddSubCategory/>

        </div>
    <Table>
      <TableCaption>A list of your recent Users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Thumbnail</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {subcategoriesdata.map((invoice) => (
          <TableRow key={invoice.title}>
            <TableCell className="text-center">
                <Image
                src={invoice.thumbnail}
                width={40}
                height={40}
                className="rounded-md"
                />
            </TableCell>

            <TableCell className="font-medium">{invoice.title}</TableCell>

            <TableCell className="font-medium">{invoice.description}</TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  )
}
