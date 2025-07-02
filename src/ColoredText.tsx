import React, { memo, FC } from 'react';
import { Text } from 'react-native';
import { ColoredTextProps } from './types';
import { parseTextWithTags } from './utils';

/**
 * A React Native component that renders text with colored tags
 * 
 * @example
 * ```tsx
 * <ColoredText 
 *   tagStyles={{ red: { color: 'red' }, bold: { fontWeight: 'bold' } }}
 * >
 *   This is <red>red text</red> and <bold>bold text</bold>
 * </ColoredText>
 * ```
 */
const ColoredText: FC<ColoredTextProps> = ({ children, style, tagStyles = {} }) => {
  const parsedText = parseTextWithTags(children, tagStyles);

  return (
    <Text style={style}>
      {parsedText.map((part, index) => (
        <Text key={`${part.text}-${index}`} style={part.style}>
          {part.text}
        </Text>
      ))}
    </Text>
  );
};

ColoredText.displayName = 'ColoredText';

export default memo(ColoredText);
