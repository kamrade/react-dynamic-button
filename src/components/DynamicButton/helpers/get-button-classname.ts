import {IButtonGeneratorData} from "../data-types/Params.ts";

export interface IGetButtonClassname<ThemeType, ButtonVariant, SizeType, ShapeType> {
  data: IButtonGeneratorData<ThemeType, ButtonVariant, SizeType, ShapeType>,
  theme?: ThemeType,
  variant?: ButtonVariant,
  size?: SizeType,
  shape?: ShapeType,
  block?: boolean,
  disabled?: boolean,
  isLoading?: boolean,
  convex?: boolean;
  focusFrame?: boolean;
}

export function getButtonClassname<ThemeType, ButtonVariant, SizeType, ShapeType>(props: IGetButtonClassname<ThemeType, ButtonVariant, SizeType, ShapeType>) {

  const { data, theme, variant, size, shape, block, disabled, isLoading, convex, focusFrame } = props;

  let className = 'DynamicButton';
  className += ' ';
  className += data.mainClassName;
  className += ' ';
  className += theme ? data.mainClassName + '-theme-' + theme + ' ' : '';
  className += variant ? data.mainClassName + '-variant-' + variant + ' ' : '';
  className += size ? data.mainClassName + '-size-' + size + ' ' : '';
  className += shape ? data.mainClassName + '-shape-' + shape + ' ' : '';
  className += convex ? 'DynamicButton--convex' : '';
  className += ' ';
  className += focusFrame ? 'DynamicButton--focusFrame' : '';
  className += ' ';
  className += block ? 'DynamicButton--block' : '';
  className += ' ';
  className += disabled ? 'DynamicButton--disabled' : '';
  className += ' ';
  className += isLoading ? 'DynamicButton--loading' : '';
  return className;
}
