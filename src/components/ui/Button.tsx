import React from "react";

interface ButtonPorps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function Button({ children, className = '', ...props }: ButtonPorps) {
    return (
        <button
            className={`bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}