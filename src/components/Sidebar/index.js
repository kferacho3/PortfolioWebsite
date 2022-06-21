import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarItem1,
    SidebarItem2,
    SidebarItem3,
    SidebarItem4,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}> 
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>

                    <SidebarItem1>
                    <SidebarLink to ='/about' onClick={toggle}>
                        about()
                    </SidebarLink>
                    </SidebarItem1>

                    <SidebarItem2>
                    <SidebarLink to ='/services' onClick={toggle}>
                        services()
                    </SidebarLink>
                    </SidebarItem2>


                    <SidebarItem3>
                    <SidebarLink to ='/projects' onClick={toggle}>
                        myProjects()
                    </SidebarLink>
                    </SidebarItem3>


                    <SidebarItem4>
                    <SidebarLink to ='/connect' onClick={toggle}>
                        connect()
                    </SidebarLink>
                    </SidebarItem4>

                  
                    
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute >
                    fun()
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar
