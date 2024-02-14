import {defineElementNoInputs, html} from 'element-vir';

export const ToniqApp = defineElementNoInputs({
    tagName: 'toniq-app',
    renderCallback() {
        return html`
            Toniq App goes here!
        `;
    },
});
