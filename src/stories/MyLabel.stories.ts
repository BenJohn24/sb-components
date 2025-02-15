import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";


const meta = {
    "title": 'UI/Labels/MyLabel',
    component: MyLabel,
    tags:['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: { control: 'inline-radio'}
    }
} satisfies Meta<typeof MyLabel>


export default meta;
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    argTypes: {
        fontColor: { control: 'color'}
    },
    args: {
        label: 'Basic label',
        allcaps: true,
        color: 'text-tertiary',
    }
}
export const AllCaps: Story = {
    args: {
        label: 'All Caps label',
        allcaps: true,
        color: 'text-tertiary',
    },
    argTypes: {
        fontColor: { control: 'color'}
    }
}
export const Secondary: Story = {
    args: {
        label: 'Secondary label',
        allcaps: true,
        color: 'text-tertiary',
    },
    argTypes: {
        fontColor: { control: 'color'}
    }
}

export const CustomColor: Story = {
    args: {
        label: 'Custom Color label',
        allcaps: true,
        color: 'text-tertiary',
    },
    argTypes: {
        fontColor: { control: 'color'}
    }
}