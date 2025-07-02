import { StyleProp, TextStyle } from 'react-native';
import { TextPart } from '../types';

/**
 * Parses text with HTML-like tags and returns an array of text parts with their styles
 * @param text - The input text with tags
 * @param tagStyles - Object mapping tag names to styles
 * @returns Array of text parts with their corresponding styles
 */
export const parseTextWithTags = (
  text: string,
  tagStyles: Record<string, StyleProp<TextStyle>> = {}
): TextPart[] => {
  const regex = /<(\w+)>(.*?)<\/\1>/g;
  const output: TextPart[] = [];
  
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [_, tag, content] = match;
    const matchStart = match.index;

    // Add text before the tag
    if (lastIndex < matchStart) {
      output.push({
        text: text.substring(lastIndex, matchStart),
        style: {},
      });
    }

    // Add the tagged content
    output.push({
      text: content,
      style: tagStyles[tag] || {},
    });

    lastIndex = regex.lastIndex;
  }

  // Add remaining text after the last tag
  if (lastIndex < text.length) {
    output.push({
      text: text.substring(lastIndex),
      style: {},
    });
  }

  return output;
};