import { InputGroup, Input, InputRightAddon } from '@chakra-ui/input';
import { SearchIcon, WarningIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Text } from '@chakra-ui/react';
import usePokemonSearch from '../hooks/usePokemonSearch';
import { Spinner } from '@chakra-ui/spinner';
import { ChangeEventHandler, useCallback, useState } from 'react';
import PokemonCard from './PokemonCard';

const SearchTab = () => {
  const [pokemonName, setPokemonName] = useState('');
  const { loading, error, pokemon, searchPokemonByName } = usePokemonSearch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setPokemonName(value);
  };

  const handleSearch = useCallback(async () => {
    await searchPokemonByName(pokemonName);
  }, [pokemonName, searchPokemonByName]);

  return (
    <Box>
      <InputGroup>
        <Input
          type="text"
          name="pokemonName"
          value={pokemonName}
          onChange={handleChange}
        />
        <InputRightAddon
          children={
            <Button onClick={handleSearch} isLoading={loading}>
              <SearchIcon />
            </Button>
          }
        />
      </InputGroup>
      <Box>
        {loading && <Spinner />}
        {error && (
          <>
            <Text color="red">
              <WarningIcon />
              {error.message}
            </Text>
          </>
        )}
        {!loading && pokemon && <PokemonCard pokemon={pokemon} />}
      </Box>
    </Box>
  );
};

export default SearchTab;
