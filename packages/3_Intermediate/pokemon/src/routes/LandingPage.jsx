import MenuList, { MenuListItem } from '../components/MenuList';
import PageTitle from '../components/PageTitle';
import PageSection from '../components/PageSection';

const menuItems = [
  { name: 'Pokedex', url: 'pokemons/' },
  { name: 'Moves', url: 'moves/' },
  { name: 'Abilities', url: 'abilities/' },
  { name: 'Items', url: 'items/' },
  { name: 'Locations', url: 'locations/' },
  { name: 'Type Charts', url: 'type-chart/' },
]

export default function LandingPage() {
  return (
    <>
      <PageSection background="white">
        <PageTitle>What pokemon are you looking for?</PageTitle>
        <MenuList>
          {
            menuItems.map(({ name, url }) => (
              <MenuListItem key={name} size='small' to={url}>
                {name}
              </MenuListItem>
            ))
          }
        </MenuList>
      </PageSection>
      <section>
        <ul>
          <li>news article</li>
        </ul>
      </section>
    </>
  );
}