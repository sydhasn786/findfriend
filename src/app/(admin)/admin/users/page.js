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

export default function Users() {
    const userdata = [
        {
          fullname:"Syed Ali Hasan",
          email:"sydhasn786@gmail.com ",
          location:"Lahore",
          profileImage:"https://images.unsplash.com/photo-1728327511538-e9624254ed84?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
          events:"5"
        },
        {
            fullname:"Syed Ali Hasan",
            email:"sydhasn786@gmail.com ",
            location:"Lahore",
            profileImage:"https://images.unsplash.com/photo-1728327511538-e9624254ed84?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
            events:"5"
          },
          {
            fullname:"Syed Ali Hasan",
            email:"sydhasn786@gmail.com ",
            location:"Lahore",
            profileImage:"https://images.unsplash.com/photo-1728327511538-e9624254ed84?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
            events:"5"
          },
          {
            fullname:"Syed Ali Hasan",
            email:"sydhasn786@gmail.com ",
            location:"Lahore",
            profileImage:"https://images.unsplash.com/photo-1728327511538-e9624254ed84?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
            events:"5"
          },
    ]




  return (
    <div className="min-h-screen">
    <Table>
      <TableCaption>A list of your recent Users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Profile</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Location</TableHead>
          <TableHead className="text-right">Events</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {userdata.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="text-center">
                <Image
                src={invoice.profileImage}
                width={40}
                height={40}
                className="rounded-md"
                />
            </TableCell>
            <TableCell className="font-medium">{invoice.fullname}</TableCell>
            <TableCell>{invoice.email}</TableCell>
            <TableCell>{invoice.location}</TableCell>
            <TableCell className="text-right">{invoice.events}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  )
}
