import React from 'react';

// Basic button data
export type ButtonHTMLTypes = 'button' | 'submit' | 'reset';

export interface IButtonBase {
  type?: ButtonHTMLTypes;
  disabled?: boolean;
  children?: React.ReactNode;
}

// Generative button data
export interface IButtonVariant<ButtonVariants> {
  name: ButtonVariants;
  background: string;
  hoverBackground: string;
  activeBackground: string;
  color: string;
  borderColor: string;
  focusColor: string;
  convex?: boolean;
  focusFrame?: boolean;
}

export interface IButtonTheme<ThemeType, ButtonVariant> {
  name: ThemeType;
  variants: IButtonVariant<ButtonVariant>[];
}

export interface IButtonSize<SizeType> {
  name: SizeType;
  paddingY: number;
  paddingX: number;
  innerGap: number;
  fontSize: number;
  lineHeight: number;
  borderWidth: number;
}

export interface IButtonShape<ShapeType> {
  name: ShapeType;
  borderRadius: number;
  focusBorderRadius: number;
}

export interface IDefaults<ThemeType, ButtonVariant, SizeType, ShapeType> {
  defaultTheme: ThemeType;
  defaultVariant: ButtonVariant;
  defaultSize: SizeType;
  defaultShape: ShapeType;
}

// Button Generator Component Props
export interface IButtonGeneratorData<ThemeType, ButtonVariant, SizeType, ShapeType> {
  themes: IButtonTheme<ThemeType, ButtonVariant>[];
  sizes: IButtonSize<SizeType>[];
  shapes: IButtonShape<ShapeType>[];
  defaults: IDefaults<ThemeType, ButtonVariant, SizeType, ShapeType>;
  mainClassName: string;
}
