import MyHeader from "../components/MyHeader.vue";
import {Meta, StoryObj} from "@storybook/vue3";

type Story = StoryObj<typeof MyHeader>

const meta: Meta<typeof MyHeader> = {
    title: "MyHeader",
    component: MyHeader,
    render: (args) => ({
        components: {MyHeader},
        setup() {
            return {args}
        },
        template: '<MyHeader v-bind="args" />'
    }),
    argTypes: {
        onLogin: {action: "login"},
        onLogout: {action: "logout"},
        onSignup: {action: "signup"}
    }
}

export const Login: Story = {
    args: {
        isLoggedIn: true
    }
};

export const Logout: Story = {
    args: {
        isLoggedIn: false
    }
};

export default meta