import React, {useState} from "react";
import {Story} from "@storybook/react";
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: "Accordion stories",
    component: Accordion
}

const callback = action("accordion mode changed event fired")

export const MenuCollapsedMode = () => <Accordion titleValue="Menu" collapsed={true} onChange={callback} />
export const UsersUncollapsedMode = () => <Accordion titleValue="Users" collapsed={false} onChange={callback} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue="Users" collapsed={value} onChange={() => setValue(!value)} />
}