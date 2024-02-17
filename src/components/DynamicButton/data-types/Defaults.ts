import { IButtonShape, IButtonSize, IButtonTheme } from "./Params.ts";

export const defaultTheme: IButtonTheme<'default', 'default'> = {
  name: 'default',
  variants: [{
    name: 'default',
    background: '#f2f4f6',
    hoverBackground: '#eaecef',
    activeBackground: '#e3e6e8',
    borderColor: 'transparent',
    color: '#000',
    focusColor: '#000',
    convex: true,
    focusFrame: true,
  }]

}

export const defaultSize: IButtonSize<'default'> = {
  name: 'default',
  paddingY: 4,
  paddingX: 12,
  innerGap: 4,
  fontSize: 16,
  lineHeight: 1.5,
  borderWidth: 1
}

export const defaultShape: IButtonShape<'default'> = {
  name: 'default',
  borderRadius: 6,
  focusBorderRadius: 8
}
