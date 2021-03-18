import React from 'react'
import { HeaderComponent } from '../header/header.component'

export const LayoutComponent = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <HeaderComponent />
      {children}
    </>
  )
}
