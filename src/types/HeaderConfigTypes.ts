

enum DropdownItemColor {
    danger =  "danger",
    default = "default",
    primary = "primary",
    secondary = "secondary",
    success = "success",
    warning = "warning",
}
interface DropdownItem {
    Title: string;
    Icon: string;
    Description: string;
    color: DropdownItemColor;
    Action: () => void;
}

interface HeaderConfig {
    Title: string;
    SubTitle: string;
    User: {
        Name: string;
        Avatar: string;
        Dropdown: DropdownItem[];
    };
}


export type {HeaderConfig, DropdownItem};