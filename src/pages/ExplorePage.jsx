import { useNavigation } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { CenteredContainer, TwoColGrid } from '../components/Containers';
import { ExplorePageCard } from '../components/Cards';

const cardTypes = ['subject', 'course', 'programme', 'university'];
const cards = cardTypes.map((t) => <ExplorePageCard key={t} type={t} />);

export function ExplorePage() {
  const { state } = useNavigation();

  return (
    <>
      <main className="bg-neutral-100">
        <CenteredContainer>
          {state === 'loading' ? (
            <Loading cardsCount={12} page="explore" />
          ) : (
            <TwoColGrid>{cards}</TwoColGrid>
          )}
        </CenteredContainer>
      </main>
    </>
  );
}
