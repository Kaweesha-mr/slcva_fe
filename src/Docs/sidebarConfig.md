# Menu Configuration Guide

This file defines the `menuGroups` array, which structures the menus and submenus used in the application. This guide will walk you through how to add menu items, modify existing ones, change routes, and create submenus.

---

## **Structure of `menuGroups`**

The `menuGroups` array contains objects that represent groups of menus. Each group has:
- **`name`**: The name of the menu group (e.g., `"MENU"`, `"OTHERS"`).
- **`menuItems`**: An array of menu items, each of which contains:
  - **`icon`**: The SVG icon for the menu item.
  - **`label`**: The displayed text for the menu item.
  - **`route`**: The route URL for the menu item.
  - **`children` (optional)**: An array of submenu items.

---

## **How to Add a Menu Item**

To add a new menu item:

1. Locate the desired menu group (e.g., `"MENU"`, `"OTHERS"`) in the `menuGroups` array.
2. Add a new object to the `menuItems` array within that group. 

### Example:

To add a menu item named "New Menu" under `"MENU"`:

```javascript
menuItems: [
  {
    icon: (
      <svg className="fill-current" width="24" height="24" ...>...</svg>
    ),
    label: "New Menu",
    route: "/new-menu",
  },
  // Other existing menu items...
]
```

### Explanation:
- **`icon`**: Provide an SVG component for the icon.
- **`label`**: Set the text that will appear for this menu item.
- **`route`**: Set the URL for navigation when this menu is clicked.

---

## **How to Add a Submenu**

To add submenus:

1. Add a `children` property to the menu item you want to have submenus.
2. The `children` property is an array of submenu items, where each item has:
   - **`label`**: The displayed text for the submenu.
   - **`route`**: The URL for navigation when this submenu is clicked.

### Example:

To add submenus under "New Menu":

```javascript
menuItems: [
  {
    icon: (
      <svg className="fill-current" width="24" height="24" ...>...</svg>
    ),
    label: "New Menu",
    route: "/new-menu",
    children: [
      { label: "Submenu 1", route: "/new-menu/submenu-1" },
      { label: "Submenu 2", route: "/new-menu/submenu-2" },
    ],
  },
  // Other existing menu items...
]
```

---

## **How to Change a Route**

1. Locate the menu item or submenu item you want to modify.
2. Update the `route` property with the new URL.

### Example:

To change the route for "Dashboard":

Before:
```javascript
{
  label: "Dashboard",
  route: "#",
}
```

After:
```javascript
{
  label: "Dashboard",
  route: "/dashboard",
}
```

---

## **How to Add a New Menu Group**

To add a new menu group:

1. Add a new object to the `menuGroups` array.
2. Define the `name` for the group and a `menuItems` array.

### Example:

To add a new group named "EXTRAS":

```javascript
{
  name: "EXTRAS",
  menuItems: [
    {
      icon: (
        <svg className="fill-current" width="24" height="24" ...>...</svg>
      ),
      label: "Extra Menu",
      route: "/extras/extra-menu",
      children: [
        { label: "Submenu 1", route: "/extras/extra-menu/submenu-1" },
      ],
    },
  ],
},
```

---

## **How to Add or Modify Icons**

Each menu item has an `icon` property where you can define an SVG component. To update or replace the icon:
1. Replace the existing SVG code with your desired SVG.
2. Ensure the dimensions and `className` attributes match your styling requirements.

### Example:

To change the icon for "Dashboard":
```javascript
icon: (
  <svg className="fill-current" width="24" height="24" ...>...</svg>
),
```

---

## **How to Add Routes for Submenus**

Submenus are defined in the `children` array of a menu item. Each submenu item has a `label` and a `route`.

### Example:

To add a route for a new submenu under "Forms":

```javascript
children: [
  { label: "Form Elements", route: "/forms/form-elements" },
  { label: "New Submenu", route: "/forms/new-submenu" },
],
```

---

## **Best Practices**

1. **Consistent Naming**: Use clear and descriptive `label` names for menus and submenus.
2. **Route Structure**: Keep your `route` URLs organized and consistent with your application structure.
3. **Icon Uniformity**: Ensure all icons have the same dimensions and styling for a uniform look.
4. **Test Your Changes**: Always test navigation and rendering after making modifications.

---
