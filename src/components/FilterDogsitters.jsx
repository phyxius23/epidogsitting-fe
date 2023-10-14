import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { getSearchAction } from "../store/dogsitters/dogsittersActions";
import { CustomOption, customStyles } from "./CustomOptions";
import { offerings, isValidCap } from "../utils/utils";

export const FilterDogsitters = () => {
   const dispatch = useDispatch();
   const [value, setValue] = useState(null);

   const [query, setQuery] = useState({
      page: "",
      size: "",
      sortBy: "",
      postalCode: "",
      name: "",
      offeringType: "",
   });

   // get dogsitters
   const sendQuery = (e) => {
      e.preventDefault();

      if (!isValidCap(query.postalCode)) {
         // return toast.warning("Inserisci un CAP valido");
         return console.log("cap non valido");
      }

      dispatch(getSearchAction(query));

      setQuery({
         page: "",
         size: "",
         sortBy: "",
         postalCode: "",
         name: "",
         offeringType: "",
      });
   };

   return (
      <div className="filters shadow">
         <h5 className="h4">Tipo Servizio</h5>
         <Select
            options={offerings}
            defaultValue={value}
            placeholder="Seleziona il servizio"
            onChange={setValue}
            components={{ Option: CustomOption }}
            styles={customStyles}
         />

         <h5 className="h4 mt-4">CAP</h5>
         <Form onSubmit={sendQuery}>
            <Form.Control
               type="text"
               placeholder="CAP"
               value={query.postalCode}
               onChange={(e) => setQuery({ ...query, postalCode: e.target.value })}
               className="me-2 mb-2"
            />
         </Form>
      </div>
   );
};
