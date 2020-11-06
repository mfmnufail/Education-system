import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import PublicIcon from '@material-ui/icons/Public';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import './CSS/Header.css'


const SideBar = (props) => {

    const categories = [
        {
          id: 'Develop',
          children: [
            {
              id: 'Authentication',
              icon: <PeopleIcon />,
              active: true,
            },
            { id: 'Database', icon: <DnsRoundedIcon /> },
            { id: 'Storage', icon: <PermMediaOutlinedIcon /> },
            { id: 'Hosting', icon: <PublicIcon /> },
            { id: 'Functions', icon: <SettingsEthernetIcon /> },
            {
              id: 'ML Kit',
              icon: <SettingsInputComponentIcon />,
            },
          ],
        },
        {
          id: 'Quality',
          children: [
            { id: 'Analytics', icon: <SettingsIcon /> },
            { id: 'Performance', icon: <TimerIcon /> },
            { id: 'Test Lab', icon: <PhonelinkSetupIcon /> },
          ],
        },
      ];
   
  
    return (
      <Drawer variant="permanent" >
        <List disabePadding>

          <ListItem className="firebase, item, itemCategory">
              <div className="sidebar__logo">
                    <img style={{height:"150px", marginLeft:"25px"}} src="https://www.entiretest.com/wp-content/uploads/2011/12/University-of-Ruhuna-Logo.png" alt=""/>
              </div>
          </ListItem>

          <ListItem className="item, itemCategory">
            <ListItemIcon className="itemIcon">
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              className= "primary : itemPrimary" >
              Project Overview
            </ListItemText>
          </ListItem>

          {categories.map(({ id, children }) => (
            <React.Fragment key={id}>

              <ListItem className="categoryHeader">
                <ListItemText
                  className="primary: categoryHeaderPrimary">
                  {id}
                </ListItemText>
              </ListItem>

              {children.map(({ id: childId, icon, active }) => (
                  
                <ListItem
                  key={childId}
                  button
                  className="item">
                  <ListItemIcon className="itemIcon">{icon}</ListItemIcon>
                  <ListItemText
                    className="primary: itemPrimary">
                    {childId}
                  </ListItemText>
                </ListItem>
              ))}
  
              <Divider className="divider" />
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    );
  }

  export default SideBar;