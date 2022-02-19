import Stack   from "../components/Stack";

export default {
    title: 'Components/Stack',
    component: Stack ,
    argTypes: {numberOfChildren: {type: 'number',defaultValue : 4},
            },   
}
const Template = ({ numberOfChildren, ...args}) => (
    <Stack  {...args}>
    {[...Array(numberOfChildren).keys()].map(n => (
            <div
                    style={{display: 'flex', 
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '50px',
                    height: '50px',
                    background: 'red'}}>
                    {n+1}
            </div>
        ))
    }
    </Stack>
)

export const Horizontal = Template.bind({});
Horizontal.args = {
    direction: 'row',
    wrap: false,
    spacing: 2
}
export const Vertical = Template.bind({});
Vertical.args = {
    direction: 'column',
    wrap: false,
    spacing: 2
}
export const NoSpacing = Template.bind({});
NoSpacing.args = {
    direction: 'row',
    wrap: false,
    spacing: 0,
    numberOfChildren: 40
}
export const WrapOverFlow = Template.bind({});
WrapOverFlow.args = {
    direction: 'row',
    wrap: true,
    spacing: 40
}
export const Empty = Template.bind({});
Empty.args = {
    direction: 'row',
    wrap: false,
    spacing: 2,
    numberOfChildren: 0
}