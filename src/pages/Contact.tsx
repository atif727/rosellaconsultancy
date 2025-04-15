import { FacebookFilled } from "@ant-design/icons";
import { Button, Descriptions, DescriptionsProps } from "antd";
import { WhatsAppButton } from "../components/whatsappbutton";
import { HotlineButton } from "../components/hotlinebutton";

const items: DescriptionsProps["items"] = [
  {
    key: "1",
    label: <h1 className="md:text-2xl">MAIN AGENT</h1>,
    children: <h1 className="xl:text-2xl">MD MAMUN HOSSAIN</h1>,
  },
  {
    key: "2",
    label: <h1 className="md:text-2xl">TELEPHONE</h1>,
    children: <h1 className="md:text-2xl">+8801611092258</h1>,
  },
  {
    key: "3",
    label: <h1 className="md:text-2xl">WEB PAGE</h1>,
    children: (
      <Button type="link">
        <h1 className="md:text-2xl">rosella.com.bd</h1>
      </Button>
    ),
  },
  {
    key: "4",
    label: <h1 className="md:text-2xl">ADDRESS</h1>,
    children: (
      <h1 className="md:text-2xl">MOTIJHEEL METRO STATION ER SHAMNE</h1>
    ),
  },
  {
    key: "5",
    label: <h1 className="md:text-2xl">OFFICE TIMING</h1>,
    children: (
      <h1 className="md:text-2xl">
        FROM <span className="text-green-500">10 AM</span> TO{" "}
        <span className="text-red-500">9 PM</span>{" "}
        <span className="text-blue-400">**FRIDAY OFF DAY</span>
      </h1>
    ),
  },
];

function Contact() {
  return (
    <div className="p-18">
      <div className="max-md:p-5 md:p-16 bg-gray-100 rounded-2xl shadow-xl">
        <Descriptions
          column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }}
          title=<h1 className="md:text-4xl max-md:text-center">
            CONTACT INFORMATION
          </h1>
          items={items}
        />
      </div>
      <div className="mt-20 sm:flex gap-9 justify-center">
        <WhatsAppButton />
        <button
          onClick={() => window.open("https://facebook.com", "_blank")}
          className="max-md:mt-9 px-10 py-5 shadow-2xl rounded-4xl hover:bg-gray-100 hover:text-blue-500 text-4xl cursor-pointer "
        >
          <FacebookFilled /> FACEBOOK
        </button>
        <HotlineButton />
      </div>
      <div className="mt-16 max-md:p-5 md:p-16 bg-gray-100 rounded-2xl shadow-xl">
        <h1 className="md:text-4xl font-bold max-md:text-center max-md:text-3xl">FACE TO FACE INFORMATION</h1>
        <h1 className="mt-5 text-2xl max-md:text-xl">
          FACE TO FACE TALKING IS FAR BETTER THAN ONLINE COMMUNICATION AS IT
          SATISFIES MAJORITY OF PEOPLE AND HELPS IN UNDERSTANDING EACHOTHER
          MORE. CONSULTANCY BASED COMPANIES PREFER MEETING IN PERSON MORE THAN
          ONLINE COMMUNICATION. BECAUSE ALOT OF MATTERS CAN'T BE DISCUSSED
          ONLINE. ALSO ALOT OF PAPERWORK INVOLVES IN THIS PROCEDURE. SO TALKING
          FACE-TO-FACE IN OUR OFFICE WITHOUT AGENTS WOULD BE PREFFERED. YOU CAN
          APPLY FOR AN APPOINTMENT TO TALK AND REGISTER FOR ANY COUNTRY YOU'D
          LIKE TO GO.
        </h1>
      </div>
    </div>
  );
}
export default Contact;
