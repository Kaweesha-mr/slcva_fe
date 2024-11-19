# Header Configuration Guide

This guide explains how to customize the `headerConfig` file for your application. The `headerConfig` object controls the settings and dropdown items for the application's header. Follow these steps to add, modify, or manage the configuration effectively.

---

## **Structure of `headerConfig`**

The `headerConfig` object contains:
1. **`Title`**: The title displayed in the header.
2. **`SubTitle`**: A subtitle or description for the header.
3. **`User`**: An object representing user-specific configurations, including:
   - **`Name`**: The name of the user.
   - **`Avatar`**: The URL of the user's avatar.
   - **`Dropdown`**: An array of dropdown menu items.

Each dropdown item in the `Dropdown` array is defined by the `DropdownItem` interface, which includes:
- **`Title`**: The label for the menu item.
- **`Icon`**: The icon associated with the menu item (as a string, e.g., an SVG or class).
- **`Description`**: An optional description for the item.
- **`color`**: The item's color based on the `DropdownItemColor` enum.
- **`Action`**: A callback function triggered when the item is clicked.

---

## **How to Add a Dropdown Item**

To add a new dropdown item:
1. Go to the `Dropdown` array inside the `User` object in `headerConfig`.
2. Add a new object following the `DropdownItem` interface.

### Example:

To add a new dropdown item called "Profile":

```javascript
{
    Title: "Profile",
    Icon: "profile-icon",
    Description: "View your profile settings",
    color: DropdownItemColor.primary,
    Action: () => {
        // Code to execute when this item is clicked
        console.log("Profile clicked!");
    },
}
```

### Explanation:
- **`Title`**: The name of the dropdown item.
- **`Icon`**: The icon to display next to the item.
- **`Description`**: A short description (optional).
- **`color`**: The color theme for the item (e.g., `primary`, `danger`, etc.).
- **`Action`**: The function executed when the item is clicked.

---

## **How to Change the Header Title or Subtitle**

1. Locate the `Title` or `SubTitle` in `headerConfig`.
2. Update their values.

### Example:

To change the title and subtitle:
```javascript
Title: "My New Project",
SubTitle: "An updated Next.js application",
```

---

## **How to Change the User's Name or Avatar**

1. Locate the `User` object in `headerConfig`.
2. Update the `Name` or `Avatar` properties.

### Example:

To update the user's name and avatar:
```javascript
User: {
    Name: "Jane Doe",
    Avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024e",
}
```

---

## **How to Change or Add Dropdown Actions**

Each dropdown item has an `Action` property, which is a function executed when the item is clicked. You can modify this function to implement your desired behavior.

### Example:

To log a message when the "Settings" dropdown is clicked:
```javascript
Action: () => {
    console.log("Settings clicked!");
}
```

---

## **How to Use `DropdownItemColor` Enum**

The `DropdownItemColor` enum defines available colors for dropdown items:
- **`danger`**: Highlights an action that is potentially destructive (e.g., "Log Out").
- **`default`**: The default neutral color.
- **`primary`**: Used for primary actions.
- **`secondary`**: Used for secondary actions.
- **`success`**: Indicates successful actions.
- **`warning`**: Indicates caution or warnings.

To use it:
- Assign a color to the `color` property of a dropdown item.

### Example:

```javascript
color: DropdownItemColor.success
```

---

## **How to Add a New Dropdown with Multiple Items**

You can add a set of dropdown items to the `Dropdown` array by following the `DropdownItem` interface. Use unique `Title` and implement `Action` for each.

### Example:

To add multiple items:
```javascript
Dropdown: [
    {
        Title: "New Item 1",
        Icon: "item1-icon",
        Description: "Description for item 1",
        color: DropdownItemColor.secondary,
        Action: () => {
            console.log("Item 1 clicked");
        },
    },
    {
        Title: "New Item 2",
        Icon: "item2-icon",
        Description: "Description for item 2",
        color: DropdownItemColor.warning,
        Action: () => {
            console.log("Item 2 clicked");
        },
    },
],
```

---

## **How to Change Colors**

To change the color of an item, set its `color` property using a value from `DropdownItemColor`.

### Example:

To change an item to use the `warning` color:
```javascript
color: DropdownItemColor.warning
```

---

## **Best Practices**

1. **Consistent Naming**: Use clear, descriptive titles and descriptions for dropdown items.
2. **Handle Actions Carefully**: Ensure each `Action` is properly implemented and tested.
3. **Test Dropdown Behavior**: Verify that the dropdown renders correctly and that actions work as expected.
4. **Use Enums**: Always use `DropdownItemColor` for colors to ensure consistency.

---
