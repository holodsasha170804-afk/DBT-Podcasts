import '@/assets/styles/main.scss';
import App from "@/scripts/App.ts";

const root = document.querySelector('#app');

if (root) {
    root.innerHTML = App();
}