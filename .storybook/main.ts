import type {StorybookConfig} from "@storybook/vue3-vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.stories.@(js|ts)"],
    framework: {
        name: "@storybook/vue3-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    addons: [
        "@storybook/addon-controls",
        "@storybook/addon-actions",
        "@storybook/addon-viewport"
    ]
};
export default config;
