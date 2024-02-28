import { MdHomeFilled } from "react-icons/md";
import { MdOutlineMan } from "react-icons/md";
import { RiSlideshow4Fill } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";
import { IconType } from "react-icons";

interface LinkProperties {
   id: String,
   name: String,
   url: String
   Icon: IconType
}


const Links: LinkProperties[] = [
   {
      id: 'home',
      name: 'Home',
      url: '/',
      Icon : MdHomeFilled
   },
   {
      id: 'about',
      name: 'About',
      url: '#about',
      Icon : MdOutlineMan
   },
   {
      id: 'products',
      name: 'Products',
      url: '#products',
      Icon : RiSlideshow4Fill
   },
   {
      id: 'contact',
      name: 'Contact',
      url: '#contact',
      Icon : MdContactPhone
   },
];


export { Links };