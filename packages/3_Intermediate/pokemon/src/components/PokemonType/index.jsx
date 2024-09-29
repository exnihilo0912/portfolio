import Chip from "../Chip";
import Tag from "../Tag";

const typeDetailByTypeName = {
  fire: { icon: '☲', backgroundColor: '#F19C54', color: 'white' },
  water: { icon: '☵', backgroundColor: '#5190D6', color: 'white' },
  grass: { icon: '⻀', backgroundColor: '#63BC5A', color: 'white' },
  dragon: { icon: '⋉', backgroundColor: '#2F6DC3', color: 'white' },
  normal: { icon: '⋉', backgroundColor: 'hsl(0, 0%, 55%)', color: 'white' },
  flying: { icon: '⾶', backgroundColor: '#90A9DE', color: 'white' },
  poison: { icon: '〒', backgroundColor: '#AA6BC8', color: 'white' },
  electric: { icon: '☳', backgroundColor: '#F4D347', color: 'white' },
  dark: { icon: '☳', backgroundColor: '#5A5465', color: 'white' },
  bug: { icon: '☳', backgroundColor: '#91C13B', color: 'white' },
};

export default function PokemonType({ type }) {
  const {
    backgroundColor,
    icon,
  } = (
    typeDetailByTypeName[type]
    || {
      icon: '⋉',
      backgroundColor: 'hsl(0, 0%, 50%)',
      color: 'white',
    });

  return (
    <Tag>
      <Chip background={backgroundColor}>{icon}</Chip>
      <span style={{ textTransform: 'capitalize' }}>
        {type || 'Unknown'}
      </span>
    </Tag>
  );
}