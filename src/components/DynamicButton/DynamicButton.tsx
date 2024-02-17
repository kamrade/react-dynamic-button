import React, { ReactNode } from 'react';
import './DynamicButton.scss';
import { IButtonGeneratorData, IButtonBase } from './data-types/Params.ts';
import { setButtonVariables } from './helpers/set-button-variables.ts';
import { getButtonClassname } from './helpers/get-button-classname.ts';

export interface IDynamicButton<ThemeType, ButtonVariant, SizeType, ShapeType> extends IButtonBase {
  theme?: ThemeType;
  variant?: ButtonVariant;
  size?: SizeType;
  shape?: ShapeType;
  block?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  customLoader?: ReactNode;
  style?: React.CSSProperties;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;

  onClick?: () => void;
}

// Function generator
export function DynamicButtonGenerator<ThemeType, ButtonVariant, SizeType, ShapeType>(data: IButtonGeneratorData<ThemeType, ButtonVariant, SizeType, ShapeType>) {

  const defaults = data.defaults;
  const { defaultTheme, defaultVariant, defaultSize, defaultShape  } = defaults;
  setButtonVariables<ThemeType, ButtonVariant, SizeType, ShapeType>(data);

  const DynamicButton: React.FC<IDynamicButton<ThemeType, ButtonVariant, SizeType, ShapeType>> = (props) => {

    const { onClick, customLoader, prefixIcon, suffixIcon, theme, variant, size, shape, block, isLoading } = props;
    const themeVariant = data.themes.find((t) => t.name === props.theme)?.variants.find((v) => v.name === props.variant);
    const disabled = props.disabled || props.isLoading;

    return (
      <button
        onClick={onClick}
        className={ getButtonClassname<ThemeType, ButtonVariant, SizeType, ShapeType>({
          data: data,
          theme: theme || defaultTheme,
          variant: variant ||defaultVariant,
          size: size || defaultSize,
          shape: shape || defaultShape,
          block: block,
          disabled: disabled,
          isLoading: isLoading,
          convex: themeVariant?.convex,
          focusFrame: themeVariant?.focusFrame
        }) }
        style={{ ...props.style }}
        disabled={disabled}
      >
        {prefixIcon &&
          <span className={`DynamicButton--prefixIcon`}>
            <span className={`DynamicButton--prefixIconContent`}>
              {prefixIcon}
            </span>
          </span>
        }
        <span className={`DynamicButtonContent ${data.mainClassName}-content`}>
          {props.children}
        </span>

        {suffixIcon &&
          <span className={`DynamicButton--suffixIcon`}>
            <span className={`DynamicButton--suffixIconContent`}>
              {suffixIcon}
            </span>
          </span>
        }

        { props.isLoading &&
          <span className="DynamicButton--loader">
            {customLoader ? customLoader : <span className="DynamicButton--spinner" />}
          </span>
        }
      </button>
    );

  }

  return DynamicButton;

}
