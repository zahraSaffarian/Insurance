import { link } from "fs";
import image from "../../assets/images/insurance.svg";
import Insurance from "./component/Insurance";
function ChooseInsurance() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {insurances.map((insurance, index) => (
        <Insurance
          key={index}
          name={insurance.name}
          image={insurance.image}
          route={insurance.route}
          enabled={insurance.enabled}
        />
      ))}
    </div>
  );
}

const insurances = [
  {
    name: "شخص ثالث",
    enabled: true,
    image: image,
    route: "/sales-insurance",
  },
  {
    name: "بدنه",
    enabled: false,
    image: image,
    route: "/",
  },
];
export default ChooseInsurance;
