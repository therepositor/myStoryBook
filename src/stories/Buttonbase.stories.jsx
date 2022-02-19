import Button   from "../components/Button";

export default {
    title: 'components/Button ',
    component: Button ,
    argTypes: { action: {handleClick: 'handleClick'}}
     
}
const Template = args => <Button  {...args} />



export const Red = Template.bind({});
Red.args = {
    label : 'press me',
    backgroundColor: 'Red',
    size: 'md'
}
export const Green = Template.bind({});
Green.args = {
    label : 'press me',
    backgroundColor: 'green',
    size: 'md'
}
export const Large = Template.bind({});
Large.args = {
    label : 'press me',
    backgroundColor: 'blue',
    size: 'lg'
}
export const Small = Template.bind({});
Small.args = {
    label : 'press me',
    backgroundColor: 'red',
    size: 'sm'
}
export const LongLabel = Template.bind({});
LongLabel.args = {
    label : 'very long label and great button',
    backgroundColor: 'green',
    size: 'md'
}