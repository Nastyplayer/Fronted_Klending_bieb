// import React, {useState} from 'react';
// import { useForm } from 'react-hook-form';
// import pic from '../../../../KLEDING_BIEB/src/assets/hilado-en-huso.jpg';
// import Header from "../../components/header/Header";
// import axios from "axios";
//
//
//
//
// function Contact () {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [comment, setComment] = useState('');
//   //  const [addSucces, toggleAddSucces] = useState(false);
//     const {toggleSuccessAdd} = useState(true);
//      const { register } = useForm( {
//
//
//         username: '',
//         email: '',
//         comments: '',
//         conditions: false,
//     });
//
// //   function handleFormSubmit (data) {
// //       console.log(data);
// //   }
//
//
//
//
//
//     async function addContactUser(e) {
//         e.preventDefault();
//         console.log(username, email, comment);
//         try {
//             const response = await axios.post('http://localhost:8083/users', {
//
//      username: username,
//          email: email,  });
//
//             if (response.status !== 201) {
//                 toggleSuccessAdd(false);
//             }
//             console.log({
//                 email: email,
//                 comment: comment,
//                 username: username,
//             })
//
//         } catch (e) {
//             console.error(e)
//         }
//
//     }
//
//
//
//     return (
//
//         <div className="page2">
//
//             <Header icon={pic}/>
//             <form  onSubmit={addContactUser}>
//
//
//             <fieldset>
//                 <legend><h2>Gegevens</h2></legend>
//
//                 <label  htmlFor="details-name">
//                     Naam :
//                     <input
//                         type="text"
//                         id="username"
//                       //  value={username}
//                       //  onChange={(e) => setUsername(e.target.value)}
//                        {...register("username")}
//                     />
//                 </label>
//
//                 <label htmlFor="details-email">
//                     E-mail:
//                     <input
//                         type="text"
//                         id="email"
//                        // value={email}
//                        // onChange={(e) => setEmail(e.target.value)}
//
//                        {...register("email")}
//                     />
//                 </label>
//
//             </fieldset>
//
//             <fieldset>
//
//                 <legend><h2>Jouw review</h2></legend>
//
//                 <label htmlFor="comments">
//                     <h3>Opmerkingen:</h3>
//                     <textarea
//
//                         id="comments"
//                        /// value={comment}
//                       //  onChange={(e) => setComment(e.target.value)}
//                         rows="10"
//                         cols="60"
//                         placeholder="Laat ons weten wat jij van vindt"
//
//                      {...register("comments")}
//                     />
//                 </label>
//
//                 <label htmlFor="nieuws">
//
//                     <input
//                         type="checkbox"
//
//                         {...register("nieuws")}
//
//                     />
//                     Ik schrijf me in voor de nieuwe collectie
//
//                 </label>
//
//                 <button type="submit">
//                     Versturen
//                 </button>
//             </fieldset>
//         </form>
//
//         </div>
//     );
// }
//
// export default Contact;
//
//
//
//
//
//
//
// // //33-54   <form  onSubmit={handleSubmit(handleFormSubmit)}>
// //<form  onSubmit={addUserContact}>
//
// //         const { register, handleSubmit } = useForm({
// //
// //
// //             username: '',
// //             email: '',
// //             comments: '',
// //             conditions: false,
// //         });
//
//
// // async function addUserContact(e) {
// //     e.preventDefault();
// //     console.log(username, email, comment);
// //
// //     try {
// //         const response = await axios.post(`http://localhost:8083/users'),
// // data:{
// //     username: username,
// //         email: email,
// //         textarea: comment,
// // } );
// //         Console.log(response.data);
// //
// //         } catch (e) {
// //         console.error(e);
// //         }
// //
// // }
//
//
