// components/ContactsWrapper.jsx
import dynamic from "next/dynamic";

// Dynamically import the Contacts component with SSR disabled
const Contacts = dynamic(() => import("./Contacts"), { ssr: false });

export default Contacts;
