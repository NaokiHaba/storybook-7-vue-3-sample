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
        template: '<MyButton v-bind="args" />'
    }),
    // args: propsを定義し、Storybookの画面上で動的に変更できるようにする機能
    args: {
        label: "ボタン",
        variant: "primary",
        size: "medium"
    },
    // argTypes: propsの型やデフォルト値を定義
    argTypes: {
        variant: {
            // Storybookの UI 上でこの引数をどのように制御するか
            control: {
                type: "inline-radio",
            },
            // この引数で取り得る値の配列を指定
            options: ["primary", "secondary",]
        },
        size: {
            control: {
                type: "select",
            },
            options: ["small", "medium", "large"]
        }

    },
    parameters: {
        // custom backgrounds
        backgrounds: {
            default: "twitter",
            values: [
                {
                    name: "twitter",
                    value: "#00aced",
                },
                {
                    name: "facebook",
                    value: "#3b5998",
                },
            ],
        },
    }
}

export const Default: Story = {
    args: {
        label: "ボタン",
        variant: "primary",
        size: "medium"
    },
    parameters: {
        backgrounds: {
            default: "twitter",
        },
    }
};

export default meta