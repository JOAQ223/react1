import React from 'react'

import {
  SidebarContainer,
  Icon ,
  CloseIcon,
  SidebarWraper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRouter,
  
} from  './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
<SidebarContainer isOpen={isOpen} onClick={toggle}>
<Icon onClick={toggle} > 
    <CloseIcon>
        
    </CloseIcon>
</Icon>
<SidebarWraper>
  <SidebarMenu>
<SidebarLink to='about' onClick={toggle} >
-About
</SidebarLink>
<SidebarLink to='discover' onClick={toggle}>
-Discober
</SidebarLink>
<SidebarLink to='services' onClick={toggle}>
  -Services
</SidebarLink>
<SidebarLink to='singup' onClick={toggle}>
-Sing up
</SidebarLink>
  </SidebarMenu>
  <SideBtnWrap>
    <SidebarRouter to ='https://stackoverflow.com'> Sing in</SidebarRouter>
  </SideBtnWrap>
</SidebarWraper>
</SidebarContainer>
  )
}

export default Sidebar
