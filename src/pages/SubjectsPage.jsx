import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import { SubjectCard } from '../components/SubjectCard';
import { Loading } from '../components/Loading';

export function SubjectsPage() {
  const { state } = useNavigation();
  const subjects = useLoaderData();

  return (
    <main>
      <section className="mx-auto my-20 max-w-main">
        <Link to={-1} className="underline">
          ⬅ previous page
        </Link>

        {state === 'loading' ? (
          <Loading page="details" />
        ) : (
          <ul className="mt-5 grid grid-cols-2 gap-12">
            {subjects.map((subject) => (
              <SubjectCard key={subject.id} {...subject} />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
