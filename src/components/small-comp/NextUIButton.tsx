import React from 'react'
import { Button,VariantProps } from '@nextui-org/react';

interface ButtonProps {
    title: String,
    style?: React.CSSProperties,
    className?: String,
    variant? : "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost" | undefined
    color? : "danger" | "warning" | "default" | "primary" | "secondary" | "success" | undefined
    size?: "sm" | "md" | "lg" | undefined
    onClick? : () => void
}

const NextUIButton = ({ title, style, className,variant = 'solid',color = 'default',size='md',onClick }: ButtonProps) => {
    return (
        <Button
            style={style}
            className={`${className}`}
            variant={variant}
            color={color}
            size={size}
            onClick={onClick}
        >
            {title}
        </Button>
    )
}

export default NextUIButton
