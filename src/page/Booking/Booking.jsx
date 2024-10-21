import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthContextProvider';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import BookingBanner from './BookingBanner';

const Booking = () => {

    const {user} = useContext(AuthContext)

    const {id} = useParams();

    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
        .then(res => res.json())
        .then(data => {
            setDetails(data)
        })
    },[id])

    const handleBookingSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = user?.displayName;
        const email = user?.email;
        const number = form.contactNumber.value;
        const date = form.date.value;
        const title = form.title.value;
        const price = form.price.value;
        const message = form.message.value;
        const booking = {
            serviceId: details._id,
            cutomerName: name,
            email,
            img: details.img,
            contactNumber: number,
            bookingDate: date,
            message: message,
            serviceTitle: title,
            price: price,
        }
        console.log(booking)

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "Booking Data Submitted Successfully",
                    icon: "success"
                  });
            }
        })

    }

    return (
       <div>
         <BookingBanner></BookingBanner>
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
	<form onSubmit={handleBookingSubmit} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1" bis_skin_checked="1">
				<p className="font-medium">Booking Now....</p>
				
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3" bis_skin_checked="1">
				<div className="col-span-full sm:col-span-3" bis_skin_checked="1">
					<label htmlFor="name" className="text-sm">Name</label>
					<input id='name' type="text" name='name' defaultValue={user?.displayName || ""} readOnly placeholder="Your Name" className="input input-bordered w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required />
				</div>
				
				<div className="col-span-full sm:col-span-3" bis_skin_checked="1">
					<label htmlFor="email" className="text-sm">Email</label>
					<input id="email" type="email" name='email' defaultValue={user?.email || ""} readOnly placeholder="carry@gmail.com" className="input input-bordered w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>

				<div className="col-span-full sm:col-span-3" bis_skin_checked="1">
					<label htmlFor="number" className="text-sm">Contact Number</label>
					<input id="number" type="number" name='contactNumber' placeholder="contact number" className="input input-bordered w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
                
				<div className="col-span-full sm:col-span-3" bis_skin_checked="1">
					<label htmlFor="date" className="text-sm">Date</label>
					<input id="date" type="date" name='date' className="input input-bordered w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>

                <div className="col-span-full sm:col-span-3" bis_skin_checked="1">
					<label htmlFor="title" className="text-sm">Title</label>
					<input id="title" type="text" name='title' defaultValue={details?.title || ''} placeholder="Service Title" className="input input-bordered w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>

                <div className="col-span-full sm:col-span-3" bis_skin_checked="1">
					<label htmlFor="number" className="text-sm">Price</label>
					<input id="number" type="number" name='price' defaultValue={details?.price || ''} placeholder="service charge" className="input input-bordered w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				
                <div className="col-span-full" bis_skin_checked="1">
					<label htmlFor="message" className="text-sm">Message</label>
                    <textarea id="message" name='message' className="textarea textarea-bordered w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" placeholder="Your message"></textarea>
				</div>

                <div className="col-span-full" bis_skin_checked="1">
                   <button className='btn btn-primary btn-block'>Order Confirm</button>
                </div>

			</div>
		</fieldset>
	</form>
</section>
       </div>
    );
};

export default Booking;