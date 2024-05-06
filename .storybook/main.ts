import type {StorybookConfig} from "@storybook/vue3-vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.stories.@(js|ts)", "../src/**/*.mdx"],
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
        "@storybook/addon-viewport",
        "@storybook/addon-backgrounds",
        "@storybook/addon-measure",
        "@storybook/addon-outline",
        "@storybook/addon-docs"
    ]
};
export default config;
