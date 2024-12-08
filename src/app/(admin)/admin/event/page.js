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

export default function Event() {
    const eventdata = [
        {
          title:"Basant",
          description:"Kight flying",
          location:"Lahore",
          thumbnail:"https://images.unsplash.com/photo-1732640452152-8cca8e1d68ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNjB8fHxlbnwwfHx8fHw%3D",
           date: new Date().toLocaleDateString()
        },
        {
          title:"Cycling",
          description:"cycling event",
          location:"Lahore",
          thumbnail:"https://images.unsplash.com/photo-1732640452152-8cca8e1d68ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNjB8fHxlbnwwfHx8fHw%3D",
           date:"8-12-2024"
        },
        {
          title:"Basant",
          description:"Kight flying",
          location:"Lahore",
          thumbnail:"https://images.unsplash.com/photo-1732640452152-8cca8e1d68ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNjB8fHxlbnwwfHx8fHw%3D",
           date:"25-12-2024"
        },
    ]




  return (
    <div className="min-h-screen">
    <Table>
      <TableCaption>A list of your recent Users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Profile</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Location</TableHead>
          <TableHead className="text-right">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {eventdata.map((invoice) => (
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
            <TableCell>{invoice.location}</TableCell>
            <TableCell className="text-right">{invoice.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  )
}
