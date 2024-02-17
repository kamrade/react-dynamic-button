import { DynamicButtonGenerator } from ".";

//  Create component
export type ButtonTheme = 'primary' | 'secondary' | 'contrast';
export type ButtonVariant = 'text' | 'contained' | 'outlined';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'huge';
export type ButtonShape = 'straight' | 'rounded' | 'circled';

export const Button = DynamicButtonGenerator<ButtonTheme, ButtonVariant, ButtonSize, ButtonShape>({

  mainClassName: 'FancyButton',

  defaults: {
    defaultTheme: 'primary',
    defaultVariant: 'text',
    defaultSize: 'md',
    defaultShape: 'rounded'
  },

  themes: [{
    name: 'primary',
    variants: [{
      name: 'text',
      background: 'transparent',
      hoverBackground: '#E7F6FF',
      activeBackground: '#DBF1FF',
      borderColor: 'transparent',
      color: '#1983BF',
      focusColor: '#7ED1FF',
      convex: false,
      focusFrame: true,
    }, {
      name: 'contained',
      background: '#34B0F6',
      hoverBackground: '#24A4EC',
      activeBackground: '#1D9BE3',
      borderColor: 'transparent',
      color: '#ffffff',
      focusColor: '#7ED1FF',
      convex: true,
      focusFrame: true,
    }, {
      name: 'outlined',
      background: 'transparent',
      hoverBackground: '#E7F6FF',
      activeBackground: '#DBF1FF',
      borderColor: '#7ED1FF',
      color: '#1983BF',
      focusColor: '#7ED1FF',
      convex: true,
      focusFrame: true,
    }]

  }, {
    name: 'secondary',
    variants: [{
      name: 'text',
      background: 'transparent',
      hoverBackground: '#F3F6F8',
      activeBackground: '#EBEEF0',
      borderColor: 'transparent',
      color: '#272D34',
      focusColor: '#7ED1FF',
    }, {
      name: 'contained',
      background: '#F3F6F8',
      hoverBackground: '#EBEEF0',
      activeBackground: '#E3E6E8',
      borderColor: '#E3E6E8',
      color: '#272D34',
      focusColor: '#7ED1FF',
    }, {
      name: 'outlined',
      background: 'transparent',
      hoverBackground: '#F3F6F8',
      activeBackground: '#EBEEF0',
      borderColor: '#C1CAD0',
      color: '#272D34',
      focusColor: '#7ED1FF',
    }]
  }],

  sizes: [{
    name: 'sm',
    paddingY: 2,
    paddingX: 8,
    innerGap: 2,
    fontSize: 12,
    lineHeight: 1.5,
    borderWidth: 1,
  }, {
    name: 'md',
    paddingY: 4,
    paddingX: 12,
    innerGap: 4,
    fontSize: 14,
    lineHeight: 1.5,
    borderWidth: 1,
  }, {
    name: 'lg',
    paddingY: 8,
    paddingX: 12,
    innerGap: 5,
    fontSize: 14,
    lineHeight: 1.5,
    borderWidth: 1,
  }, {
    name: 'huge',
    paddingY: 24,
    paddingX: 24,
    innerGap: 8,
    fontSize: 24,
    lineHeight: 1.25,
    borderWidth: 1,
  }],

  shapes: [{
    name: 'straight',
    borderRadius: 0,
    focusBorderRadius: 2,
  }, {
    name: 'rounded',
    borderRadius: 6,
    focusBorderRadius: 8,
  }, {
    name: 'circled',
    borderRadius: 30,
    focusBorderRadius: 32,
  }]

});
