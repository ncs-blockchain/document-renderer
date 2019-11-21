import Certificate from "./certificate";
import Transcript from "./transcript";
import Guide from "./guide";


const templates = [
  {
    id: "certificate",
    label: "Certificate",
    template: Certificate
  },
  {
    id: "transcript",
    label: "Transcript",
    template: Transcript
  },
  {
    id: "guide",
    label: "Static-Details",
    template: Guide
  }
];


export default templates;
