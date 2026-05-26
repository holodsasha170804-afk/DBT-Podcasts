import '@/assets/styles/main.scss';
import App from "@/app/App";
import SearchPanelCollection from "@/components/SearchPanel.logik.ts";

const root = document.querySelector('#app');

if (root) {
    root.innerHTML = App();
}

new SearchPanelCollection();
