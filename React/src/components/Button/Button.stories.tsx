
import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;
import type { Meta, StoryObj } from '@storybook/react';

export default meta;
type Story = StoryObj<typeof meta>;

export const Color: Story ={
    args: {
        label: 'Hello World',
        primary: true,
        color: 'primary',
        size: 'large',
        variant: 'filled',
        state: 'hover',

    },
};


