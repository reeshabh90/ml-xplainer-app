import { explainerRegistry } from './explainers/modules';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">Welcome to ML Xplainer</h1>
      <p className="mb-4 text-lg">Select an explainer:</p>
      <ul className="space-y-4">
        {Object.values(explainerRegistry).map((exp) => (
          <li key={exp.slug}>
            <Link href={`/explainers/${exp.slug}`} className="text-blue-600 hover:underline text-xl">
              {exp.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
