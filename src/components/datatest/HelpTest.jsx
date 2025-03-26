import { useFirestore } from "../../contexts/FirestoreContext";

export default function HelpTest() {
  const { helpDataObject, loading } = useFirestore();

  const faqs = helpDataObject?.faqs;
  console.log(faqs);
  return <div>{faqs?.title}</div>;
}
