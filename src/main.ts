import '@/assets/styles/main.scss';
import App from "@/app/App.ts";
import SelectCategory from "@/components/SelectCategory.ts";
import CategoryCollection from "@/components/Category.ts";

const root = document.querySelector('#app');

if (root) {
    root.innerHTML = App();
}

new SelectCategory();
new CategoryCollection()