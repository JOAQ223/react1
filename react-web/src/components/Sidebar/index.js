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

const Sidebar = () => {
  return (
<SidebarContainer>
<Icon>
    <CloseIcon>
        
    </CloseIcon>
</Icon>
<SidebarWraper>
  <SidebarMenu>
<SidebarLink to='https://stackoverflow.com'>
About
</SidebarLink>
<SidebarLink to='https://stackoverflow.com'>
Discober
</SidebarLink>
<SidebarLink to='https://stackoverflow.com'>
  Services
</SidebarLink>
<SidebarLink to='https://stackoverflow.com'>
singup
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
