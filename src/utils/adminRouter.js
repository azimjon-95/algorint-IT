import ManageAdmin from "../routes/admin/manage-admins/ManageAdmin"


import { FaDatabase } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";

export const ADMINS_ROUTER = [

    {
        id: 2,
        title: "Mahsulotni boshqarish",
        path: "/manage-product",
        icon: <FaDatabase />,
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