import '@/assets/styles/main.scss';
import App from "@/app/App.ts";

const root = document.querySelector('#app');

if (root) {
    root.innerHTML = App();
}