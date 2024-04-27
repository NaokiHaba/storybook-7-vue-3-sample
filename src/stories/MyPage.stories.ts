import MyPage from "../components/MyPage.vue";
import {Meta, StoryObj} from "@storybook/vue3";

type Story = StoryObj<typeof MyPage>

const meta: Meta<typeof MyPage> = {
    title: "MyPage",
    component: MyPage,
    render: () => ({
        components: {MyPage},
        template: '<MyPage />'
    }),
    // Add the viewport addon to the story
    parameters: {

        viewport: {
            // default viewports
            // viewports: INITIAL_VIEWPORTS

            // custom viewports
            viewports: {
                pc: {
                    name: "Min PC Layout",
                    styles: {
                        width: "992px",
                        height: "100%",
                    },
                },
                mobile: {
                    name: "Min Mobile Layout",
                    styles: {
                        width: "375px",
                        height: "100%",
                    },
                },
            },
        }
    }
}

export const ForPC: Story = {
    parameters: {
        viewport: {
            defaultViewport: "pc",
        },
    },
};

export const ForMobile: Story = {
    parameters: {
        viewport: {
            defaultViewport: "mobile",
        },
    },
};

export const Default: Story = {};

export default meta