import React, { ButtonHTMLAttributes, CSSProperties } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // Các thuộc tính riêng của component Button (nếu có)
}

const MyButton: React.FC<ButtonProps> = ({ children, ...props }) => {
    const buttonStyle = 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded';

    return <button className={props?.className || buttonStyle} {...props}>{children}</button>;
};

export default MyButton;
