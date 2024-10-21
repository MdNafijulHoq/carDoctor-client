import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthContextProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const MyBooking = () => {
    const {user} = useContext(AuthContext)
    const [myBooking, setMyBooking] = useState([])
    const [control, setControl] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:5000/booking?email=${user?.email}`, {
          withCredentials: true,
        })
        .then(res => {
          setMyBooking(res.data)
        })
        // fetch(`http://localhost:5000/booking?email=${user?.email}`)
        // .then(res => res.json())
        // .then(data => {
        //     setMyBooking(data)
        // })
    },[control])
 
    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/booking/${id}`,{
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0){
                    setControl(!control)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
              })
            }
          });

    }

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/booking/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                const remaining = myBooking.filter(booking => booking._id !== id)
                const updated = myBooking.find(booking => booking._id === id);
                updated.status = 'confirm'
                const newBooking = [updated, ...remaining]
                setMyBooking(newBooking)
            }
          })
    }

    return (
//         <div className="overflow-x-auto">
//   <table className="table">
   
//     <thead>
//       <tr>
//         <th>
//           <label>
//             <input type="checkbox" className="checkbox" />
//           </label>
//         </th>
//         <th>Image</th>
//         <th>Customer Name</th>
//         <th>Customer Email</th>
//         <th>Price</th>
//         <th>Date</th>
//         <th>Details</th>
//       </tr>
//     </thead>
//     <tbody>
      
//       {
//         myBooking.map((userSpecificBooking, index) => 
//             <tr key={index}>
//         <th>
//           <label>
//             <input type="checkbox" className="checkbox" />
//           </label>
//         </th>
//         <td>
//           <div className="flex items-center gap-3">
//             <div className="avatar">
//                 <div className="w-24 rounded-xl">
//                     <img src={userSpecificBooking.img} />
//                 </div>
//                 </div>
//           </div>
//         </td>
//         <td>
//           {userSpecificBooking.cutomerName}
          
//         </td>
//         <td>{userSpecificBooking.email}</td>
//         <td>{userSpecificBooking.price}</td>
//         <td>{userSpecificBooking.bookingDate}</td>
//         <th>
//           <button className="btn btn-ghost btn-xs">Pending</button>
//         </th>
//       </tr>)
//       }
      
//     </tbody>
    
//   </table>
// </div>

<div className="overflow-x-auto">
<table className="table table-auto w-full sm:w-full md:w-full lg:w-full">
  <thead>
    <tr>
      <th className="px-4 py-2">Image</th>
      <th className="px-4 py-2">Customer Name</th>
      <th className="px-4 py-2">Customer Email</th>
      <th className="px-4 py-2">Price</th>
      <th className="px-4 py-2">Date</th>
      <th className="px-4 py-2">Details</th>
    </tr>
  </thead>
  <tbody>
    {myBooking.map((userSpecificBooking, index) => (
      <tr key={index}>
        <th className="px-4 py-2">
        <button onClick={() => {handleDelete(userSpecificBooking._id)}} className="btn btn-sm btn-circle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        </th>
        <td className="px-4 py-2">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-24 rounded-xl">
                <img src={userSpecificBooking.img} />
              </div>
            </div>
          </div>
        </td>
        <td className="px-4 py-2">{userSpecificBooking.cutomerName}</td>
        <td className="px-4 py-2">{userSpecificBooking.email}</td>
        <td className="px-4 py-2">{userSpecificBooking.price}</td>
        <td className="px-4 py-2">{userSpecificBooking.bookingDate}</td>
        <th className="px-4 py-2">
            {
                userSpecificBooking.status === 'confirm' ? 
                <span className='font-bold text-primary'>Confirmed</span> :
                <button onClick={() => {handleBookingConfirm(userSpecificBooking._id)}} className="btn btn-ghost btn-xs">Please Confirm</button>
            }
        </th>
      </tr>
    ))}
  </tbody>
</table>
</div>



    );
};

export default MyBooking;