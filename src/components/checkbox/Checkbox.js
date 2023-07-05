import React, {useState} from 'react';
import './Checkbox.css';

// function Checkbox({name, labelText, register}) {
//     async function onSubmit(data) {
//         const [tags, setTags] = useState([]);
//
//         if (data.sustainable) {
//             data.tags.push("SUSTAINABLE")
//         }
//         if (data.biological) {
//             data.tags.push("BIOLOGICAL")
//         }
//         if (data.organic) {
//             data.tags.push("ORGANIC")
//
//         }
//         if (data.pesticide_free) {
//             data.tags.push("PESTICIDE_FREE")
//         }
//         if (data.additive_free) {
//             data.tags.push("ADDITIVE_FREE")
//         }
//         if (data.non_chemical) {
//             data.tags.push("NON_CHEMICAL")
//         }
//         if (data.wool) {
//             data.tags.push("WOOL")
//         }
//         if (data.linen) {
//             data.tags.push("LINEN")
//         }
//         if (data.silk) {
//             data.tags.push("SILK")
//         }
//         if (data.cotton) {
//             data.tags.push("COTTON")
//         }
//         if (data.minimalistic) {
//             data.tags.push("MINIMALISTIC")
//         }
//         if (data.organisch) {
//             data.tags.push("ORGANISCH")
//         }
//         if (data.wol) {
//             data.tags.push("WOL")
//         }
//         if (data.linnen) {
//             data.tags.push("LINNEN")
//         }
//         if (data.dutchoven) {
//             data.tags.push("DUTCHOVEN")
//         }
//     }
//
//
//     return (
//         <div className="checkbox">
//             <label htmlFor={name} className="checkbox__label">
//                 <input
//                     type="checkbox"
//                     id={name}
//                     className="checkbox__input"
//                     name={name}
//                     {...register(name)}
//                 />
//                 {labelText}
//             </label>
//         </div>
//     );
// }
// export default Checkbox;

//
// <div className="checkboxes">
//     <h3 className="margin-top2">Vink hieronder aan wat van toepassing is</h3>
//     <Checkbox
//         name="sustainable"
//         labelText="sustainable"
//         className="component-checkbox__input"
//         register={register}
//     />
//
//     <Checkbox
//         name="biological"
//         labelText="biological"
//         className="component-checkbox__input"
//         register={register}
//     />
//
//     <Checkbox
//         name="organic"
//         labelText="organic"
//         className="component-checkbox__input"
//         register={register}
//     />
//
//     <Checkbox
//         name="pesticide-free"
//         labelText="pesticide-free"
//         className="component-checkbox__input"
//         register={register}
//     />
//     <Checkbox
//         name="additive-free"
//         labelText="additive-free"
//         className="component-checkbox__input"
//         register={register}
//     />
//
//     <Checkbox
//         name="non-chemical"
//         labelText="non-chemical"
//         className="component-checkbox__input"
//         register={register}
//     />
//
//
//     <Checkbox
//         name="minimalistic"
//         labelText="minimalistic"
//         className="component-checkbox__input"
//         register={register}
//     />
//
//     <Checkbox
//         name="linen"
//         labelText="linen"
//         className="component-checkbox__input"
//         register={register}
//     />
//
//     <Checkbox
//         name="silk"
//         labelText="silk"
//         className="component-checkbox__input"
//         register={register}
//     />
//
//     <Checkbox
//         name="cotton"
//         labelText="cotton"
//         className="component-checkbox__input"
//         register={register}
//     />
//
//     <Checkbox
//         name="wool"
//         labelText="wool"
//         className="component-checkbox__input"
//         register={register}
//     />
//
//     <Checkbox
//         name="organisch"
//         labelText="organisch"
//         className="component-checkbox__input"
//         register={register}
//     />
//
//     <Checkbox
//         name="wol"
//         labelText="wol"
//         className="component-checkbox__input"
//         register={register}
//     />
//
//     <Checkbox
//         name="linnen"
//         labelText="linnen"
//         className="component-checkbox__input"
//         register={register}
//     />
//
//
// </div>