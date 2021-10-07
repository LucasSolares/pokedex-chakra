import { PokemonModel } from '../models/pokemon.model';
import { Image } from '@chakra-ui/image';
import { Text } from '@chakra-ui/react';
import { Badge, Box } from '@chakra-ui/layout';

export interface PokemonCardProps {
  pokemon: PokemonModel;
}

const COLOR_BASE = {
  HP: 'green',
  ATTACK: 'red',
  DEFENSE: 'blue',
  'SPECIAL-ATTACK': 'orange',
  'SPECIAL-DEFENSE': 'gray',
  SPEED: 'purple',
};

const PokemonCard = ({
  pokemon: { id, name, order, sprites, stats, weight },
}: PokemonCardProps) => {
  return (
    <Box
      bgColor="white"
      borderColor="black"
      rounded="md"
      borderWidth={0.2}
      padding="4"
      maxWidth="xs"
    >
      <Image src={sprites['front_default']} alt={`${name} front`} />
      <Image src={sprites['back_default']} alt={`${name} back`} />
      <Box>
        <Badge>Order: {order}</Badge>
        <Text casing="capitalize" fontWeight="bold" fontSize="lg">{name}</Text>
        <Badge>Weight: {weight}</Badge>
        <Box>
          <Text>Stats</Text>
          {stats.map(({ stat, base_stat }) => (
            <Box margin={1}>
              <Badge
                colorScheme={
                  COLOR_BASE[stat.name.toUpperCase() as keyof typeof COLOR_BASE]
                }
              >
                {stat.name}: {base_stat}
              </Badge>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PokemonCard;
