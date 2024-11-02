// components/ContactsWrapper.jsx
import dynamic from "next/dynamic";

// Dynamically import the Contacts component with SSR disabled
const Subscribers = dynamic(() => import("./Subscribers"), { ssr: false });

export default Subscribers;
