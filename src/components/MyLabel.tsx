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
    * Background Color Text
    */
    fontColor?: string;
}

/**
 * 
 * ! Todas son opcionales
 * allCaps: boolean
 * color: 'text-primary' | 'text-secondary' | 'text-tertiary'
 * fontColor?: string, texto del span
 */

export const MyLabel = ({label, size = 'normal', allcaps, color , fontColor}: Props) => {
  return (
    <span 
        className={`${ size } ${ allcaps && 'uppercase'} ${ color }`}
        style={{ color: fontColor}}
    > { label } </span>
  )
}

