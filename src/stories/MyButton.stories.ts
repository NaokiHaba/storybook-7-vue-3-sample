import {Meta, StoryObj} from "@storybook/vue3"
import MyButton from "../components/MyButton.vue"

// コンポーネントのプロパティと対応するストーリーの設定を定義するためのおまじない
type Story = StoryObj<typeof MyButton>

// MyButtonコンポーネントに対するメタ情報を定義
const meta: Meta<typeof MyButton> = {
    title: "MyButton",
    component: MyButton,

    // レンダリング方法を定義
    render: (args) => ({
        components: {MyButton},

        // Composition APIのsetup関数を使って、propsを定義
        setup() {
            return {args}
        },
        // args: propsを定義し、Storybookの画面上で動的に変更できるようにする機能
        template: '<MyButton v-bind="args" />'
    })
}

export const Default: Story = {
    args: {
        label: "ボタン"
    }
}

export const Login: Story = {
    args: {
        label: "ログイン"
    }
}

export const SignUp: Story = {
    args: {
        label: "会員登録"
    }
}

export default meta