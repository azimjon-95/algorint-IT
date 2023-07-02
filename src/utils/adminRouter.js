import ManageAdmin from "../routes/admin/manage-admins/ManageAdmin"


import { TbListCheck } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";

export const ADMINS_ROUTER = [

    {
        id: 2,
        title: "Ro'yhatdan o'tgan o'quvchilar",
        path: "/manage-product",
        icon: <TbListCheck />,
        el: ''
    },

    {
        id: 4,
        title: "Adminlar",
        path: "/manage-admins",
        icon: <HiUsers />,
        el: <ManageAdmin />
    },
]