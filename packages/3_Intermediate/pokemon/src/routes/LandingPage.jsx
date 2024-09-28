import MenuList, { MenuListItem } from '../components/MenuList/Index';
import PageSection from '../components/PageSection/index';
import PageTitle from '../components/PageTitle/index';
import Panel from '../components/Panel';

const menuItems = [
  { name: 'Pokedex', url: 'pokemons/' },
  { name: 'Moves', url: 'moves/' },
  { name: 'Abilities', url: 'abilities/' },
  { name: 'Items', url: 'items/' },
  { name: 'Locations', url: 'locations/' },
  { name: 'Type Charts', url: 'typecharts/' },
]

export default function LandingPage() {
  return (
    <>
      <Panel isSection>
        <PageTitle>What pokemon are you looking for?</PageTitle>
        <MenuList>
          {
            menuItems.map(({ name, url }) => (
              <MenuListItem size='small' to={url}>
                {name}
              </MenuListItem>
            ))
          }
        </MenuList>
      </Panel>
      <section>
        <ul>
          <li>news article</li>
        </ul>
      </section>
    </>
  );
}