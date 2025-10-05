import { Stack } from '@mui/material';
import { CoinHeaderProps } from './interface';
import {
  HeaderContainer,
  CoinImage,
  InfoStack,
  CoinName,
  CoinSymbol,
  RankChip,
} from './styled';

export default function CoinHeader({
  name,
  symbol,
  image,
  marketCapRank,
}: CoinHeaderProps) {
  return (
    <HeaderContainer direction='row' alignItems='center' spacing={2}>
      <CoinImage component='img' src={image} alt={name} />
      <InfoStack spacing={0.5}>
        <Stack
          direction='row'
          alignItems='center'
          spacing={1.5}
          flexWrap='wrap'
        >
          <CoinName>{name}</CoinName>
          <CoinSymbol component='span'>{symbol?.toUpperCase()}</CoinSymbol>
          {marketCapRank && (
            <RankChip label={`#${marketCapRank}`} size='small' />
          )}
        </Stack>
      </InfoStack>
    </HeaderContainer>
  );
}
