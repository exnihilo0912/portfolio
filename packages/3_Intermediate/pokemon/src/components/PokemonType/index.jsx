import Chip from "../Chip";
import Tag from "../Tag";

export const typeDetailByTypeName = {
  fire: { icon: '☲', backgroundColor: '#F19C54', color: 'white' },
  water: { icon: '☵', backgroundColor: '#5190D6', color: 'white' },
  grass: { icon: '⻀', backgroundColor: '#63BC5A', color: 'white' },
  dragon: { icon: '⋉', backgroundColor: '#2F6DC3', color: 'white' },
  normal: { icon: '⋉', backgroundColor: '#a4acaf', color: 'white' },
  flying: { icon: '⾶', backgroundColor: '#90A9DE', color: 'white' },
  poison: { icon: '〒', backgroundColor: '#AA6BC8', color: 'white' },
  electric: { icon: '☳', backgroundColor: '#F4D347', color: 'white' },
  dark: { icon: '☳', backgroundColor: '#5A5465', color: 'white' },
  bug: { icon: '☳', backgroundColor: '#91C13B', color: 'white' },
  ground: { icon: '☳', backgroundColor: '#ab9842', color: 'white' },
  fairy: { icon: '☳', backgroundColor: '#fdb9e9', color: 'white' },
  fighting: { icon: '☳', backgroundColor: '#d56723', color: 'white' },
  psychic: { icon: '☳', backgroundColor: '#f366b9', color: 'white' },
  rock: { icon: '☳', backgroundColor: '#695809', color: 'white' },
  steel: { icon: '☳', backgroundColor: '#9eb7b8', color: 'white' },
  ice: { icon: '☳', backgroundColor: '#51c4e7', color: 'white' },
  ghost: { icon: '☳', backgroundColor: '#7b62a3', color: 'white' },
};

export default function PokemonType({ type, size = 'normal' }) {
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

  const renderBySize = {
    tiny: (<Chip background={backgroundColor}>{icon}</Chip>),
    small: (
      <Tag style={{ background: backgroundColor }}>
        <span style={{ textTransform: 'capitalize', color: 'white' }}>
          {type || 'Unknown'}
        </span>
      </Tag>),
    normal: (
      <Tag style={{ paddingLeft: '3px' }}>
        <Chip background={backgroundColor}>{icon}</Chip>
        <span style={{ textTransform: 'capitalize' }}>
          {type || 'Unknown'}
        </span>
      </Tag>
    ),
  }

  return renderBySize[size];
}