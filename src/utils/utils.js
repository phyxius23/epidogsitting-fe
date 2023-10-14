export const offerings = [
   { value: "PASSEGGIATA", label: "Passeggiata", iconUrl: "/icons/dog-walking.png" },
   { value: "ASILO_DIURNO", label: "Asilo diurno", iconUrl: "/icons/dog-training.png" },
   { value: "SOGGIORNO", label: "Soggiorno", iconUrl: "/icons/dog-house.png" },
];

// validazione del CAP
export const isValidCap = (cap) => {
   const capRegex = /^$|^[0-9]{5}$/;
   return capRegex.test(cap);
};
