import { TextStyle, StyleProp } from 'react-native';

/**
 * Props for the ColoredText component
 */
export interface ColoredTextProps {
  /**
   * The text content with optional HTML-like tags
   */
  children: string;
  
  /**
   * Style to apply to the root Text component
   */
  style?: StyleProp<TextStyle>;
  
  /**
   * Styles to apply to specific tags
   * Key is the tag name, value is the style to apply
   */
  tagStyles?: Record<string, StyleProp<TextStyle>>;
}

/**
 * Internal type for parsed text parts
 */
export interface TextPart {
  text: string;
  style: StyleProp<TextStyle>;
}