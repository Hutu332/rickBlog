import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: 'Code',
        icon: "daima",
        children: [
            {
                text: "Code Note",
                icon: "daima",
                link: "/code/",
                activeMatch: "^/code/$",
            }
        ],
    },
    {
        text: "Photo",
        icon: "photo",
        children: [
            {text: "Nanjing", icon: "pen-to-square", link: "/Remark/Nanjing"},
            {text: "Xian", icon: "pen-to-square", link: "/Remark/Xian"},
        ],
    }
]);