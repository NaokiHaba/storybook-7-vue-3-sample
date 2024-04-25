import { Meta, StoryObj } from "@storybook/vue3"
import MyButton from "../components/MyButton.vue"

type Story = StoryObj<typeof MyButton>

const meta: Meta<typeof MyButton> = {
    title: "MyButton",
    component: MyButton
}

export const Default: Story = ( {
    render: () => ( {
        components: {MyButton},
        template: '<my-button label="ボタン"/>'
    } )
} )

export default meta