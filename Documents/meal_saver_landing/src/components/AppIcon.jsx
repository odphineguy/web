import React from 'react';
import * as LucideIcons from 'lucide-react';
import { HelpCircle, Menu, X } from 'lucide-react';

function Icon({
    name,
    size = 24,
    color = "currentColor",
    className = "",
    strokeWidth = 2,
    ...props
}) {
    // Handle common icon name mappings
    const iconMap = {
        'Menu': Menu,
        'X': X,
        'Close': X,
        'Hamburger': Menu
    };

    const IconComponent = iconMap[name] || LucideIcons?.[name];

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found, using HelpCircle as fallback`);
        return <HelpCircle size={size} color="gray" strokeWidth={strokeWidth} className={className} {...props} />;
    }

    return <IconComponent
        size={size}
        color={color}
        strokeWidth={strokeWidth}
        className={className}
        {...props}
    />;
}
export default Icon;