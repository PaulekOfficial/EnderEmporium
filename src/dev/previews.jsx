import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import LoginLayout from "../sites/LoginLayout";
import MainSite from "../sites/main";
import PageHeader from "../elements/header";
import NavBar from "../elements/nav";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/LoginLayout">
                <LoginLayout/>
            </ComponentPreview>
            <ComponentPreview path="/MainSite">
                <MainSite/>
            </ComponentPreview>
            <ComponentPreview path="/PageHeader">
                <PageHeader/>
            </ComponentPreview>
            <ComponentPreview path="/NavBar">
                <NavBar/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews