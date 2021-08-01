import {Link} from "react-router-dom";
import React,{useState,Component} from 'react';
import styled from 'styled-components';

const SidebarLink=styled(Link)`
color:white;
display:flex;
 justify-content: space-between;
    text-decoration: none;
align-items: center;
    padding: 20px;
    height: 60px;
    font-size: 18px;
    font-family: Yekan;
        &:hover{
            background: #c7d3ec;
               border-right: solid 4px #90aade;
    text-decoration: none;
        {

`;
const SidebarDropLink=styled(Link)`
color:white;
display:flex;
            background: #84878f;

    text-decoration: none;
align-items: center;
    padding: 20px;
    height: 60px;
    font-size: 18px;
        &:hover{
            background: #84878f;
               border-right: solid 4px #84877 nf;
    text-decoration: none;
        {

`;
const SidebarLable=styled.span`padding-right:10px`;

const SubMenu=({ item })=>{
    const [subnave,setSubnave]=useState(false);
   const show=()=>setSubnave(!subnave)
    return(

        <>
<div onClick={show}>
    <SidebarLink to={item.path}  onClick={()=>setSubnave(!subnave)}>
        <div onClick={show}>
            {item.icon}
            <SidebarLable>{item.title}</SidebarLable>
        </div>
        <div>
            {item.subNave&&subnave
                ? item.iconOpen
                :item.subNave
                    ?item.iconClose:null}
        </div>

    </SidebarLink>

    {item.subNave && subnave? item.subNave.map((i,inx)=>{
        return (
            <SidebarDropLink to={i.path}>
                {i.icon}
                <SidebarLable>{i.title}</SidebarLable>
            </SidebarDropLink>
        )
    }):null}

</div>
        </>
    )
}
export default SubMenu;