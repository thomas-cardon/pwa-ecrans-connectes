import router from "next/router";
import { cloneElement } from "react";
import { Package } from "react-feather";

type Props = {
    children: React.ReactNode,
    disabled?: boolean,
    loading?: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    type?: "button" | "submit" | "reset",
    href?: string,
    icon?: React.ReactNode
}

const Brand = ({ children, onClick, href, icon, disabled, loading, type }: Props) => (
    <button type={type || "button"} disabled={disabled} onClick={onClick ? onClick : () => href ? router.push('/settings') : null} className="flex px-4 py-2 my-4 font-semibold text-white bg-blue-500 rounded-lg shadow-md justify-evenly hover:bg-blue-700 dark:bg-gold-500 dark:hover:bg-gold-700 focus:outline-none disabled:opacity-50">
        <div className="mr-2">
            {icon ? icon : <Package />}
        </div>
        {children}
    </button>
)

export default Brand