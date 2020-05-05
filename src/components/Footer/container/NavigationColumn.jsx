import React from "react"
import { LinkList, NavLink, NavigationWrapper } from "./footer.style"

const NavigationColumn = ({ title, links, dataKey, showBorder }) => (
  <NavigationWrapper data-key={dataKey}>
    <div border={showBorder} title={title} isDisabled={["lg", "xl"]} icon>
      <LinkList role="menu" aria-label={title}>
        {links.map((link, index) => (
          <NavLink key={index}>{link}</NavLink>
        ))}
      </LinkList>
    </div>
  </NavigationWrapper>
)

export default NavigationColumn
