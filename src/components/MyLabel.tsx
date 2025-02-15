import './MyLabel.css';

interface Props {
  /**
   * Text to display
   */
  label: string;
  /**
   * Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3' ;
  /**
   * Uppercase Text
   */
   allcaps?: boolean;
   /**
    * Color Text
    * 
    */
   color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
   /**
    *  Color Text
    */
    fontColor?: string;
    /**
     * Backgroun Color 
     */
    backgroundColor?: string;
}

/**
 * 
 * ! Todas son opcionales
 * allCaps: boolean
 * color: 'text-primary' | 'text-secondary' | 'text-tertiary'
 * fontColor?: string, texto del span
 */

export const MyLabel = ({label, size = 'normal', allcaps, color , fontColor, backgroundColor = 'transparent'}: Props) => {
  return (
    <span 
        className={`${ size } ${ allcaps && 'uppercase'} ${ color }`}
        style={{ color: fontColor, backgroundColor}}
    > { label } </span>
  )
}

