import { IoMdHome } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
import { GiCrystalGrowth } from "react-icons/gi";
import { IListType } from "../types/list.interface.types";

export const list: IListType[] = [
    {page:"Home", route:"/" ||"/home", icon:IoMdHome},
    {page:"Contact-Us", route:"/contact-us", icon:MdContactPhone},
    {page:"About-Us", route:"/about-us", icon:GiCrystalGrowth},
];