import '@/assets/styles/main.scss';
import App from "@/app/App.ts";
import CategoriesButton from "@/components/CategoriesButton.ts";

const root = document.querySelector('#app');

if (root) {
    root.innerHTML = App();
}

new CategoriesButton();