import React, { Component } from 'react'
import { 
    ContainerMain,
    ContainerLogo,
    ContainerNavBar,
    ContainerLista,
    ContainerElementHtml,
    ContainerElementJest,
    ContainerElementGitHub,
    ContainerElementUbuntu,
    ContainerElementJava,
    ContainerElementMocha,
    ContainerElementSequelize 
} from './HeaderStyles';

export default class Header extends Component {
    render() {
        return (
            <>
                <ContainerMain>
                    <ContainerNavBar>
                         <ContainerLista><strong> App Reserve - SNAIL HOTEL </strong></ContainerLista> 
                        <ContainerLogo>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                            <ContainerElementHtml><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /></ContainerElementHtml>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            <ContainerElementJest><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" /></ContainerElementJest>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                            <ContainerElementGitHub><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></ContainerElementGitHub>
                            <ContainerElementUbuntu><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" /></ContainerElementUbuntu>
                            <ContainerElementJava><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" /></ContainerElementJava>
                            <ContainerElementMocha><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" /></ContainerElementMocha>
                            <ContainerElementSequelize><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" /></ContainerElementSequelize>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                        </ContainerLogo>
                    </ContainerNavBar>
                </ContainerMain>

            </>
        )
    }
}
