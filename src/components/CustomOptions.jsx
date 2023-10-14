import { components } from "react-select";

export const CustomOption = (props) => (
   <components.Option {...props} className="option">
      <img src={props.data.iconUrl} alt={props.label} />
      <span>{props.value}</span>
   </components.Option>
);

// export const customStyles = {
//    option: (provided, state) => ({
//       ...provided,
//       padding: 10,
//    }),
// };

// DEVO IMPOSTARE IL GIUSTO STILE ALLA SELECT
export const customStyles = {
   option: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? "grey" : "black",
   }),
};
