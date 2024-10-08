import { useNavigation } from 'react-router-dom';
import { CenteredContainer, TwoColGrid } from '../Containers';
import { ExploreSkelton } from '../Skeltons';
import { ExplorePageCard } from '../explore/Cards';

const cardTypes = ['subject', 'course', 'programme', 'university'];
const cards = cardTypes.map((t) => <ExplorePageCard key={t} type={t} />);

export function ExplorePage() {
  const { state } = useNavigation();

  return (
    <>
      <main className="bg-neutral-100">
        <CenteredContainer>
          {state === 'loading' ? (
            <ExploreSkelton />
          ) : (
            <TwoColGrid>{cards}</TwoColGrid>
          )}
        </CenteredContainer>
      </main>
    </>
  );
}
