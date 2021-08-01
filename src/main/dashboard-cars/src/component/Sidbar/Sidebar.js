import React from 'react';
import styled from 'styled-components';
import {SidebarData} from "./SidebarData";
import SubMenu from "./SubMenu";

const Sidebar=()=>{

    const Nav=styled.div`
     background: #464a54;
    height: 10vh;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    `
    const SidebarNav=styled.nav`
         background: #464a54;
        width: 250px;

    height:100vh;
    position: fixed;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    right:0
        


    `
    const SidebarWrap=styled.div`
        width: 100%;
            display: flex;
    flex-direction: column;
direction:rtl;


    `
    return(
        <>
        <Nav>nav</Nav>
           <SidebarNav>
               <SidebarWrap>
                   {SidebarData.map((item,index)=>{
                       return <SubMenu item={item} key={index}/>
                   })}
               </SidebarWrap>
           </SidebarNav>
</>
    )

}

export default Sidebar;






