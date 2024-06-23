// src/menuItems.js

import todoImage from "../assets/images/icon-todo.svg";
import calendarImage from "../assets/images/icon-calendar.svg";
import remindersImage from "../assets/images/icon-reminders.svg";
import planningImage from "../assets/images/icon-planning.svg";

export const menuItems = [
    {
        title: "Features",
        submenu: [
            { title: "Todo list", iconImage: todoImage },
            { title: "Calendar", iconImage: calendarImage },
            { title: "Reminders", iconImage: remindersImage },
            { title: "Planning", iconImage: planningImage },
        ],
    },
    {
        title: "Company",
        submenu: [
            { title: "History" },
            { title: "Our Team" },
            { title: "Blog" },
        ],
    },
    {
        title: "Careers",
        submenu: [
            { title: "Todo list", iconImage: todoImage },
            { title: "Calendar", iconImage: calendarImage },
            { title: "Reminders", iconImage: remindersImage },
            { title: "Planning", iconImage: planningImage },
        ],
    },
    {
        title: "About",
        submenu: [
            {
                title: "Todo list",
                iconImage: todoImage,
                submenu: [
                    { title: "Todo list", iconImage: todoImage },
                    { title: "Calendar", iconImage: calendarImage },
                    { title: "Reminders", iconImage: remindersImage },
                    { title: "Planning", iconImage: planningImage },
                ],
            },
            { title: "Calendar", iconImage: calendarImage },
            { title: "Reminders", iconImage: remindersImage },
            { title: "Planning", iconImage: planningImage },
        ],
    },
];
