import {defaultShape, defaultSize, defaultTheme} from "../data-types/Defaults.ts";
import {addStylesheet} from "./add-stylesheet.ts";
import {IButtonGeneratorData} from "../data-types/Params.ts";

export function setButtonVariables<ThemeType, ButtonVariant, SizeType, ShapeType>(data: IButtonGeneratorData<ThemeType, ButtonVariant, SizeType, ShapeType>) {

  const stylesId = 'dynamic-button-styles';

  if ( !document.getElementById(stylesId) ) {

    const allThemes: ThemeType[] = data.themes.map(theme => theme.name);
    const allVariants = data.themes[0].variants.map(variant => variant.name);
    const allSizes = data.sizes.map(size => size.name);
    const allShapes = data.shapes.map(shape => shape.name);

    const focusOffset = 3;

    let allSizesCss = '';
    let themeVariantCss = '';
    let allShapesCss = '';
    let height = 0;
    let focusHeight = 0;

    allThemes.map(themeType => {
      allVariants.map(variantName => {
        themeVariantCss += `.${data.mainClassName}.${data.mainClassName}-theme-${themeType}.${data.mainClassName}-variant-${variantName} {`
        let st = data.themes.find(theme => theme.name === themeType)?.variants?.find(variant => variant.name === variantName);
        const background = st?.background || defaultTheme.variants[0].background;
        const hoverBackground = st?.hoverBackground || defaultTheme.variants[0].hoverBackground;
        const activeBackground = st?.activeBackground || defaultTheme.variants[0].activeBackground;
        const color = st?.color || defaultTheme.variants[0].color;
        const borderColor = st?.borderColor || defaultTheme.variants[0].borderColor;
        const focusColor = st?.focusColor || defaultTheme.variants[0].focusColor;

        themeVariantCss += (
          `--background: ${background};` +
          `--hoverBackground: ${hoverBackground};` +
          `--activeBackground: ${activeBackground};` +
          `--color: ${color};` +
          `--borderColor: ${borderColor};` +
          `--focusColor: ${focusColor};` +
          `}`
        );

      });
    });

    allSizes.map((sizeType) => {
      allSizesCss += `.${data.mainClassName}.${data.mainClassName}-size-${sizeType} {`;
      let sz = data.sizes.find(size => size.name === sizeType);
      const paddingY = sz?.paddingY === undefined ? defaultSize.paddingY : sz?.paddingY;
      const paddingX = sz?.paddingX === undefined ?  defaultSize.paddingX : sz?.paddingX;
      const fontSize = sz?.fontSize === undefined ? defaultSize.fontSize : sz?.fontSize;
      const lineHeight = sz?.lineHeight === undefined ? defaultSize.lineHeight : sz?.lineHeight;
      const borderWidth = sz?.borderWidth === undefined ? defaultSize.borderWidth : sz?.borderWidth;
      const innerGap = sz?.innerGap === undefined ? defaultSize.innerGap : sz?.innerGap;
      const focusBorderOffset = -1 * ((sz?.borderWidth || defaultSize.borderWidth) + focusOffset);
      height = (paddingY * 2) + fontSize * lineHeight + borderWidth * 2;
      focusHeight = height + (focusOffset * 2);

      allSizesCss += (
        `--paddingY: ${paddingY}px;` +
        `--paddingX: ${paddingX}px;` +
        `--innerGap: ${innerGap}px;` +
        `--fontSize: ${fontSize}px;` +
        `--lineHeight: ${lineHeight};` +
        `--borderWidth: ${borderWidth}px;` +
        `--focusBorderOffset: ${focusBorderOffset}px;` +
        `--focusHeight: ${focusHeight}px;` +
        `}`
      );

    });

    allShapes.map((shapeType) => {
      allShapesCss += `.${data.mainClassName}.${data.mainClassName}-shape-${shapeType} {`;
      let sh = data.shapes.find(shape => shape.name === shapeType);
      let borderRadius = sh?.borderRadius === undefined ? defaultShape.borderRadius : sh?.borderRadius;
      let focusBorderRadius = sh?.focusBorderRadius === undefined ? defaultShape.focusBorderRadius : sh?.focusBorderRadius;
      borderRadius = borderRadius > (height/2) ? Math.ceil(height/2) : borderRadius;
      focusBorderRadius = focusBorderRadius > (focusHeight/2) ? Math.ceil(focusHeight/2) : focusBorderRadius;
      const cut = Math.ceil(((focusHeight - (borderRadius))/focusHeight) * 100);
      const cutLeft = cut > 80 ? 80 : cut;
      const cutRight = (100 - cut) < 20 ? 20 : (100 - cut);

      allShapesCss +=
        `--borderRadius: ${borderRadius}px;` +
        `--focusBorderRadius: ${focusBorderRadius}px;` +
        `--cutLeft: ${cutLeft}%;` +
        `--cutRight: ${cutRight}%;` +
        `}`
    });

    const styles = themeVariantCss + allSizesCss + allShapesCss;
    addStylesheet(styles, stylesId)

  }
}
